import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { AppPaths } from '../const';
import Auth from '../pages/Auth/Auth';
import Main from '../pages/Main/Main';

const App: React.FC = () => (
    <Router>
      <Switch>
        <Route exact path={`${AppPaths.LOGIN}`}>
          <Auth />
        </Route>
        <Route exact path={`${AppPaths.ROOT}`}>
          <Main />
        </Route>
      </Switch>
    </Router>
  );

export default App;
