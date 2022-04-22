

import React from "react";
import {
  Switch,
  Route,
  Redirect,
  BrowserRouter as Router,
} from "react-router-dom";
import { siteLinks } from "./constants/url-constants";

import { Portfolio } from "./components/Portfolio";
import DogBlog from "./components/DogBlog";
import MathBlog from "./components/mathblog/MathBlog";
import PlantPurchase from "./components/PlantPurchase";
import FoodBook from "./components/FoodBook";
// import SiteNav from "./components/SiteNav";
import DogTrain from "./components/dogtrain/DogTrain";

import { Global, css } from '@emotion/react';
const globalStyle = css`
  html {
    --navbar-font-height: 1.4rem;
    --navbar-padding: 0.8rem;
    --navbar-height: 2.5rem;
    --scroll-ref-offset: -4rem;
    --body-max-width: 800px;
    --phone-width-clip: 800px;
    z-index: 0;
  }
`;

export default function App() {
  return (
    <>
      <Global styles={globalStyle} />
      <Router>
        {/* Handles State of Swiper card index */}
        <div className="site-wrapper">
          {/* <SiteNav /> */}
          <Switch>
            <Route exact path="/" ><Portfolio /></Route>
            <Route path={siteLinks.mathblog.url} ><MathBlog /></Route>
            <Route path={siteLinks.dogblog.url} ><DogBlog /></Route>
            <Route path={siteLinks.plantpurchase.url} > <PlantPurchase /></Route>
            <Route path={siteLinks.foodbook.url} ><FoodBook /></Route>
            <Route path={siteLinks.dogtrain.url} ><DogTrain /></Route>
            <Route path="*">
              <Redirect to={siteLinks.portfolio.url} />
            </Route>
          </Switch >
        </div >
      </Router >
    </>
  );
}
