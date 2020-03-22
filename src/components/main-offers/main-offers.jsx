import React from 'react';
import CityPropType from '../../prop-types/city';
import PropTypes from 'prop-types';
import OfferPropType from '../../prop-types/offer';
import OffersList from '../offers-list/offers-list.jsx';
import Map from '../map/map.jsx';
import OffersSorting from '../offers-sorting/offers-sorting.jsx';
import withActiveFlag from '../../hocs/withActiveFlag/withActiveFlag';

const OffersSortingWithActiveFlag = withActiveFlag(OffersSorting);

const MainOffers = ({currentCity, currentOffers}) => {

  return (
    <div className="cities">
      <div className="cities__places-container container">
        <section className="cities__places places">
          <h2 className="visually-hidden">Places</h2>
          <b className="places__found">{currentOffers.length} places to stay in {currentCity.name}</b>
          <OffersSortingWithActiveFlag/>
          <OffersList offersCards={currentOffers} isNearByView={false}/>
        </section>
        <div className="cities__right-section">
          <Map offers={currentOffers} currentCity={currentCity} isNearByView={false}/>
        </div>
      </div>
    </div>
  );
};

MainOffers.propTypes = {
  currentCity: CityPropType.isRequired,
  currentOffers: PropTypes.arrayOf(OfferPropType).isRequired,
};

export default MainOffers;
