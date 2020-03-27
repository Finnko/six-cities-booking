import {extend} from '../../../utils';
import {actionTypes} from '../../actions/action-types';
import {ActionCreator} from '../../actions/action-creator';
import {SortType} from '../../../const';
import offers from '../../../mocks/offers';
import Adapter from '../../../adapter/adapter';


const getOffersSortedByPriceToHigh = (initialOffers) => {
  return initialOffers.slice().sort((a, b) => a.price - b.price);
};

const getOffersSortedByPriceToLow = (initialOffers) => {
  return initialOffers.slice().sort((a, b) => b.price - a.price);
};

const getOffersSortedByTopRating = (initialOffers) => {
  return initialOffers.slice().sort((a, b) => b.rating - a.rating);
};

const getSortedOffers = (initialOffers, sortType) => {
  switch (sortType) {
    case SortType.POPULAR:
      return initialOffers;
    case SortType.PRICE_TO_HIGH:
      return getOffersSortedByPriceToHigh(initialOffers);
    case SortType.PRICE_TO_LOW:
      return getOffersSortedByPriceToLow(initialOffers);
    case SortType.TOPRATED:
      return getOffersSortedByTopRating(initialOffers);
  }

  return initialOffers;
};

const getCitiesNames = (initialOffers) => [...new Set(initialOffers.map((offer) => offer.city.name))];

const getCityByName = (initialOffers, name) => initialOffers
  .map((offer) => offer.city)
  .find((city) => city.name === name);

const getOffersByCity = (initialOffers, currentCity) => initialOffers.filter((offer) => offer.city.name === currentCity);

const getOfferById = (initialOffers, id) => initialOffers.find((offer) => offer.id === id);

const getNearByOffers = (initialOffers, id) => {
  const index = initialOffers.findIndex((offer) => offer.id === id);

  if (!index) {
    return [];
  }
  return [...initialOffers.slice(0, index), ...initialOffers.slice(index + 1)];

};

const citiesNames = getCitiesNames(offers);
const currentOffers = getOffersByCity(offers, getCitiesNames(offers)[0]);
const currentCity = getCityByName(offers, getCitiesNames(offers)[0]);

const initialState = {
  offers,
  currentOffers,
  currentCity,
  cities: citiesNames,
  sortType: SortType.POPULAR
};

const Operation = {
  loadOffers: () => (dispatch, getState, api) => {
    return api.get(`/hotels`)
      .then((response) => {
        console.log(Adapter.parseOffers(response.data));
        dispatch(ActionCreator.loadOffers(response.data));
      });
  },
};

export default function dataReducer(state = initialState, action) {
  switch (action.type) {
    case actionTypes.CHANGE_CITY:
      return extend(state, {
        currentCity: getCityByName(state.offers, action.payload),
        currentOffers: getOffersByCity(state.offers, action.payload),
      });
    case actionTypes.CHANGE_SORTING_TYPE:
      return extend(state, {
        sortType: action.payload,
        currentOffers: getSortedOffers(state.currentOffers, action.payload),
      });
    case actionTypes.LOAD_OFFERS:
      return extend(state, {
        offers: action.payload,
      });
    default:
      return state;
  }
}

export {getOffersByCity, getNearByOffers, getOfferById, Operation};
