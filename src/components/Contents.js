
import {
    Switch,
    Route,
} from "react-router-dom";

import Home from './Home';
import Topics from './Topics';
import About from './About';
import Create from "./Create";
import BlogDetails from "./BlogDetails";
import PrivateRoute from "../route/PrivateRoute";
import LogInForm from "../auth/LogInForm";
import ConfirmForm from "../auth/ConfirmForm";
import SignUpForm from "../auth/SignUpForm";
import Profile from "./Profile";
import { dogBlogLinks } from "../constants/url-constants";

const Contents = () => {

    return (
        <div className="contents">
            <Switch>
                <PrivateRoute exact path={dogBlogLinks.home.url}><Home /></PrivateRoute>
                <PrivateRoute exact path={dogBlogLinks.details.url}><BlogDetails /></PrivateRoute>
                <PrivateRoute exact path={dogBlogLinks.create.url}><Create /></PrivateRoute>
                {/* <Route exact path="/home"><Home /></Route>
            <Route exact path="/blogs/:id"><BlogDetails /></Route>
            <Route exact path="/create"><Create /></Route> */}
                <PrivateRoute exact path={dogBlogLinks.profile.url}><Profile /></PrivateRoute>
                <Route path={dogBlogLinks.signup.url}>
                    <SignUpForm />
                </Route>
                <Route path={dogBlogLinks.login.url}>
                    <LogInForm />
                </Route>
                <Route path={dogBlogLinks.confirm.url}>
                    <ConfirmForm />
                </Route>
                <Route path={dogBlogLinks.about.url}>
                    <About />
                </Route>
                <Route path={dogBlogLinks.topics.url}>
                    <Topics />
                </Route>
            </Switch>

        </div>
    );
}

export default Contents;

