
import { useState } from 'react';

import { useHistory } from 'react-router-dom';

import { useAuth } from '../hooks/useAuth';
import { useInput } from '../hooks/useInput';
// import { useToggleSwitch } from '../hooks/useToggleSwitch';
import { dogBlogLinks } from '../constants/url-constants';


const SignUpForm = () => {
    const email = useInput('');
    const password = useInput('');
    const displayName = useInput('');


    const [isGithub, setIsGithub] = useState(false);
    const [isEmailLink, setIsEmailLink] = useState(false);
    const [emailError, setEmailError] = useState('');
    const [emailSent, setEmailSent] = useState(false);

    const auth = useAuth();
    const history = useHistory();

    const onSubmit = async (data) => {
        data.preventDefault();

        if (isEmailLink) {
            try {
                await auth.sendSignInLinkToEmail(email.value);
                setEmailSent(true);
            } catch (error) {
                console.log('error: ' + error);
                setEmailError(error.message);
            }
        } else if (isGithub) {
            // sign in with github
        } else {
            // sign in with email and password
            try {
                await auth.createUserWithEmailAndPassword(email.value, password.value)
                    .then((userCredential) => {
                        return auth.updateProfileName(userCredential, displayName.value);
                    })
                    .then((res) => {
                        history.push(dogBlogLinks.home.url);
                    })
                    .catch((error) => {
                        console.log('error here');
                        console.log(error);
                    });

            } catch (error) {
                console.log('error: ' + error);
                setEmailError(error.message);
            }
        }
    }

    const onGithubSwitch = () => {
        setIsGithub(!isGithub);
        setIsEmailLink(false);
    }
    const onEmailLinkSwitch = () => {
        setIsEmailLink(!isEmailLink);
        setIsGithub(false);
    }

    return (
        <div className="auth-form">
            {emailSent && <h2>✔️ Verify your login!</h2>}
            {emailSent && <h3>✉️ Check your email junk folder ⚠️</h3>}


            {!emailSent && <h2>Sign Up</h2>}
            {!emailSent && <form onSubmit={onSubmit}>
                <label className="switch">
                    <input type="checkbox" checked={isGithub} onChange={onGithubSwitch} />
                    Use Github
                </label>
                <label className="switch">
                    <input type="checkbox" checked={isEmailLink} onChange={onEmailLinkSwitch} />
                    Use Email link
                </label>

                {!isGithub && <label>Display Name</label>}
                {!isGithub && <input
                    type="text"
                    required
                    name="displayName"
                    placeholder="Display Name"
                    {...displayName}
                />}
                <label>Email</label>
                <input
                    type="text"
                    required
                    name="email"
                    placeholder="Email"
                    {...email}
                    error={emailError}
                />
                {<label>Password</label>}
                {<input
                    type="text"
                    required
                    name="password"
                    placeholder="Password"
                    {...password}
                />}
                {!auth.isAuthenticating && <button type="submit">Submit</button>}
                {auth.isAuthenticating && <button type="submit" disabled="true">Loading...</button>}
            </form>}
        </div>
    );
}

export default SignUpForm;