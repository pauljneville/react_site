
import {
    Switch,
    Route,
} from "react-router-dom";
import { dogTrainLinks } from "../../constants/url-constants";
import Home from "../dogtrain/Home";
import Login from "../dogtrain/Login";
import Walking from "../dogtrain/Walking";
import Training from "../dogtrain/Training";

const PageContent = () => {
    return (
        <div className="main-content">
            <Switch>
                <Route exact path={dogTrainLinks.home.url}><Home /></Route>
                <Route exact path={dogTrainLinks.login.url}><Login /></Route>
                <Route exact path={dogTrainLinks.walking.url}><Walking /></Route>
                <Route exact path={dogTrainLinks.training.url}><Training /></Route>
                {/* <PrivateRoute exact path={dogTrainLinks.details.url}><BlogDetails /></PrivateRoute>
                <PrivateRoute exact path={dogTrainLinks.create.url}><Create /></PrivateRoute>
                <PrivateRoute exact path={dogTrainLinks.profile.url}><Profile /></PrivateRoute> */}
                {/* <Route path={dogTrainLinks.signup.url}>
                    <SignUpForm />
                </Route>
                <Route path={dogTrainLinks.login.url}>
                    <LogInForm />
                </Route>
                <Route path={dogTrainLinks.confirm.url}>
                    <ConfirmForm />
                </Route> */}
            </Switch>

        </div>
    );
}

export default PageContent;