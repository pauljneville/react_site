import BlogList from './BlogList';
import Padding from './Padding';

import { db } from '../firebase.config';
import { useEffect, useState } from 'react';
import { collection, getDocs, query, limit, orderBy } from 'firebase/firestore/lite';

import PostBlogEntry from "./PostBlogEntry";
import { useAuth } from "../hooks/useAuth";


import { Helmet } from 'react-helmet-async';
import Header from './Header';
import Footer from './Footer';
import Sidebar from './Sidebar';

const Home = () => {
    const Helmeted = () => {
        return (
            <Helmet>
                <title>Lali's Dog Blog</title>
                <link rel="icon" href="../assets/dogblog/lalicon.ico" />
                <meta property="og:title" name="title" content="Lali's Dog Blog" />
                <meta property="og:description" name="description" content="Lali blog of recent activities" />
                <meta property="og:url" name="canonical" content="%PUBLIC_URL%/dogblog" />
                <meta property="og:image" name="image" content="../assets/dogblog/lali_bg.jpg" />
            </Helmet>
        )
    };

    const [error, setError] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [blogs, setBlogs] = useState([]);

    const [isMakingPost, setMakingPost] = useState(false);
    const { user } = useAuth();

    useEffect(() => {
        fetchBlogs();
    }, []);

    const fetchBlogs = async () => {
        const blogsCollection = query(collection(db, 'blogs'), limit(10), orderBy('createdAt', 'desc'),);
        await getDocs(blogsCollection)
            .then(snapshot => {
                const blogsList = snapshot.docs.map(doc => ({ id: doc.id, data: doc.data() }));
                setBlogs(blogsList)
            })
            .catch((error => {
                setError("Server error. Sorryy 😬");
            }));
        setIsPending(false);
    }

    const handleLike = (id) => {
        let index = blogs.findIndex((x) => x.id === id);
        blogs[index].likes++;
        //setBlogs(blogs);
    }

    const lalisBlogs = blogs != null ? blogs.filter(
        (blog) => blog.data.author.toLowerCase() === 'lali') : [];

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
                        {user ? (isMakingPost ? <PostBlogEntry onCancel={() => setMakingPost(false)} /> : <button onClick={() => setMakingPost(true)}>New Blog</button>) : <div></div>}
                        {/* <SizedBox height="20rem" /> */}
                        {error && <div>{error}</div>}
                        {isPending && <div>Loading...</div>}
                        {blogs && blogs.length > 0 && <BlogList blogs={blogs} title="Blog Entries"
                            handleLike={handleLike} />}
                        {blogs && blogs.length > 0 && <Padding TRBL="20px 0px 0 0px" />}
                        {blogs && blogs.length > 0 && lalisBlogs.length > 0 &&
                            <BlogList blogs={lalisBlogs}
                                title="Written by Lali"
                                handleLike={handleLike} />}
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

export default Home;
