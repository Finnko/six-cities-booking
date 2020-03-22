import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {ActionCreator} from '../../store/actions/action-creator';
import OffersList from '../offers-list/offers-list.jsx';
import Map from '../map/map.jsx';
import Header from '../header/header.jsx';
import OffersSorting from '../offers-sorting/offers-sorting.jsx';
import CitiesList from '../cities-list/cities-list.jsx';
import MainEmpty from '../main-empty/main-empty.jsx';
import withActiveFlag from '../../hocs/withActiveFlag/withActiveFlag';
import NameSpace from '../../store/name-space';
import CityPropType from '../../prop-types/city';

const OffersSortingWithActiveFlag = withActiveFlag(OffersSorting);

const MainPage = (props) => {
  const {currentOffers, cities, currentCity, sortType, onChangeCity, onSortTypeChange} = props;


  return (
    <div className="page page--gray page--main">
      <Header/>

      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <CitiesList cities={cities} currentCity={currentCity} onChangeCity={onChangeCity}/>
        <div className="cities">
          <div className="cities__places-container container">
            <section className="cities__places places">
              <h2 className="visually-hidden">Places</h2>
              <b className="places__found">{currentOffers.length} places to stay in {currentCity.name}</b>
              <OffersSortingWithActiveFlag activeSortType={sortType} onSortTypeChange={onSortTypeChange}/>
              <OffersList offersCards={currentOffers} isNearByView={false}/>
            </section>
            <div className="cities__right-section">
              <Map offers={currentOffers} currentCity={currentCity} isNearByView={false}/>
            </div>
          </div>
        </div>
        <MainEmpty currentCity={currentCity}/>
      </main>
    </div>
  );
};

MainPage.propTypes = {
  onChangeCity: PropTypes.func,
  onSortTypeChange: PropTypes.func,
  currentOffers: PropTypes.arrayOf(PropTypes.object).isRequired,
  currentCity: CityPropType.isRequired,
  cities: PropTypes.arrayOf(PropTypes.string).isRequired,
  sortType: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => {
  return {
    currentCity: state[NameSpace.DATA].currentCity,
    currentOffers: state[NameSpace.DATA].currentOffers,
    cities: state[NameSpace.DATA].cities,
    sortType: state[NameSpace.DATA].sortType
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onChangeCity(city) {
      dispatch(ActionCreator.changeCity(city));
    },
    onSortTypeChange(sortType) {
      dispatch(ActionCreator.changeSortType(sortType));
    }
  };
};

export {MainPage};
export default connect(mapStateToProps, mapDispatchToProps)(MainPage);
