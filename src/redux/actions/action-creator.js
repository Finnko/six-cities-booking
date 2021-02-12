import {actionTypes} from './action-types';

const ActionCreator = {
  changeCity: (city) => ({
    type: actionTypes.CHANGE_CITY,
    payload: city,
  }),
  changeSortType: (sortType) => ({
    type: actionTypes.CHANGE_SORTING_TYPE,
    payload: sortType,
  }),
  fetchOffers: (offers) => ({
    type: actionTypes.FETCH_OFFERS,
    payload: offers,
  }),
  fetchOffersError: () => ({
    type: actionTypes.FETCH_OFFERS_ERROR,
  }),
  changeAuthorizationStatus: (status) => {
    return {
      type: actionTypes.CHANGE_AUTH_STATUS,
      payload: status,
    };
  },
  changeAuthData: (user) => {
    return {
      type: actionTypes.AUTHORIZE_USER,
      payload: user,
    };
  },
  setError: (error) => {
    return {
      type: actionTypes.SET_ERROR,
      payload: error,
    };
  }

};

export {ActionCreator};
