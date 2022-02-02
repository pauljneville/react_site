
import {
    Switch,
    Route,
} from "react-router-dom";


import Home from './Home';
import Topics from './Topics';
import About from './About';
import BlogDetails from "./BlogDetails";
import PrivateRoute from "../route/PrivateRoute";
import LoginRoute from "../route/LoginRoute";
import LogInForm from "../auth/LogInForm";
import ConfirmForm from "../auth/ConfirmForm";
import SignUpForm from "../auth/SignUpForm";
import Profile from "./Profile";
import NotFound from "./NotFound";
import { dogBlogLinks } from "../constants/url-constants";


const DogBlog = () => {

    return (
        <div className="contents">
            <Switch>
                <LoginRoute exact path={dogBlogLinks.login.url}>
                    <LogInForm />
                </LoginRoute>
                <PrivateRoute exact path={dogBlogLinks.details.url}><BlogDetails /></PrivateRoute>
                <PrivateRoute exact path={dogBlogLinks.home.url}><Home /></PrivateRoute>
                <PrivateRoute exact path={dogBlogLinks.profile.url}><Profile /></PrivateRoute>
                <PrivateRoute exact path={dogBlogLinks.topics.url}><Topics /></PrivateRoute>
                <LoginRoute exact path={dogBlogLinks.signup.url}>
                    <SignUpForm />
                </LoginRoute>
                <LoginRoute exact path={dogBlogLinks.confirm.url}>
                    <ConfirmForm />
                </LoginRoute>
                <Route exact path={dogBlogLinks.about.url}>
                    <About />
                </Route>
                <Route path="*"><NotFound /></Route>
            </Switch>
            {/* <Switch>
                <Route exact path={dogBlogLinks.login.url}>
                    <LogInForm />
                </Route>
                <Route exact path={dogBlogLinks.details.url}><BlogDetails /></Route>
                <Route exact path={dogBlogLinks.home.url}><Home /></Route>
                <Route exact path={dogBlogLinks.profile.url}><Profile /></Route>
                <Route exact path={dogBlogLinks.topics.url}><Topics /></Route>
                <Route exact path={dogBlogLinks.signup.url}>
                    <SignUpForm />
                </Route>
                <Route exact path={dogBlogLinks.confirm.url}>
                    <ConfirmForm />
                </Route>
                <Route exact path={dogBlogLinks.about.url}>
                    <About />
                </Route>
                <Route path="*"><NotFound /></Route>
            </Switch> */}
        </div>
    );
}

export default DogBlog;