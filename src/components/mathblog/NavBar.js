
import { Flex } from "./components/Flex";
import { Link } from "react-router-dom";
import { mathBlogLinks } from "../../constants/url-constants";

const linkStyle = {
    'text-decoration': 'none',
};

const NavBar = () => {
    return (
        <Flex gap="2rem" padding="0 0 0 2rem">
            <Link style={linkStyle} to={mathBlogLinks.home.url}>Vectors</Link>
            <Link style={linkStyle} to={mathBlogLinks.home.url}>Algebra</Link>
        </Flex>
    );
}

export default NavBar;