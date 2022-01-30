
import React from "react";
import Header from './Header';
import Contents from './Contents';
import Footer from './Footer';
import Sidebar from './Sidebar';

import { Helmet } from 'react-helmet';

const DogBlog = () => {
    const Helmeted = () => {
        return (
            <Helmet>
                <title>Lali's Dog Blog</title>
                <link rel="icon" href="../assets/dogblog/lalicon.ico" />
                <meta property="og:title" name="title" content="Lali's Dog Blog" />
                <meta property="og:description" name="description" content="Lali blog of recent activities" />
                <meta property="og:url" name="canonical" content="https://paulneville.com.au/dogblog" />
                <meta property="og:image" name="image" content="../assets/dogblog/lali_bg.jpg" />
            </Helmet>
        )
    };

    return (
        <div className="dogblog">
            <Helmeted />
            {/* <div className="main-middle-column"> */}
            <div className="top-center">
                <Header />
            </div>
            <div className="middle-column">
                <div className="row-grid-wrapper">
                    <Contents />
                    <Sidebar />
                </div >
            </div>
            <Footer />
            <div className="footer-margin"></div>
            {/* </div> */}

        </div>
    );
}

export default DogBlog;