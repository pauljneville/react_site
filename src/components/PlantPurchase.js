


import React from "react";
// import Header from './Header';
// import MainBody from './MainBody';
import Footer from './Footer';
// import Sidebar from './Sidebar';
// import NavBar from './NavBar';

import { Helmet } from 'react-helmet-async';

const PlantPurchase = () => {
    const Helmeted = () => {
        return (
            <Helmet>
                <title>Plant Purchase</title>
                <link rel="icon" href="plantpurchase_favicon.ico" />
                <link rel="apple-touch-icon" sizes="180x180" href="../assets/plantpurchase/apple-touch-icon.png" />
                <link rel="icon" type="image/png" sizes="32x32" href="../assets/plantpurchase/favicon-32x32.png" />
                <link rel="icon" type="image/png" sizes="16x16" href="../assets/plantpurchase/favicon-16x16.png" />
                <link rel="manifest" href="../assets/plantpurchase/site.webmanifest" />
                <link rel="mask-icon" href="../assets/plantpurchase/safari-pinned-tab.svg" color="#5bbad5" />
                <meta name="msapplication-TileColor" content="#da532c" />
                <meta name="theme-color" content="#ffffff"></meta>
                <meta property="og:title" name="title" content="Plant Purchase" />
                <meta property="og:description" name="description" content="A communal place to get better plant purchase" />
                <meta property="og:url" name="canonical" content="https://paulneville.com.au/plantpurchase" />
                <meta property="og:image" name="image" content="../assets/foodbook/little_plant.jpg" />
            </Helmet>
        )
    };

    return (
        <div className="plantpurchase">
            <Helmeted />
            <h1>Plant Purchase</h1>
            <h3>Need to get me some better purchase</h3>

            <div className="contents">
                <div className="box">1</div>
                <div className="box">2</div>
                <div className="box">
                    <div className="inner-grid">
                        <div className="inner-grid-box">3</div>
                        <div className="inner-grid-box">4</div>
                    </div></div>
                <div className="box">
                    <div className="inner-grid">
                        <div className="inner-grid-box">5</div>
                        <div className="inner-grid-box">6</div>
                        <div className="inner-grid-box">7</div>
                    </div>
                </div>
                <div className="box">
                    <div className="inner-grid">
                        <div className="inner-grid-box">8</div>
                        <div className="inner-grid-box">9</div>
                    </div>
                </div>
                <div className="box">
                    <div className="inner-grid">
                        <div className="inner-grid-box">10</div>
                        <div className="inner-grid-box">11</div>
                        <div className="inner-grid-box">12</div>
                        <div className="inner-grid-box">13</div>
                        <div className="inner-grid-box">14</div>
                    </div>
                </div>
                <div className="box">
                    <div className="inner-row">
                        <div className="inner-row-box">15</div>
                        {/* <div className="inner-row-box">16</div>
                        <div className="inner-row-box">17</div>
                        <div className="inner-row-box">18</div> */}
                    </div>
                </div>
                <div className="box">
                    <div className="inner-row">
                        <div className="inner-row-box">16</div>
                        <div className="inner-row-box">27</div>
                    </div>
                </div>
            </div>
            <Footer className="footer" />
        </div>
    );
}

export default PlantPurchase;