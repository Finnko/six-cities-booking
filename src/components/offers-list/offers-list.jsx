import React, {Component} from 'react';
import PropTypes from 'prop-types';
import OffersCard from '../offers-card/offers-card.jsx';
import {bind} from '../../utils';

export default class OffersList extends Component {
  constructor(props) {
    super(props);

    this.state = {activeOffer: null};

    bind(this,
        this.offerCardMouseEnterHandler,
        this.offerCardMouseLeaveHandler);
  }

  offerCardMouseEnterHandler(offer) {
    this.setState({activeOffer: offer});
  }

  offerCardMouseLeaveHandler() {
    this.setState({activeOffer: null});
  }

  render() {
    const {offersCards, onOfferTitleClick} = this.props;

    return (
      <div className="cities__places-list places__list tabs__content">
        {offersCards.map((offer) =>
          <OffersCard
            offer={offer}
            key={offer.id}
            onCardClick={() => {
              onOfferTitleClick(offer);
            }}
            onCardMouseEnter={() => {
              this.offerCardMouseEnterHandler(offer);
            }}
            onCardMouseLeave={() => {
              this.offerCardMouseLeaveHandler();
            }}
          />)}
      </div>
    );
  }
}

OffersList.propTypes = {
  onOfferTitleClick: PropTypes.func,
  offersCards: PropTypes.arrayOf(PropTypes.object).isRequired,
};
