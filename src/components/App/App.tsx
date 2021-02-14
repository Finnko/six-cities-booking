import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import Main from '../../pages/Main/Main';

const App: React.FC = () => (
    <Router>
      <Switch>
        <Route to="/">
          <Main />
        </Route>
      </Switch>
    </Router>
  );

export default App;
