import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { AppPaths } from '../const';
import Auth from '../pages/Auth/Auth';
import Main from '../pages/Main/Main';
import OfferDetails from '../pages/OfferDetails/OfferDetails';

const App: React.FC = () => (
  <Router>
    <Switch>
      <Route exact path={`${AppPaths.LOGIN}`}>
        <Auth/>
      </Route>
      <Route path={`${AppPaths.OFFER}`}>
        <OfferDetails/>
      </Route>
      <Route exact path={`${AppPaths.ROOT}`}>
        <Main/>
      </Route>
    </Switch>
  </Router>
);

export default App;
