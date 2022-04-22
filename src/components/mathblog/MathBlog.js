import { Switch, Route } from "react-router-dom";
import Home from "./Home";
import NotFound from "./NotFound";
import { mathBlogLinks } from '../../constants/url-constants';

const MathBlog = () => {
    return (
        <Switch>
            <Route exact path={mathBlogLinks.home.url}><Home /></Route>
            <Route path="*"><NotFound /></Route>
        </Switch >
    );
}

export default MathBlog;