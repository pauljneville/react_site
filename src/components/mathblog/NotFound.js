
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { mathBlogLinks } from '../../constants/url-constants';
import { Centered } from './components/Centered';

const NotFound = () => {
    const Helmeted = () => {
        return (
            <Helmet>
                <title>Not Found | Math Blog</title>
                <link rel="icon" href="../assets/mathblog/favicon.ico" />
                <meta property="og:title" name="title" content="Math Blog" />
                <meta property="og:description" name="description" content="Math Blog" />
                <meta property="og:url" name="canonical" content="%PUBLIC_URL%/mathblog" />
                <meta property="og:image" name="image" content="../assets/mathblog/og-image.png" />
            </Helmet>
        )
    };

    return (
        <>
            <Helmeted />
            <Centered paddingTop="20vh">
                <h1 style={{ fontSize: '2em' }}>404 Not Found</h1>

                <Link to={mathBlogLinks.home.url} >
                    <h2>Take me home!</h2>
                </Link>
            </Centered>
        </>
    );

}

export default NotFound;