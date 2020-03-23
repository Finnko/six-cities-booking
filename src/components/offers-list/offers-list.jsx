import React from 'react';
import PropTypes from 'prop-types';
import OffersCard from '../offers-card/offers-card.jsx';
import OfferPropType from '../../prop-types/offer';

const OffersList = (props) => {
  const {offersCards, isNearByView, onMouseEnter, onMouseLeave} = props;

  return (
    <div className={`places__list ${isNearByView ? `near-places__list` : `cities__places-list tabs__content` }`}>
      {offersCards.map((offer) =>
        <OffersCard
          offer={offer}
          isNearByView={isNearByView}
          key={offer.id}
          onCardMouseEnter={onMouseEnter}
          onCardMouseLeave={onMouseLeave}
        />)}
    </div>
  );
};

OffersList.propTypes = {
  onMouseEnter: PropTypes.func,
  onMouseLeave: PropTypes.func,
  isNearByView: PropTypes.bool.isRequired,
  offersCards: PropTypes.arrayOf(OfferPropType).isRequired,
};

export default OffersList;
