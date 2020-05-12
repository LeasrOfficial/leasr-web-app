import React from "react";
import { Route, Switch } from "react-router-dom";
import Footer from './Components/Footer.js';
import Jumbo from './Components/Home/Jumbo';
import About from './Components/Extras/About';
import Meet from './Components/Extras/Meet';
import Email from './Components/Extras/Email';
import Contact from './Components/Extras/Contact';
import Report from './Components/Extras/Report';
import Social from './Components/Extras/Social';
import NotFound from "./NotFound.js";
import AppliedRoute from "./Components/AppliedRoute";

export default function Routes({ appProps }) {
  return (
      <div>
        <Switch>
            <AppliedRoute path="/" exact component={Jumbo} appProps={appProps} />
            <AppliedRoute path="/about" exact component={About} appProps={appProps} />
            <AppliedRoute path="/meet" exact component={Meet} appProps={appProps} />
            <AppliedRoute path="/email-signup" exact component={Email} appProps={appProps} />
            <AppliedRoute path="/contact-us" exact component={Contact} appProps={appProps} />
            <AppliedRoute path="/report-bug" exact component={Report} appProps={appProps} />
            <AppliedRoute path="/social" exact component={Social} appProps={appProps} />

            <Route component={NotFound} />
        </Switch>
        <Footer />
      </div>
  );
}