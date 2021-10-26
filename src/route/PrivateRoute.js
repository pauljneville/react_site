
import { Route, Redirect } from "react-router-dom";
import { dogBlogLinks } from "../constants/url-constants";
import { useAuth } from "../hooks/useAuth";

const PrivateRoute = ({ children, ...rest }) => {
    const { user } = useAuth();

    return (
        <Route {...rest}
            render={() => (user ? children : <Redirect to={dogBlogLinks.login.url} />)}>
        </Route>
    );
}

export default PrivateRoute;