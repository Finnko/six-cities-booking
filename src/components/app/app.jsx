import React, {PureComponent} from "react";
import PropTypes from 'prop-types';
import {Switch, Route, BrowserRouter} from "react-router-dom";
import {bind} from '../../utils';
import offers from '../../mocks/offers'; // temp
import MainPage from "../main-page/main-page.jsx";
import Offer from '../offer/offer.jsx';

class App extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {selectedOffer: offers[0]};

    bind(this, this.offerTitleClickHandler);
  }

  offerTitleClickHandler(offer) {
    this.setState({selectedOffer: offer});
  }

  renderMainPage() {
    const {data} = this.props;

    return <MainPage data={data} onOfferTitleClick={this.offerTitleClickHandler}/>;
  }

  renderOfferDetail() {
    const offer = this.state.selectedOffer;

    if (offer !== null) {
      return (
        <Offer offer={offer} />
      );
    }
    return this.renderMainPage();
  }

  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            {this.renderMainPage()}
          </Route>
          <Route exact path="/dev-offer">
            {this.renderOfferDetail()}
          </Route>
        </Switch>
      </BrowserRouter>
    );
  }
}

App.propTypes = {
  onOfferTitleClick: PropTypes.func,
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default App;
