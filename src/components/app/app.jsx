import React, {PureComponent} from "react";
import PropTypes from 'prop-types';
import {Switch, Route, BrowserRouter} from "react-router-dom";
import MainPage from "../main-page/main-page.jsx";
import OfferDetail from '../offer-detail/offer-detail.jsx';

class App extends PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    const {data} = this.props;

    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <MainPage data={data}/>
          </Route>
          <Route exact path="/offers-detail">
            <OfferDetail/>
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
