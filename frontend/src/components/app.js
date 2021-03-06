import React from 'react';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import { Switch, Route } from 'react-router-dom';
import LoginFormContainer from './session/login_form_container';
import SignupFormContainer from './session/signup_form_container';
import NavBarContainer from "./nav/navbar_container";
import SplashContainer from './splash/splash_container';
import BusinessSearchContainer from './business/business_show_container';
import SearchContainer from './search/search_container';
import BusinessUploadContainer from './business/business_upload_container';
import BusinessReviewContainer from './business/business_review_container';


const App = (props) => {
  return (
  <div>
    <Switch>
      <AuthRoute exact path="/login" component={LoginFormContainer} />
      <AuthRoute exact path="/signup" component={SignupFormContainer} />
      <Route exact path="/search" component={SearchContainer} />
      <Route exact path="/" component={SplashContainer} />
      <Route exact path="/businesses/:business_id" component={BusinessSearchContainer} />
      <ProtectedRoute path="/businesses/:business_id/upload" component={BusinessUploadContainer} />
      <ProtectedRoute path="/businesses/:business_id/writereview" component={BusinessReviewContainer}/>
    </Switch>
  </div>
  )
};

export default App;
