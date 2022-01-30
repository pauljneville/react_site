
// import { db } from '../firebase.config';
// import { useState } from 'react';
// import { addDoc, collection } from "firebase/firestore/lite";
// import { useHistory } from 'react-router-dom';
// import { useAuth } from '../hooks/useAuth';
// import { dogBlogLinks } from '../constants/url-constants';

// const Create = () => {
//     const auth = useAuth();

//     const [author, setAuthor] = useState(auth.user.displayName);
//     const [title, setTitle] = useState('');
//     const [blogContents, setBlogContents] = useState('');
//     const [emoji, setEmoji] = useState("0x1F600");

//     const history = useHistory();

//     const handleSubmit = async (e) => {
//         e.preventDefault();

//         const blog = { author, title, body: blogContents, emoji };
//         await addDoc(collection(db, 'blogs'), blog);

//         setAuthor('');
//         setTitle('');
//         setBlogContents('');
//         setEmoji("0x1F600");

//         history.push('/dogblog');
//     }

//     return (
//         <div className="content">

//             <div className="create">
//                 <h2>Add a New Blog</h2>

//                 <form onSubmit={handleSubmit}>
//                     <label>Author</label>
//                     <input
//                         disabled={true}
//                         type="text"
//                         required
//                         name="author"
//                         placeholder="Author"
//                         value={author}
//                         onChange={(e) => setAuthor(e.target.value)}
//                     />
//                     <label>Title</label>
//                     <input
//                         type="text"
//                         required
//                         name="title"
//                         placeholder="Title"
//                         value={title}
//                         onChange={(e) => setTitle(e.target.value)}
//                     />

//                     <label>Blog Contents</label>
//                     <textarea
//                         required
//                         name="body"
//                         placeholder="Blog Contents"
//                         value={blogContents}
//                         onChange={(e) => setBlogContents(e.target.value)}
//                     ></textarea>

//                     <label>Emoji</label>
//                     <select value={emoji}
//                         onChange={(e) => setEmoji(e.target.value)}>
//                         <optgroup>
//                             <option value="0x1F600">{String.fromCodePoint("0x1F600")}</option>
//                             <option value="0x1F602">{String.fromCodePoint("0x1F602")}</option>
//                             <option value="0x1F643">{String.fromCodePoint("0x1F643")}</option>
//                             <option value="0x1F69A">{String.fromCodePoint("0x1F69A")}</option>
//                             <option value="0x1F495">{String.fromCodePoint("0x1F495")}</option>
//                             <option value="0x1F9B4">{String.fromCodePoint("0x1F9B4")}</option>
//                         </optgroup>

//                     </select>
//                     <button type="submit">Add Blog</button>
//                 </form>

//             </div>

//         </div>
//     );
// }

// export default Create;