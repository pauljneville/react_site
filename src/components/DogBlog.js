
import React from "react";
import Header from './Header';
import Contents from './Contents';
import Footer from './Footer';
import Sidebar from './Sidebar';
import NavBar from './DogBlogNavbar';

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
            <Header />
            <NavBar />
            <Contents />
            <Sidebar />
            <Footer />
        </div>

    );
}

export default DogBlog;