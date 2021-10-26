
import { Link } from "react-router-dom";

import { useAuth } from "../hooks/useAuth";
import { dogBlogLinks } from "../constants/url-constants";

const Navbar = () => {
    const { user, logout } = useAuth();

    const handleLogout = () => {
        logout();
    }

    return (
        <nav className="navbar">
            <div className="links">
                <Link to={dogBlogLinks.home.url} className="link-button">{dogBlogLinks.home.label}</Link>
                <Link to={dogBlogLinks.about.url} className="link-button">{dogBlogLinks.about.label}</Link>
                <Link to={dogBlogLinks.topics.url} className="link-button">{dogBlogLinks.topics.label}</Link>
                {/* <Link to="/topics" style={{
                        color: "white",
                        backgroundColor: "#f1356d",
                        borderRadius: "8px",
                    }}>Topics</Link> */}
                {!user && <Link to={dogBlogLinks.signup.url} className="link-button">{dogBlogLinks.signup.label}</Link>}
                {!user && <Link to={dogBlogLinks.login.url} className="link-button">{dogBlogLinks.login.label}</Link>}
                {user && <Link to={dogBlogLinks.profile.url} className="link-button">{dogBlogLinks.profile.label}</Link>}
                {user && <div className="link-button"><button onClick={() => handleLogout()}>
                    Logout
                </button></div>}
            </div>
        </nav>
    );
}

export default Navbar;