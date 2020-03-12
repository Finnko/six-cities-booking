import React, {PureComponent} from "react";
import PropTypes from 'prop-types';
import {Switch, Route, BrowserRouter} from "react-router-dom";
import MainPage from "../main-page/main-page.jsx";
import OfferDetails from '../offer-details/offer-details.jsx';


class App extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {selectedOffer: undefined};

    this.offerTitleClickHandler = this.offerTitleClickHandler.bind(this);
  }

  offerTitleClickHandler(offer) {
    this.setState({selectedOffer: offer});
  }

  renderMainPage() {
    const {data} = this.props;

    return <MainPage data={data} onOfferTitleClick={this.offerTitleClickHandler}/>;
  }

  renderOfferDetail() {
    if (!this.state.selectedOffer) {
      return null;
    }

    const {data, reviews} = this.props;

    const activeOffer = data.find((item) => item === this.state.selectedOffer);

    //  temp
    const index = data.findIndex((item) => item.id === this.state.selectedOffer.id);

    const nearByOffers = [...data.slice(0, index), ...data.slice(index + 1)];

    if (activeOffer !== null) {
      return (
        <OfferDetails offer={activeOffer} reviews={reviews} nearByOffers={nearByOffers} onOfferTitleClick={this.offerTitleClickHandler}/>
      );
    }
    return this.renderMainPage();
  }

  renderApp() {
    if (this.state.selectedOffer) {
      return (
        this.renderOfferDetail()
      );
    }
    return (
      this.renderMainPage()
    );
  }

  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={MainPage}/>
          <Route path="/offer/:id" component={OfferDetails}/>
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
