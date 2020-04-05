import React from "react";
import {Switch, Route, Router} from "react-router-dom";
import history from '../../history';
import MainPage from "../main-page/main-page.jsx";
import OfferDetails from '../offer-details/offer-details.jsx';
import SignIn from '../sign-in/sign-in.jsx';

const App = () => {
  return (
    <Router history={history}>
      <Switch>
        <Route exact path="/" component={MainPage}/>
        <Route exact path="/login" component={SignIn}/>
        <Route path="/offer/:id" component={OfferDetails}/>
      </Switch>
    </Router>
  );
};

export default App;
