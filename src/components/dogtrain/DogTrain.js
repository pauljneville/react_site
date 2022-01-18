import React from "react";
import { ReactComponent as ChevronSVG } from "../../assets/dogtrain/chevron_arch.svg";

import { Helmet } from 'react-helmet';
import facebookLogo from "../../assets/facebook-logo.png";
import instagramLogo from "../../assets/instagram-logo.png";

import { Link } from "react-router-dom";
import { dogTrainLinks } from "../../constants/url-constants";
import PageContent from "./PageContent";

const DogTrain = () => {
    const Helmeted = () => {
        return (
            <Helmet>
                <title>Dog Train Train Training</title>
                <link rel="icon" href="chevron_favicon.ico" />
                <link rel="apple-touch-icon" sizes="180x180" href="../assets/dogtrain/apple-touch-icon.png" />
                <link rel="icon" type="image/png" sizes="32x32" href="../assets/dogtrain/favicon-32x32.png" />
                <link rel="icon" type="image/png" sizes="16x16" href="../assets/dogtrain/favicon-16x16.png" />
                <link rel="manifest" href="../assets/dogtrain/site.webmanifest" />
                <link rel="mask-icon" href="../assets/dogtrain/safari-pinned-tab.svg" color="#5bbad5" />
                <meta name="msapplication-TileColor" content="#da532c" />
                <meta name="theme-color" content="#ffffff"></meta>
                <meta property="og:title" name="title" content="A dog training" />
                <meta property="og:description" name="description" content="Come train yourself to train your dog" />
                <meta property="og:url" name="canonical" content="https://paulneville.com.au/dogtrain" />
                <meta property="og:image" name="image" content="../assets/dogtrain/chevron_logo.png" />
            </Helmet>
        )
    };

    return (
        <div className="dog-train">
            <div className="mainpage">
                <Helmeted />
                <div className="header">
                    <Link to={dogTrainLinks.home.url} className="page-link centerstart">
                        <div className="logo-text"><h1>DOG TRAIN</h1></div>
                        <div className="logo-text"><h2>DOG TRAINING</h2></div>
                        <ChevronSVG width="90" height="50px" />
                    </Link>
                </div>
                <div className="nav">
                    <div className="links">
                        <Link to={dogTrainLinks.training.url} className="page-link"><h2>{dogTrainLinks.training.label}</h2></Link>
                        <Link to={dogTrainLinks.walking.url} className="page-link"><h2>{dogTrainLinks.walking.label}</h2></Link>

                        <Link to={dogTrainLinks.login.url} className="button-link login">LOG-IN</Link>
                    </div>

                </div>
                <PageContent />

                <div className="footer">
                    <div className="sections">
                        <div>
                            <h4>Follow Us</h4>
                            <img src={facebookLogo} alt="facebook logo" width="40px" height="35px" />
                            <img src={instagramLogo} alt="instagram logo" width="35px" height="35px" />
                        </div>
                        <div>
                            <h4>Service</h4>
                            <p>Contact Us</p>
                            <p>Consultation</p>
                            <p>Session</p>
                        </div>
                        <div>
                            <h4>Company</h4>
                            <p>Terms and Conditions</p>
                            <p>Privacy</p>
                            <p>FAQs</p>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
}

export default DogTrain;