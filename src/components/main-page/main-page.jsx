import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {ActionCreator} from '../../store/actions/action-creator';
import CityPropType from '../../interfaces/city';
import OfferPropType from '../../interfaces/offer';
import Header from '../header/header.jsx';
import CitiesList from '../cities-list/cities-list.jsx';
import MainOffers from '../main-offers/main-offers.jsx';
import MainEmpty from '../main-empty/main-empty.jsx';
import Loader from '../loader/loader.jsx';
import {
  getCitiesList,
  getCurrentCity,
  getCurrentOffers,
} from '../../store/reducers/data/selectors';


const MainPage = (props) => {
  const {currentOffers, cities, currentCity, onChangeCity} = props;

  return (
    <div className="page page--gray page--main">
      <Header/>

      <main className="page__main page__main--index">
        <Loader/>
        <h1 className="visually-hidden">Cities</h1>
        <CitiesList cities={cities} currentCity={currentCity} onChangeCity={onChangeCity}/>
        {currentOffers.length > 0
          ? <MainOffers currentCity={currentCity} currentOffers={currentOffers}/>
          : <MainEmpty currentCity={currentCity}/>}
      </main>
    </div>
  );
};

MainPage.propTypes = {
  onChangeCity: PropTypes.func,
  currentOffers: PropTypes.arrayOf(OfferPropType).isRequired,
  currentCity: CityPropType.isRequired,
  cities: PropTypes.arrayOf(CityPropType).isRequired,
};

const mapStateToProps = (state) => {
  return {
    currentCity: getCurrentCity(state),
    currentOffers: getCurrentOffers(state),
    cities: getCitiesList(state),
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onChangeCity(city) {
      dispatch(ActionCreator.changeCity(city));
    },
  };
};

export {MainPage};
export default connect(mapStateToProps, mapDispatchToProps)(MainPage);
