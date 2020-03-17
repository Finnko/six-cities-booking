import {actionTypes} from './actionTypes';

const ActionCreator = {
  changeCity: (city) => ({
    type: actionTypes.CHANGE_CITY,
    payload: city,
  }),
  changeSortType: (sortType) => ({
    type: actionTypes.CHANGE_SORTING_TYPE,
    payload: sortType,
  }),
};

export {ActionCreator};
