import { Redirect, useParams } from "react-router-dom";

import { db } from '../firebase.config';
import { doc, getDoc, updateDoc } from 'firebase/firestore/lite';
import { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import { dogBlogLinks } from "../constants/url-constants";


import { Helmet } from 'react-helmet-async';
import Header from './Header';
import Footer from './Footer';
import Sidebar from './Sidebar';

import EditBlogEntry from "./EditBlogEntry";

import ReactMarkdown from "react-markdown";
import gfm from 'remark-gfm';
import remarkMath from 'remark-math';
// import rehypeKatex from 'rehype-katex';
import rehypeMathjax from 'rehype-mathjax';
// import remarkRehype from 'remark-rehype';
// import { BlockMath, InlineMath } from 'react-katex';

const BlogDetails = () => {
    const Helmeted = () => {
        return (
            <Helmet>
                <title>Blog Details | Lali's Dog Blog</title>
                <link rel="icon" href="../assets/dogblog/lalicon.ico" />
                <meta property="og:title" name="title" content="Lali's Dog Blog" />
                <meta property="og:description" name="description" content="Lali blog of recent activities" />
                <meta property="og:url" name="canonical" content="%PUBLIC_URL%/dogblog" />
                <meta property="og:image" name="image" content="../assets/dogblog/lali_bg.jpg" />
            </Helmet>
        )
    };

    const params = useParams();
    const [error, setError] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [blog, setBlog] = useState(null);

    const [isEditing, setIsEditing] = useState(false);
    const [title, setTitle] = useState("");
    const [blogContents, setBlogContents] = useState("");
    const [emoji, setEmoji] = useState("0x1F600");

    useEffect(() => {
        // TODO fetch blog before details, pass in name to Helmet title
        const fetchBlogs = async () => {
            // console.log(params.id);
            try {
                const blogRef = await getDoc(doc(db, 'blogs', params.id));
                const data = blogRef.data();
                if (data) {
                    setBlog(blogRef);
                    setTitle(data.title);
                    setBlogContents(data.body);
                    setEmoji(data.emoji);
                } else {
                    setError("Server error. Sorryy 😬");
                }
                setIsPending(false);
            } catch {
                setIsPending(false);
                <Redirect to="/dogblog/NOT FOUND" />
            }
        }
        fetchBlogs();
    }, [params]);

    const handleEdit = async () => {
        // e.preventDefault();

        try {
            await updateDoc(doc(db, 'blogs', blog.id), { "title": title, "body": blogContents, "emoji": emoji });
        } catch (error) {
            console.log(error);
        }

        // setAuthor('');
        // setTitle('');
        // setBlogContents('');
        // setEmoji("0x1F600");

        // history.push(dogBlogLinks.home);
        setIsEditing(false)
    }

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
                        <div className="blog-details">
                            {isPending && <div>Loading...</div>}
                            {error && <div>{error}</div>}
                            {!isPending && blog && (
                                <article>
                                    {isEditing ?
                                        <EditBlogEntry blog={{ title, blogContents, emoji, setTitle, setBlogContents, setEmoji }} handleEdit={() => handleEdit()} onCancel={() => setIsEditing(false)} />
                                        : <button className="edit" onClick={() => setIsEditing(true)}></button>}
                                    {!isEditing ? <div><h2>{String.fromCodePoint(isNaN(emoji) ? "0x1F973" : emoji)} {title}</h2>
                                        <p>Written by {blog.data().author}</p>
                                        <div>
                                            <ReactMarkdown
                                                remarkPlugins={[gfm, remarkMath]}
                                                rehypePlugins={[rehypeMathjax]}
                                            >
                                                {blogContents}
                                            </ReactMarkdown>
                                        </div>
                                    </div> : <div></div>}
                                </article>
                            )}
                        </div>
                        <div className="links-inline">
                            <Link to={dogBlogLinks.home.url} style={{ textDecoration: 'none' }}>
                                <h2>Back</h2>
                            </Link>
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

export default BlogDetails;