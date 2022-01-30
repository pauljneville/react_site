
import React from "react";
// import Header from './Header';
// import MainBody from './MainBody';
// import Footer from './Footer';
// import Sidebar from './Sidebar';
// import NavBar from './NavBar';
import { Helmet } from 'react-helmet';

const FoodBook = () => {
    const Helmeted = () => {
        return (
            <Helmet>
                <title>Food Book</title>
                <link rel="icon" href="foodbook_favicon.ico" />
                <link rel="apple-touch-icon" sizes="180x180" href="../assets/foodbook/apple-touch-icon.png" />
                <link rel="icon" type="image/png" sizes="32x32" href="../assets/foodbook/favicon-32x32.png" />
                <link rel="icon" type="image/png" sizes="16x16" href="../assets/foodbook/favicon-16x16.png" />
                <link rel="manifest" href="../assets/foodbook/site.webmanifest" />
                <link rel="mask-icon" href="../assets/foodbook/safari-pinned-tab.svg" color="#5bbad5" />
                <meta name="msapplication-TileColor" content="#da532c" />
                <meta name="theme-color" content="#ffffff"></meta>
                <meta property="og:title" name="title" content="A Book for How to Cook Food" />
                <meta property="og:description" name="description" content="Learn ways to Cook from the Book" />
                <meta property="og:url" name="canonical" content="https://paulneville.com.au/foodbook" />
                <meta property="og:image" name="image" content="../assets/foodbook/food_bg.jpg" />
            </Helmet>
        )
    };

    return (
        <div className="foodbook">
            <Helmeted></Helmeted>
            <div className="header">
                <div className="centercenter">
                    <div>
                        <h1>Food Book</h1>
                        <p>centercenter</p>
                    </div>
                </div>
            </div>
            <div className="main">
                <div className="startend">
                    <div>
                        <h3>Hungry Fella?</h3>
                        <p>startend</p>
                    </div>
                </div>
            </div>
            <div className="section">
                <div className="centerend">
                    <p>section</p>
                    <p>centerend</p>
                </div>
            </div>
            <div className="aside">
                <div className="centerstart">
                    <div>
                        <p>aside</p>
                        <p>centerstart</p>
                    </div>
                </div>
            </div>
            <div className="nav">
                <div className="startstart">
                    <div>
                        <p>nav</p>
                        <p>startstart</p>
                    </div>
                </div>
            </div>
            <div className="footer">
                <div className="endend">
                    <div>
                        <p>Hosted on Firebase</p>
                        <p>endend</p>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default FoodBook;