import React from 'react';
import CityPlace from '../city-place/city-place.jsx';

const CitiesList = (props) => {
  const {placesCards} = props;
  const places = placesCards.map((item, index) => {
    return (
      <CityPlace
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

export default CitiesList;
