import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {ActionCreator} from '../../store/actions/action-creator';
import OffersList from '../offers-list/offers-list.jsx';
import Map from '../map/map.jsx';
import Header from '../header/header.jsx';
import OffersSorting from '../offers-sorting/offers-sorting.jsx';
import CitiesList from '../cities-list/cities-list.jsx';
import withActiveFlag from '../../hocs/withActiveFlag';

const OffersSortingWithActiveFlag = withActiveFlag(OffersSorting);

const MainPage = (props) => {
  const {currentOffers, cities, chosenCity, sortType, onChangeCity} = props;

  return (
    <div className="page page--gray page--main">
      <Header/>

      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <CitiesList cities={cities} chosenCity={chosenCity} onChangeCity={onChangeCity}/>
        <div className="cities">
          <div className="cities__places-container container">
            <section className="cities__places places">
              <h2 className="visually-hidden">Places</h2>
              <b className="places__found">{currentOffers.length} places to stay in {chosenCity}</b>
              <OffersSortingWithActiveFlag activeSortType={sortType}/>
              <OffersList offersCards={currentOffers} isNearByView={false}/>
            </section>
            <div className="cities__right-section">
              <Map offers={currentOffers} isNearByView={false}/>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

MainPage.propTypes = {
  onChangeCity: PropTypes.func,
  currentOffers: PropTypes.arrayOf(PropTypes.object).isRequired,
  chosenCity: PropTypes.string.isRequired,
  cities: PropTypes.arrayOf(PropTypes.string).isRequired,
  sortType: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => {
  return {
    currentOffers: state.data.currentOffers,
    chosenCity: state.data.chosenCity,
    cities: state.data.cities,
    sortType: state.data.sortType
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onChangeCity(city) {
      dispatch(ActionCreator.changeCity(city));
    }
  };
};

export {MainPage};
export default connect(mapStateToProps, mapDispatchToProps)(MainPage);
