import BlogList from './BlogList';
import Padding from './Padding';

import { db } from '../firebase.config';
import { useEffect, useState } from 'react';
import { collection, getDocs, query, limit } from 'firebase/firestore/lite';

import PostBlogEntry from "./PostBlogEntry";
import { useAuth } from "../hooks/useAuth";

const Home = () => {

    const [error, setError] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [blogs, setBlogs] = useState([]);


    const [isMakingPost, setMakingPost] = useState(false);
    const { user } = useAuth();

    useEffect(() => {
        fetchBlogs();
    }, []);

    const fetchBlogs = async () => {
        const blogsCollection = query(collection(db, 'blogs'), limit(10));
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
    );
}

export default Home;
