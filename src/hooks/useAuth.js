
import { db } from "../firebase.config";
import {
    getAuth,
    sendSignInLinkToEmail as sendEmailLink,
    isSignInWithEmailLink as isSignInLink,
    signInWithEmailLink as signInLink,
    onAuthStateChanged,
    signOut,
    createUserWithEmailAndPassword as createWithEmailPassword,
    signInWithEmailAndPassword as signWithEmailPassword,
    updateProfile as fbUpdateProfile,
} from "firebase/auth";
import { useState, useEffect, useContext, createContext } from "react";
import { setDoc, updateDoc, doc } from 'firebase/firestore/lite';
import { defaultProfilePhoto } from "../constants/file-constants";

const auth = getAuth();

const AuthContext = createContext();

export const useAuth = () => {
    return useContext(AuthContext);
}

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [isAuthenticating, setIsAuthenticating] = useState(false);

    const createUserWithEmailAndPassword = (email, password) => {
        return createWithEmailPassword(auth, email, password)
            .then((userCredential) => {
                setUser(userCredential.user);
                return userCredential;
            })
            .catch((error) => {
                console.log(error.code);
                console.log(error.message);
            });
    }

    const signInWithEmailAndPassword = (email, password) => {
        return signWithEmailPassword(auth, email, password)
            .then((userCredential) => {
                setUser(userCredential.user);
            })
            .catch((error) => {
                console.log(error.code);
                console.log(error.message);
            });
    }

    const sendSignInLinkToEmail = email => {
        return sendEmailLink(auth, email, {
            url: '%PUBLIC_URL%/confirm',
            handleCodeInApp: true
        })
            .then(() => {
                window.localStorage.setItem('emailForSignIn', email);
                return true;
            })
            .catch((error) => {
                console.log(error);
            });
    }

    const signInWithEmailLink = (email, code) => {
        if (isSignInLink(auth, code)) {
            return signInLink(auth, email, code)
                .then(result => {
                    window.localStorage.removeItem('emailForSignIn');
                    setUser(result.user);
                    return true;
                })
                .catch((error) => {
                    console.log(error);
                });
        }
        else {
            console.log('not a signin link');
        }
    }

    const logout = () => {
        return signOut(auth)
            .then(() => {
                setUser(null);
            });
    }

    const updateProfileName = async (credential, profileName) => {
        return fbUpdateProfile(credential.user, { displayName: profileName })
            .then((value) => {
                return setDoc(doc(db, 'users', credential.user.uid), {
                    uid: credential.user.uid,
                    displayName: credential.user.displayName,
                    email: credential.user.email,
                    photoURL: defaultProfilePhoto
                })
                    .catch((error) => {
                        console.log('setDoc error');
                        console.log(error);
                    });
            })
            .catch((error) => {
                console.log('profile name error');
                console.log(error);
            });
    }

    const updateProfileURL = async (profileURL) => {
        return fbUpdateProfile(user, { photoURL: profileURL })
            .then(async (value) => {
                return updateDoc(doc(db, 'users', user.uid), {
                    photoURL: profileURL
                })
                    .catch((error) => {
                        console.log('updateDoc error');
                        console.log(error);
                    });
            })
            .catch((error) => {
                console.log('profile picture error');
                console.log(error);
            });
    }

    /// Subscribe to user on mount
    /// Because this sets state in the callback, it will cause any
    /// component that utilizes this hook to re-render with the
    /// latest auth object
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, user => {

            if (user) {
                setUser(user);
                setIsAuthenticating(false);
            } else {
                setUser(false);
            }
        });

        // Cleanup subscription on unmount
        return () => unsubscribe();
    }, []);

    const values = {
        user,
        isAuthenticating,
        createUserWithEmailAndPassword,
        signInWithEmailAndPassword,
        sendSignInLinkToEmail,
        signInWithEmailLink,
        updateProfileName,
        updateProfileURL,
        logout
    };

    return (
        <AuthContext.Provider value={values}>
            {!isAuthenticating && children}
        </AuthContext.Provider>
    );
}
