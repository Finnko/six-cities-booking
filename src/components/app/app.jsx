import React, {PureComponent} from "react";
import PropTypes from 'prop-types';
import {Switch, Route, BrowserRouter} from "react-router-dom";
import MainPage from "../main-page/main-page.jsx";
import Offer from '../offer/offer.jsx';

class App extends PureComponent {
  constructor(props) {
    super(props);
  }

  _renderApp(data) {
    return <MainPage data={data}/>;
  }

  render() {
    const {data} = this.props;

    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            {this._renderApp(data)}
          </Route>
          <Route exact path="/offer">
            <Offer/>
          </Route>
        </Switch>
      </BrowserRouter>
    );
  }
}

App.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default App;
