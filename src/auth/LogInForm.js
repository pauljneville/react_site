
import { useState } from 'react';
import { useHistory } from 'react-router-dom';

import { useAuth } from '../hooks/useAuth';
import { useInput } from '../hooks/useInput';

import { dogBlogLinks } from '../constants/url-constants';
import { Helmet } from 'react-helmet-async';
import Header from '../components/dogblog/Header';
import Sidebar from '../components/dogblog/Sidebar';
import Footer from '../components//Footer';

const LogInForm = () => {
    const Helmeted = () => {
        return (
            <Helmet>
                <title>Login | Lali's Dog Blog</title>
                <link rel="icon" href="../assets/dogblog/lalicon.ico" />
                <meta property="og:title" name="title" content="Lali's Dog Blog" />
                <meta property="og:description" name="description" content="Lali blog of recent activities" />
                <meta property="og:url" name="canonical" content="%PUBLIC_URL%/dogblog" />
                <meta property="og:image" name="image" content="../assets/dogblog/lali_bg.jpg" />
            </Helmet>
        )
    };

    const email = useInput('');
    const password = useInput('');

    // const [isGithub, setIsGithub] = useState(false);
    // const [isEmailLink, setIsEmailLink] = useState(false);
    const [isGithub] = useState(false);
    const [isEmailLink] = useState(false);
    const [emailError, setEmailError] = useState('');
    const [emailSent, setEmailSent] = useState(false);

    const history = useHistory();
    const auth = useAuth();

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
                await auth.signInWithEmailAndPassword(email.value, password.value);
                history.replace(dogBlogLinks.home.url);
            } catch (error) {
                console.log('error: ' + error);
                setEmailError(error.message);
            }
        }
    }

    const onDefaultProfile = async () => {
        try {
            await auth.signInWithEmailAndPassword("default@email.com", "defaultPassword");
            history.replace(dogBlogLinks.home.url);
        } catch (error) {
            console.log('error: ' + error);
            setEmailError(error.message);
        }
    }

    // const onGithubSwitch = () => {
    //     setIsGithub(!isGithub);
    //     setIsEmailLink(false);
    // }
    // const onEmailLinkSwitch = () => {
    //     setIsEmailLink(!isEmailLink);
    //     setIsGithub(false);
    // }


    return (
        <div className="dogblog">
            <Helmeted />
            {/* <div className="main-middle-column"> */}
            <div className="top-center">
                <Header />
            </div>
            <div className="middle-column">
                <div className="row-grid-wrapper">
                    <div className="content">
                        <div className="auth-form">
                            {emailSent && <h2>?????? Verify your login!</h2>}
                            {emailSent && <h3>?????? Check your email junk folder ??????</h3>}

                            {!emailSent && <h2>Log in</h2>}
                            {!emailSent && <form onSubmit={onSubmit}>
                                {/* <label className="switch">
                                    <input type="checkbox" checked={isGithub} onChange={onGithubSwitch} />
                                    Use Github to login
                                </label>
                                <label className="switch">
                                    <input type="checkbox" checked={isEmailLink} onChange={onEmailLinkSwitch} />
                                    Use Email link to login
                                </label> */}
                                <label>Email</label>
                                <input
                                    type="text"
                                    required
                                    name="email"
                                    placeholder="Email"
                                    {...email}
                                    error={emailError}
                                />
                                {!isEmailLink && <label>Password</label>}
                                {!isEmailLink && <input
                                    type="text"
                                    required
                                    name="password"
                                    placeholder="Password"
                                    {...password}
                                />}
                                {!auth.isAuthenticating &&
                                    <div className="row">
                                        <button type="submit">Submit</button>
                                        <button className="demo" onClick={onDefaultProfile}>DEMO PROFILE</button>
                                    </div>
                                }
                                {auth.isAuthenticating && <button type="submit" disabled="true">Loading...</button>}
                            </form>}
                        </div>
                    </div>
                    <Sidebar />
                </div >
            </div>
            <Footer />
            <div className="footer-margin"></div>
            {/* </div> */}

        </div>
    );
}

export default LogInForm;