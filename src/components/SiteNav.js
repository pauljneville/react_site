import { Link } from "react-router-dom";
import { siteLinks } from "../constants/url-constants";
import styled from '@emotion/styled'

const SiteNav = () => {
    const Nav = styled.div`
        position: fixed;
        z-index: 10;
        top: 0;
        left: 0;

        display: flex;
        align-items:flex-start;
        justify-content:space-between;
        width: 100%;
        padding: 0;
        box-shadow: 0px 0px 3px 0.5px rgb(202, 202, 202);
        background-color: rgba(255, 255, 255, 0.95);
    `;
    const NavLinks = styled.nav`
        display: flex;
    `;
    const LinkButton = styled(Link)`
        padding: 0 2px 0 2px;
        border-right: 1px solid #b6b6b6;
        display: grid;
        justify-items: center;
        align-items: center;
        text-align: center;
    `;

    return (
        <Nav>
            <NavLinks>
                <LinkButton to={siteLinks.portfolio.url}>{siteLinks.portfolio.label}</LinkButton>
                <LinkButton to={siteLinks.dogblog.url}>{siteLinks.dogblog.label}</LinkButton>
                {/* <Link to={siteLinks.plantpurchase.url}>{siteLinks.plantpurchase.label}</Link> */}
                {/* <Link to={siteLinks.foodbook.url}>{siteLinks.foodbook.label}</Link> */}
                {/* <LinkButton to={siteLinks.dogtrain.url}>{siteLinks.dogtrain.label}</LinkButton> */}
            </NavLinks>
            <div className="media-box"></div>
        </Nav>
    );
}

export default SiteNav;