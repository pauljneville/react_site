// import { Link } from 'react-router-dom';
import logo from '../../assets/dogblog/lali_heart.png';
// import { dogBlogLinks } from '../constants/url-constants';
// import { useAuth } from "../hooks/useAuth";

const SideBar = () => {
    // const { user } = useAuth();

    return (
        <div className="sidebar">
            <img src={logo} className="App-logo" alt="logo" />

            {/* {user && <div className="links">
                <Link to={dogBlogLinks.create.url} style={{ textDecoration: 'none' }}>
                    <h2>New Blog</h2>
                </Link>
            </div>} */}
        </div>
    );
}

export default SideBar;
