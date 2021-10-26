
import { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import { useAuth } from '../hooks/useAuth';


const ConfirmForm = () => {
    const [email, setEmail] = useState('');
    // const [password, setPassword] = useState('');
    // const [isGithub, setIsGithub] = useState(false);

    const [emailError, setEmailError] = useState('');

    const { signInWithEmailLink, isAuthenticating } = useAuth();

    const history = useHistory();
    //const location = useLocation

    const onSubmit = async (data) => {
        data.preventDefault();
        try {
            await signInWithEmailLink(email, window.location.href);
            history.push('/home');
        } catch (error) {
            console.log('error: ' + error);
            setEmailError(error.message);
        }
    }

    useEffect(() => {
        let email = window.localStorage.getItem('emailForSignIn');
        email && setEmail(email);
    }, []);


    // const onGithubSwitch = () => {
    //     setIsGithub(!isGithub);
    // }

    return (
        <div className="auth-form">
            <h2>Confirm Email</h2>

            <form onSubmit={onSubmit}>
                {/* <label className="switch">
                    <input type="checkbox" onClick={onGithubSwitch} />
                    Use Github to login
                </label> */}
                <label>Email</label>
                <input
                    type="text"
                    required
                    name="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    error={emailError}
                />
                {/* {isGithub && <label>Password</label>}
                {isGithub && <input
                    type="text"
                    required
                    name="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />} */}
                {!isAuthenticating && <button type="submit">Submit</button>}
                {isAuthenticating && <button type="submit" disabled="true">Loading...</button>}
            </form>

        </div>
    );
}

export default ConfirmForm;