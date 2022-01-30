
import { db } from '../firebase.config';
import { useState } from 'react';
import { addDoc, collection } from "firebase/firestore/lite";
import { useHistory } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';
import { dogBlogLinks } from '../constants/url-constants';

const PostBlogEntry = ({ onCancel }) => {
    const auth = useAuth();

    const [author, setAuthor] = useState(auth.user.displayName);
    const [title, setTitle] = useState('');
    const [blogContents, setBlogContents] = useState('');
    const [emoji, setEmoji] = useState("0x1F600");

    const history = useHistory();

    const handleSubmit = async (e) => {
        e.preventDefault();

        const blog = { author, title, body: blogContents, emoji };
        await addDoc(collection(db, 'blogs'), blog);

        setAuthor('');
        setTitle('');
        setBlogContents('');
        setEmoji("0x1F600");

        history.push(dogBlogLinks.home);
    }

    return (
        <div className="row-wrapper">
            <div className="create">
                <div className="row-wrapper">
                    <h2>Add a New Blog</h2>
                    <div style={{ width: "1em" }}></div>
                    <div><button className="cancel" onClick={() => { onCancel() }}></button></div>
                </div>

                <form onSubmit={handleSubmit}>
                    <div className="row">
                        <div>
                            <label>Title</label>
                            <input
                                type="text"
                                required
                                name="title"
                                placeholder="Title"
                                maxLength="40"
                                value={title}
                                onChange={(e) => setTitle(e.target.value)}
                            />
                        </div>
                        <div>
                            <label>Emoji</label>
                            <select value={emoji}
                                onChange={(e) => setEmoji(e.target.value)}>
                                <optgroup>
                                    <option value="0x1F600">{String.fromCodePoint("0x1F600")}</option>
                                    <option value="0x1F602">{String.fromCodePoint("0x1F602")}</option>
                                    <option value="0x1F643">{String.fromCodePoint("0x1F643")}</option>
                                    <option value="0x1F69A">{String.fromCodePoint("0x1F69A")}</option>
                                    <option value="0x1F495">{String.fromCodePoint("0x1F495")}</option>
                                    <option value="0x1F9B4">{String.fromCodePoint("0x1F9B4")}</option>
                                    {/* {generateEmojis(6)} */}
                                </optgroup>
                            </select>
                        </div>
                    </div>

                    <label>Blog Contents</label>
                    <textarea
                        required
                        name="body"
                        placeholder="Blog Contents"
                        maxLength="400"
                        value={blogContents}
                        onChange={(e) => setBlogContents(e.target.value)}
                    ></textarea>
                    <button type="submit">Add Blog</button>
                </form>
            </div>
        </div>
    );
}

export default PostBlogEntry;