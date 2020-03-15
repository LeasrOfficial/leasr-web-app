import React from "react";
import { Route, Switch } from "react-router-dom";
// import Footer from './Components/Footer.js';
import Login from './Components/Account/Login';
import Jumbo from './Components/Home/Jumbo';
import Search from './Components/Listing';
import About from './Components/Extras/About';
import Meet from './Components/Extras/Meet';
import Social from './Components/Extras/Social';
import NotFound from "./NotFound.js";
import AppliedRoute from "./Components/AppliedRoute";
import Signup from "./Components/Account/Signup";
import ResetPassword from "./Components/Account/ResetPassword";
import Settings from "./Components/Account/Settings";
import ChangePassword from "./Components/Account/ChangePassword";
import ChangeEmail from "./Components/Account/ChangeEmail";
import UnauthenticatedRoute from "./Components/UnauthenticatedRoute";
import AuthenticatedRoute from "./Components/AuthenticatedRoute";

export default function Routes({ appProps }) {
  return (
      <div>
        <Switch>
            <AppliedRoute path="/" exact component={Jumbo} appProps={appProps} />
            <AppliedRoute path="/login" exact component={Login} appProps={appProps} />
            <AppliedRoute path="/signup" exact component={Signup} appProps={appProps} />
            <AppliedRoute path="/search" exact component={Search} appProps={appProps} />
            <AppliedRoute path="/about" exact component={About} appProps={appProps} />
            <AppliedRoute path="/meet" exact component={Meet} appProps={appProps} />
            <AppliedRoute path="/social" exact component={Social} appProps={appProps} />
            <UnauthenticatedRoute path="/login/reset" exact component={ResetPassword} props={appProps} />
            <AuthenticatedRoute path="/settings" exact component={Settings} props={appProps} />
            <AuthenticatedRoute path="/settings/password" exact component={ChangePassword} props={appProps} />
            <AuthenticatedRoute path="/settings/email" exact component={ChangeEmail} props={appProps} />


            <Route component={NotFound} />
        </Switch>
        {/* <Footer /> */}
      </div>
  );
}