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
        this.offerCardMouseEnterHandler,
        this.offerCardMouseLeaveHandler);
  }

  offerCardClickHandler() {}

  offerCardMouseEnterHandler(offer) {
    this.setState({
      activeOffer: offer
    });
  }

  offerCardMouseLeaveHandler() {
    this.setState({
      activeOffer: null
    });
  }

  render() {
    const {offersCards} = this.props;

    return (
      <div className="cities__places-list places__list tabs__content">
        {offersCards.map((offer) =>
          <OffersCard
            offer={offer}
            key={offer.id}
            onCardClick={this.offerCardClickHandler}
            onCardMouseEnter={this.offerCardMouseEnterHandler}
            onCardMouseLeave={this.offerCardMouseLeaveHandler}
          />)}
      </div>
    );
  }
}

OffersList.propTypes = {
  offersCards: PropTypes.arrayOf(PropTypes.object).isRequired,
};
