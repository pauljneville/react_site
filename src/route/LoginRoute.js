
import { Route, Redirect } from "react-router-dom";
import { dogBlogLinks } from "../constants/url-constants";
import { useAuth } from "../hooks/useAuth";

const LoginRoute = ({ children, ...rest }) => {
    const { user } = useAuth();

    return (
        <Route {...rest}
            render={() => user ? <Redirect to={dogBlogLinks.home.url} /> : children}>
        </Route>
    );
}

export default LoginRoute;