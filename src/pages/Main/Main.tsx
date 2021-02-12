import PropTypes from 'prop-types';
import React from 'react';
import {connect} from 'react-redux';

// import CityPropType from '../../interfaces/city';
// import OfferPropType from '../../interfaces/offer';
import {ActionCreator} from '../../store/actions/action-creator';
import {
  getCitiesList,
  getCurrentCity,
  getCurrentOffers,
} from '../../store/reducers/data/selectors';
import CitiesList from '../cities-list/cities-list.jsx';
// import Header from '../header/header.jsx';
// import Loader from '../loader/loader.jsx';
import MainEmpty from '../main-empty/main-empty.jsx';
import MainOffers from '../main-offers/main-offers.jsx';


const Main = props => {
  const {currentOffers, cities, currentCity, onChangeCity} = props;

  return (
    <div className="page page--gray page--main">
      {/* <Header/>*/}

      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <CitiesList cities={cities} currentCity={currentCity} onChangeCity={onChangeCity}/>
        {currentOffers.length > 0
          ? <MainOffers currentCity={currentCity} currentOffers={currentOffers}/>
          : <MainEmpty currentCity={currentCity}/>}
      </main>
    </div>
  );
};
//
// const mapStateToProps = state => ({
//   currentCity: getCurrentCity(state),
//   currentOffers: getCurrentOffers(state),
//   cities: getCitiesList(state),
// });
//
// const mapDispatchToProps = dispatch => ({
//   onChangeCity(city) {
//     dispatch(ActionCreator.changeCity(city));
//   },
// });

export default Main;
