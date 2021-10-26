import { useParams } from "react-router";
// import useFetch from "./useFetch";


import { db } from '../firebase.config';
import { useEffect, useState } from 'react';
import { doc, getDoc } from 'firebase/firestore/lite';
import { Link } from "react-router-dom";
import { dogBlogLinks } from "../constants/url-constants";

const BlogDetails = () => {
    const { id } = useParams();
    // const { data: blog, error, isPending } = useFetch('http://localhost:8000/blogs/' + id);

    const [error, setError] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [blog, setBlog] = useState(null);


    useEffect(() => {
        const fetchBlogs = async () => {
            const blog = await getDoc(doc(db, 'blogs', id));
            if (blog.data()) {
                setBlog({ id: blog.id, data: blog.data() });
            } else {
                setError("Server error. Sorryy 😬🖕🏻");
            }
            setIsPending(false);
        }

        fetchBlogs();
    }, [id]);



    return (

        <div className="content">
            <div className="blog-details">
                {isPending && <div>Loading...</div>}
                {error && <div>{error}</div>}
                {!isPending && blog && (
                    <article>
                        <h2>{String.fromCodePoint(isNaN(blog.data.emoji) ? "0x1F973" : blog.data.emoji)} {blog.data.title}</h2>
                        <p>Written by {blog.data.author}</p>
                        <div>{blog.data.body}</div>
                    </article>
                )}
            </div>
            <div className="links-inline">
                <Link to={dogBlogLinks.home.url} style={{ textDecoration: 'none' }}>
                    <h2>Back</h2>
                </Link>
            </div>
        </div>
    );
}

export default BlogDetails;