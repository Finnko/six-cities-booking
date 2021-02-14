import React from 'react';
import PropTypes from 'prop-types';
import {AppViewMode} from '../../const';
import OfferPropType from '../../interfaces/offer';
import OfferCard from '../OffersCard/offers-card.jsx';

const OffersList = (props) => {
  const {offersCards, viewMode, onMouseEnter, onMouseLeave} = props;
  const isNearByView = viewMode === AppViewMode.DETAILS;

  return (
    <div className={`places__list ${isNearByView ? `near-places__list` : `cities__places-list tabs__content` }`}>
      {offersCards.map((offer) =>
        <OfferCard
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
  viewMode: PropTypes.string.isRequired,
  offersCards: PropTypes.arrayOf(OfferPropType).isRequired,
};

export default OffersList;
