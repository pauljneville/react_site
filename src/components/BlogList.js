import { Link } from "react-router-dom";
import { dogBlogLinks } from "../constants/url-constants";
import Padding from "./Padding";

const BlogList = ({ blogs, title, handleLike }) => {
    // var length = blogs.length;
    return (
        <div className="blog-list">
            <h2>{title}</h2>
            {blogs.map(blog => (
                <Link to={`${dogBlogLinks.blogs.url}${blog.id}`} style={{ textDecoration: 'none' }} key={blog.id}>
                    <div className="blog-preview" >
                        <div className="leading">
                            <h3>{decodeUnicode(blog.data.emoji)}</h3>
                        </div>
                        <Padding TRBL="0 5px 0 5px" />
                        <div className="trailing">
                            <h3>{blog.data.title}</h3>
                            <p>Written by {blog.data.author}</p>
                            {/* <button onClick={() => handleLike(blog.id)}>
                            {String.fromCodePoint(0x1F44D)}
                        </button> */}
                        </div>
                    </div>
                </Link>
            ))}
        </div>
    );
}


function decodeUnicode(input) {
    return String.fromCodePoint(input);
}

export default BlogList;