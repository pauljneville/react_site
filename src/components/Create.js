
import { db } from '../firebase.config';
import { useState } from 'react';
import { addDoc, collection } from "firebase/firestore/lite";
import { useHistory } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';

const Create = () => {
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

        history.push('/home');
    }


    // const generateEmojis = (setCount) => {
    //     let options = [];
    //     let hex = [];

    //     for (let i = 0; i < setCount; ++i) {
    //         hex = [];
    //         for (let j = 0; j < 3; ++j) {
    //             hex += (Math.floor(Math.random() * 8)).toString(8);
    //         }
    //         let utf8Emoji = "0x1F" + hex;
    //         console.log(utf8Emoji);
    //         options.push(<option key={i} value={utf8Emoji}>{String.fromCodePoint(utf8Emoji)}</option>);
    //     }

    //     return options;
    // }

    return (
        <div className="content">

            <div className="create">
                <h2>Add a New Blog</h2>

                <form onSubmit={handleSubmit}>
                    <label>Author</label>
                    <input
                        disabled={true}
                        type="text"
                        required
                        name="author"
                        placeholder="Author"
                        value={author}
                        onChange={(e) => setAuthor(e.target.value)}
                    />
                    <label>Title</label>
                    <input
                        type="text"
                        required
                        name="title"
                        placeholder="Title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />

                    <label>Blog Contents</label>
                    <textarea
                        required
                        name="body"
                        placeholder="Blog Contents"
                        value={blogContents}
                        onChange={(e) => setBlogContents(e.target.value)}
                    ></textarea>

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
                    {/* <input
                            type="text"
                            required
                            name="emoji"
                            placeholder="Emoji Unicode"
                        /> */}
                    <button type="submit">Add Blog</button>
                </form>
                <p>Author: {author}</p>
                <p>Title: {title}</p>
                <p>Blog Contents:</p>
                <p>{blogContents}</p>
                <p>Emoji:</p>
                <p style={{ fontSize: "26px" }}>{String.fromCodePoint(emoji)}</p>

            </div>

        </div>
    );
}

export default Create;