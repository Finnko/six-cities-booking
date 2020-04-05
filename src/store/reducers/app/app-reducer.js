import {actionTypes} from '../../actions/action-types';
import {extend} from '../../../utils/common';

const initialState = {
  error: ``,
};

export default function appReducer(state = initialState, action) {
  switch (action.type) {
    case actionTypes.SET_ERROR:
      return extend(state, {
        error: action.payload,
      });
  }

  return state;
}
