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
  loadOffers: (offers) => ({
    type: actionTypes.LOAD_OFFERS,
    payload: offers,
  }),
};

export {ActionCreator};
