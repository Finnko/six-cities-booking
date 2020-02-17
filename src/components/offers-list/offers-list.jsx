import React from 'react';
import PropTypes from 'prop-types';
import OffersCard from '../offers-card/offers-card.jsx';

const OffersList = (props) => {
  const {placesCards} = props;
  const places = placesCards.map((item, index) => {
    return (
      <OffersCard
        title={item.title}
        key={index}
      />);
  });

  return (
    <div>
      <div className="cities__places-list places__list tabs__content">
        {places}
      </div>
    </div>
  );
};

OffersList.propTypes = {
  placesCards: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string
  }))
};

export default OffersList;
