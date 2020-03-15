import {actionTypes} from './actionTypes';

const ActionCreator = {
  changeCity: (city) => ({
    type: actionTypes.CHANGE_CITY,
    payload: city,
  }),
};

export {ActionCreator};
