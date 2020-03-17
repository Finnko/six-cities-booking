import React from "react";
import {Switch, Route, BrowserRouter} from "react-router-dom";
import MainPage from "../main-page/main-page.jsx";
import OfferDetails from '../offer-details/offer-details.jsx';

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={MainPage}/>
        <Route path="/offer/:id" component={OfferDetails}/>
      </Switch>
    </BrowserRouter>
  );
};

export default App;
