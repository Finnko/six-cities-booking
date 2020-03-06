import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import OffersCard from '../offers-card/offers-card.jsx';

export default class OffersList extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {activeOffer: null};

    this.offerCardMouseEnterHandler = this.offerCardMouseEnterHandler.bind(this);
    this.offerCardMouseLeaveHandler = this.offerCardMouseLeaveHandler.bind(this);
  }

  offerCardMouseEnterHandler(offer) {
    this.setState({activeOffer: offer});
  }

  offerCardMouseLeaveHandler() {
    this.setState({activeOffer: null});
  }

  render() {
    const {offersCards, isNearByView, onOfferTitleClick} = this.props;

    return (
      <div className={`places__list ${isNearByView ? `near-places__list` : `cities__places-list tabs__content` }`}>
        {offersCards.map((offer) =>
          <OffersCard
            offer={offer}
            isNearByView={isNearByView}
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
  isNearByView: PropTypes.bool.isRequired,
  offersCards: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
    promoImage: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    isPremium: PropTypes.bool.isRequired,
    roomsCount: PropTypes.number.isRequired,
    guestsCount: PropTypes.number.isRequired,
    images: PropTypes.arrayOf(PropTypes.string).isRequired,
    features: PropTypes.arrayOf(PropTypes.string).isRequired,
    owner: PropTypes.shape({
      name: PropTypes.string.isRequired,
      avatar: PropTypes.string.isRequired,
      description: PropTypes.arrayOf(PropTypes.string).isRequired,
      isPro: PropTypes.bool.isRequired
    })
  }).isRequired),
};
