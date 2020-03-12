import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {bind} from '../../utils';
import OffersCard from '../offers-card/offers-card.jsx';

export default class OffersList extends PureComponent {
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
            onCardClick={onOfferTitleClick}
            onCardMouseEnter={this.offerCardMouseEnterHandler}
            onCardMouseLeave={this.offerCardMouseLeaveHandler}
          />)}
      </div>
    );
  }
}

OffersList.propTypes = {
  onOfferTitleClick: PropTypes.func,
  offersCards: PropTypes.arrayOf(PropTypes.object).isRequired,
};
