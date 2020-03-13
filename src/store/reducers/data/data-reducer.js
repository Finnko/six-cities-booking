import {extend} from '../../../utils';
import {actionTypes} from '../../actions/actionTypes';
import offers from '../../../mocks/offers';

const getCities = (initialOffers) => [...new Set(initialOffers.map((offer) => offer.city))];

const getOffersByCity = (initialOffers, chosenCity) => initialOffers.filter((offer) => offer.city === chosenCity);

const getOfferById = (initialOffers, id) => initialOffers.find((offer) => offer.id === id);

const getNearByOffers = (initialOffers, id) => {
  const index = initialOffers.findIndex((offer) => offer.id === id);

  if (!index) {
    return [];
  }
  return [...initialOffers.slice(0, index), ...initialOffers.slice(index + 1)];

};

const initialState = {
  offers: getOffersByCity(offers, getCities(offers)[0]),
  chosenCity: getCities(offers)[0],
  cities: getCities(offers),
};

export default function dataReducer(state = initialState, action) {
  switch (action.type) {
    case actionTypes.CHANGE_CITY:
      return extend(state, {
        chosenCity: action.payload,
        offers: getOffersByCity(offers, action.payload),
      });
    default:
      return state;
  }
}

export {getOffersByCity, getNearByOffers, getOfferById};
