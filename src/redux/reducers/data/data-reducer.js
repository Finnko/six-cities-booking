import {extend, getCities} from '../../../utils/common';
import {actionTypes} from '../../actions/action-types';
import {ActionCreator} from '../../actions/action-creator';
import {AppPaths, INITIAL_CITY, SortType} from '../../../const';
import Adapter from '../../../adapter/adapter';

const getOfferById = (initialOffers, id) => initialOffers.find((offer) => offer.id === id);

const initialState = {
  loading: false,
  error: false,
  offers: [],
  currentCity: INITIAL_CITY,
  cities: [],
  sortType: SortType.POPULAR,
};

const Operation = {
  fetchOffers: () => {
    return (dispatch, getState, api) => {
      return api.get(AppPaths.getOffers())
        .then((response) => {
          dispatch(ActionCreator.fetchOffers(Adapter.parseOffers(response.data)));
        })
        .catch(() => {
          dispatch(ActionCreator.fetchOffersError());
        });
    };
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
    case actionTypes.FETCH_OFFERS:
      return extend(state, {
        offers: action.payload,
        cities: getCities(action.payload),
      });
  }

  return state;
}

export {getOfferById, Operation};
