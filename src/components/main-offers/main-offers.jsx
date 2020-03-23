import React from 'react';
import CityPropType from '../../prop-types/city';
import PropTypes from 'prop-types';
import OfferPropType from '../../prop-types/offer';
import Map from '../map/map.jsx';
import OffersSorting from '../offers-sorting/offers-sorting.jsx';
import OffersList from '../offers-list/offers-list.jsx';
import withActiveFlag from '../../hocs/withActiveFlag/withActiveFlag.js';
import withHoveredItem from '../../hocs/withHoveredItem/withHoveredItem.js';

const OffersSortingWithActiveFlag = withActiveFlag(OffersSorting);

const MainOffers = ({currentCity, currentOffers, hoveredItem, onMouseEnter, onMouseLeave}) => {

  return (
    <div className="cities">
      <div className="cities__places-container container">
        <section className="cities__places places">
          <h2 className="visually-hidden">Places</h2>
          <b className="places__found">{currentOffers.length} places to stay in {currentCity.name}</b>
          <OffersSortingWithActiveFlag/>
          <OffersList offersCards={currentOffers} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} isNearByView={false}/>
        </section>
        <div className="cities__right-section">
          <Map offers={currentOffers} activeItemId={hoveredItem} currentCity={currentCity} isNearByView={false}/>
        </div>
      </div>
    </div>
  );
};

MainOffers.propTypes = {
  currentCity: CityPropType.isRequired,
  hoveredItem: PropTypes.string,
  onMouseLeave: PropTypes.func,
  onMouseEnter: PropTypes.func,
  currentOffers: PropTypes.arrayOf(OfferPropType).isRequired,
};

export default withHoveredItem(MainOffers);
