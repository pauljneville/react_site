

import React from "react";
import {
  Switch,
  Route,
  Redirect,
  BrowserRouter as Router,
} from "react-router-dom";
import { siteLinks } from "./constants/url-constants";
// import DogBlog from "./components/DogBlog";
import PlantPurchase from "./components/PlantPurchase";
import FoodBook from "./components/FoodBook";
import SiteNav from "./components/SiteNav";
import Chevron from "./components/Chevron";

export default function App() {

  return (

    <Router>
      <div className="site-wrapper">
        <SiteNav />
        <Switch>
          <Route exact path="/">
            <Redirect to={siteLinks.chevron.url} />
            <Chevron />
          </Route>

          {/* <Route path={siteLinks.dogblog.url}>
            <DogBlog />
          </Route> */}

          <Route path={siteLinks.plantpurchase.url}>
            <PlantPurchase />
          </Route>

          <Route path={siteLinks.foodbook.url}>
            <FoodBook />
          </Route>

          <Route path={siteLinks.chevron.url}>
            <Chevron />
          </Route>
        </Switch>
      </div>
    </Router >
  );
}
