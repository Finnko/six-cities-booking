import {extend, getCities} from '../../../utils/common';
import {actionTypes} from '../../actions/action-types';
import {ActionCreator} from '../../actions/action-creator';
import {INITIAL_CITY, SortType} from '../../../const';
import Adapter from '../../../adapter/adapter';

const getOfferById = (initialOffers, id) => initialOffers.find((offer) => offer.id === id);

const initialState = {
  offers: [],
  currentCity: INITIAL_CITY,
  cities: [],
  sortType: SortType.POPULAR,
};

const Operation = {
  loadOffers: () => (dispatch, getState, api) => {
    return api.get(`/hotels`)
      .then((response) => {
        dispatch(ActionCreator.loadOffers(Adapter.parseOffers(response.data)));
      });
  },
};

export default function dataReducer(state = initialState, action) {
  switch (action.type) {
    case actionTypes.CHANGE_CITY:
      return extend(state, {
        currentCity: action.payload,
      });
    case actionTypes.CHANGE_SORTING_TYPE:
      return extend(state, {
        sortType: action.payload,
      });
    case actionTypes.LOAD_OFFERS:
      return extend(state, {
        offers: action.payload,
        cities: getCities(action.payload),
      });
    default:
      return state;
  }
}

export {getOfferById, Operation};
