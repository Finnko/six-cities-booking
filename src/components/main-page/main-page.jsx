import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {ActionCreator} from '../../store/actions/action-creator';
import OffersList from '../offers-list/offers-list.jsx';
import Map from '../map/map.jsx';
import Header from '../header/header.jsx';
import CitiesList from '../cities-list/cities-list.jsx';

const MainPage = (props) => {
  const {currentOffers, cities, chosenCity, onChangeCity} = props;

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
              <form className="places__sorting" action="#" method="get">
                <span className="places__sorting-caption">Sort by</span>
                <span className="places__sorting-type" tabIndex="0">
                  Popular
                  <svg className="places__sorting-arrow" width="7" height="4">
                    <use xlinkHref="#icon-arrow-select"/>
                  </svg>
                </span>
                <ul className="places__options places__options--custom">
                  <li className="places__option places__option--active" tabIndex="0">Popular</li>
                  <li className="places__option" tabIndex="0">Price: low to high</li>
                  <li className="places__option" tabIndex="0">Price: high to low</li>
                  <li className="places__option" tabIndex="0">Top rated first</li>
                </ul>
              </form>
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
};

const mapStateToProps = (state) => {
  return {
    currentOffers: state.data.currentOffers,
    chosenCity: state.data.chosenCity,
    cities: state.data.cities
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
