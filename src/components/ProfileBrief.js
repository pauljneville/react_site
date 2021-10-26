
const ProfileBrief = (props) => {
    const data = props.data;

    return (
        <div className="profile-brief">
            <div className="leading">
                <img src={data.photoUrl} alt="profile" />
            </div>


            <h2>{data.name}</h2>
            <h3>{data.subtitle}</h3>
            <p>"{data.description}"</p>

        </div>
    );
}

export default ProfileBrief;