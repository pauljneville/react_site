

import { Helmet } from 'react-helmet-async';
import Header from './Header';
import Footer from './Footer';
import Sidebar from './Sidebar';

const NotFound = () => {

    const Helmeted = () => {
        return (
            <Helmet>
                <title>Not Found | Lali's Dog Blog</title>
                <link rel="icon" href="../assets/dogblog/lalicon.ico" />
                <meta property="og:title" name="title" content="Lali's Dog Blog" />
                <meta property="og:description" name="description" content="Lali blog of recent activities" />
                <meta property="og:url" name="canonical" content="%PUBLIC_URL%/dogblog" />
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
                    <div className="content">
                        <div className="top-center">
                            <div className="image-404"></div>
                            <h1 style={{ fontSize: '2em' }}>404 Not Found</h1>
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

export default NotFound;