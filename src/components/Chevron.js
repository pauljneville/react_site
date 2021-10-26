import React from "react";
import { ReactComponent as ChevronSVG } from "../assets/chevron/chevron_arch.svg";

import { Helmet } from 'react-helmet';
import ProfileBrief from "./ProfileBrief";
import dogProfileUrl from "../assets/dog-profile.PNG";
import facebookLogo from "../assets/facebook-logo.png";
import instagramLogo from "../assets/instagram-logo.png";

import { Link } from "react-router-dom";
import { chevronLinks } from "../constants/url-constants";
import videoMockup1 from "../assets/chevron/mockup_photos/video_mockups/video_mock_1.jpg";
import videoMockup2 from "../assets/chevron/mockup_photos/video_mockups/video_mock_2.jpg";
import videoMockup3 from "../assets/chevron/mockup_photos/video_mockups/video_mock_3.jpg";

const Chevron = () => {
    const Helmeted = () => {
        return (
            <Helmet>
                <title>Chevron Dog Training</title>
                <link rel="icon" href="chevron_favicon.ico" />
                <link rel="apple-touch-icon" sizes="180x180" href="../assets/chevron/apple-touch-icon.png" />
                <link rel="icon" type="image/png" sizes="32x32" href="../assets/chevron/favicon-32x32.png" />
                <link rel="icon" type="image/png" sizes="16x16" href="../assets/chevron/favicon-16x16.png" />
                <link rel="manifest" href="../assets/chevron/site.webmanifest" />
                <link rel="mask-icon" href="../assets/chevron/safari-pinned-tab.svg" color="#5bbad5" />
                <meta name="msapplication-TileColor" content="#da532c" />
                <meta name="theme-color" content="#ffffff"></meta>
                <meta property="og:title" name="title" content="A dog training" />
                <meta property="og:description" name="description" content="Come train yourself to train your dog" />
                <meta property="og:url" name="canonical" content="https://paulneville.com.au/chevron" />
                <meta property="og:image" name="image" content="../assets/chevron/chevron_logo.png" />
            </Helmet>
        )
    };

    const handleLogout = () => {

    }

    return (
        <div className="chevron">
            <Helmeted></Helmeted>
            <div className="header">
                <div className="centerend">
                    <div className="logo-text"><h1>CHEVR</h1><h1 className="logo-bg">O</h1><h1>N</h1></div>
                    <div className="logo-text"><h2>DOG TRAINING</h2></div>
                    <ChevronSVG width="90" height="50px" />
                </div>
            </div>
            <div className="nav">
                <div className="links">
                    <Link to={chevronLinks.training.url} className="link-button"><h2>{chevronLinks.training.label}</h2></Link>
                    <Link to={chevronLinks.walking.url} className="link-button"><h2>{chevronLinks.walking.label}</h2></Link>

                    <div className="login"><button onClick={() => handleLogout()}>LOG-IN</button></div>
                </div>

            </div>

            <div className="booknow">
                <div className="centercenter">
                    <div className="videos">
                        <img src={videoMockup3} alt="videos" />
                        <img src={videoMockup2} alt="videos" />
                        <img src={videoMockup1} alt="videos" />
                    </div>
                    <div>
                        <button>BOOK NOW</button>
                    </div>
                </div>
            </div>
            <div className="recruits">
                <div className="centerstart">
                    <div className="title">
                        <h2>Recruits</h2>
                    </div>
                    <ProfileBrief data={{ photoUrl: dogProfileUrl, name: "Best Friend", subtitle: "Private", description: "She is so well behaved" }} />

                </div>
            </div>
            <div className="staff">
                <div className="centerstart">
                    <div className="title"><h2>Staff</h2></div>
                    <ProfileBrief data={{ photoUrl: dogProfileUrl, name: "Best Friend", subtitle: "Private", description: "She is so well behaved" }} />

                </div>
            </div>
            <div className="footer">
                <div className="sections">
                    <div>
                        <h4>Follow Us</h4>
                        <img src={facebookLogo} alt="facebook logo" width="40px" height="35px" />
                        <img src={instagramLogo} alt="instagram logo" width="35px" height="35px" />
                    </div>
                    <div>
                        <h4>Service</h4>
                        <p>Consultation</p>
                        <p>Session</p>
                    </div>
                    <div>
                        <h4>Company</h4>
                        <p>Terms and Conditions</p>
                        <p>Privacy</p>
                        <p>FAQs</p>
                    </div>

                    <div>
                        <h4>Public</h4>
                        <p>Contact Us</p>
                    </div>


                </div>

            </div>

        </div >

    );
}

export default Chevron;