
import dogProfile from '../../assets/dog-profile.PNG';

const FriendList = ({ friends, title }) => {

    const onDefaultProfile = (e) => {
        e.target.src = dogProfile;
    }

    return (
        <div className="blog-list">
            {friends.map(friend => (
                <div className="friend-preview" key={friend.data.uid}>
                    <div className="leading">
                        <img src={friend.data.photoURL} alt="profile" onError={onDefaultProfile} />
                    </div>

                    <div className="trailing">
                        <h3>{friend.data.displayName}</h3>
                        <p>email: {friend.data.email}</p>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default FriendList;