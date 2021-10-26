import { Link } from "react-router-dom";
import { siteLinks } from "../constants/url-constants";



const SiteNav = () => {
    return (
        <div className="site-navbar">
            <div className="links">
                <Link to={siteLinks.dogblog.url} className="link-button">{siteLinks.dogblog.label}</Link>
                <Link to={siteLinks.plantpurchase.url} className="link-button">{siteLinks.plantpurchase.label}</Link>
                <Link to={siteLinks.foodbook.url} className="link-button">{siteLinks.foodbook.label}</Link>
                <Link to={siteLinks.chevron.url} className="link-button">{siteLinks.chevron.label}</Link>
            </div>
            <div className="media-box"></div>
        </div>
    );
}

export default SiteNav;