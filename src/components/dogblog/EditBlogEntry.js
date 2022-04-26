

const EditBlogEntry = ({ blog, handleEdit, onCancel }) => {
    return (
        <div className="row-wrapper">
            <div className="create">
                <div className="row-wrapper">
                    <h2>Edit Blog</h2>
                    <div style={{ width: "1em" }}></div>
                    <div><button className="cancel" onClick={() => { onCancel() }}></button></div>
                </div>

                {/* <form onSubmit={handleEdit}> */}
                <div className="row">
                    <div>
                        <label>Title</label>
                        <input
                            type="text"
                            required
                            name="title"
                            placeholder="Title"
                            maxLength="40"
                            value={blog.title}
                            onChange={(e) => blog.setTitle(e.target.value)}
                        />
                    </div>
                    <div>
                        <label>Emoji</label>
                        <select value={blog.emoji}
                            onChange={(e) => blog.setEmoji(e.target.value)}>
                            <optgroup>
                                <option value="0x1F600">{String.fromCodePoint("0x1F600")}</option>
                                <option value="0x1F602">{String.fromCodePoint("0x1F602")}</option>
                                <option value="0x1F643">{String.fromCodePoint("0x1F643")}</option>
                                <option value="0x1F69A">{String.fromCodePoint("0x1F69A")}</option>
                                <option value="0x1F495">{String.fromCodePoint("0x1F495")}</option>
                                <option value="0x1F9B4">{String.fromCodePoint("0x1F9B4")}</option>
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
                    value={blog.blogContents}
                    onChange={(e) => blog.setBlogContents(e.target.value)}
                ></textarea>
                <button onClick={() => { handleEdit() }}>Update Blog</button>
                {/* <button type="submit">Update Blog</button> */}
                {/* </form> */}
            </div>
        </div>
    );
}

export default EditBlogEntry;