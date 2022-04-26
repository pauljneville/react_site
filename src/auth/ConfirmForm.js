
import { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import { useAuth } from '../hooks/useAuth';

import { Helmet } from 'react-helmet-async';
import Header from '../components/dogblog/Header';
import Sidebar from '../components/dogblog/Sidebar';
import Footer from '../components/Footer';


const ConfirmForm = () => {
    const Helmeted = () => {
        return (
            <Helmet>
                <title>Confirm | Lali's Dog Blog</title>
                <link rel="icon" href="../assets/dogblog/lalicon.ico" />
                <meta property="og:title" name="title" content="Lali's Dog Blog" />
                <meta property="og:description" name="description" content="Lali blog of recent activities" />
                <meta property="og:url" name="canonical" content="%PUBLIC_URL%/dogblog" />
                <meta property="og:image" name="image" content="../assets/dogblog/lali_bg.jpg" />
            </Helmet>
        )
    };

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
        <div className="dogblog">
            <Helmeted />
            {/* <div className="main-middle-column"> */}
            <div className="top-center">
                <Header />
            </div>
            <div className="middle-column">
                <div className="row-grid-wrapper">
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
                    <Sidebar />
                </div >
            </div>
            <Footer />
            <div className="footer-margin"></div>
            {/* </div> */}

        </div>
    );

}

export default ConfirmForm;