
import ProfileBrief from "../ProfileBrief";
import dogProfileUrl from "../../assets/dog-profile.PNG";

import videoMockup1 from "../../assets/dogtrain/mockup_photos/video_mockups/video_mock_1.jpg";
import videoMockup2 from "../../assets/dogtrain/mockup_photos/video_mockups/video_mock_2.jpg";
import videoMockup3 from "../../assets/dogtrain/mockup_photos/video_mockups/video_mock_3.jpg";

import { Link } from "react-router-dom";
import { dogTrainLinks } from "../../constants/url-constants";

const Home = () => {
    return (
        <div className="home">
            <div className="booknow-section">
                <div className="centercenter">
                    <div className="videos">
                        <img src={videoMockup3} alt="videos" />
                        <img src={videoMockup2} alt="videos" />
                        <img src={videoMockup1} alt="videos" />
                    </div>
                    <div>
                        <Link to={dogTrainLinks.signup.url} className="button-link booknow">BOOK NOW</Link>
                    </div>
                </div>
            </div>
            <div className="recruits">
                <div className="centerstart">
                    <div className="title">
                        <h2>Recruits</h2>
                    </div>
                    <ProfileBrief data={{ photoUrl: dogProfileUrl, name: "Best Friend", subtitle: "Private", description: "She is so well behaved" }} />
                </div>
            </div>
            <div className="staff">
                <div className="centerstart">
                    <div className="title"><h2>Staff</h2></div>
                    <ProfileBrief data={{ photoUrl: dogProfileUrl, name: "Best Friend", subtitle: "Private", description: "She is so well behaved" }} />
                </div>
            </div>
        </div>
    );
}

export default Home;