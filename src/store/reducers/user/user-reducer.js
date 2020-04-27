import {actionTypes} from '../../actions/action-types';
import {AppPaths, ServerError} from '../../../const';
import {AuthorizationStatus} from '../../../const';
import {ActionCreator} from '../../actions/action-creator';
import Adapter from '../../../adapter/adapter';
import {extend} from '../../../utils/common';
import history from '../../../history';

const initialState = {
  authorizationStatus: AuthorizationStatus.NO_AUTH,
  userData: {},
};

const Operation = {
  checkAuthStatus: () => (dispatch, getState, api) => {
    return api.get(AppPaths.getLogin())
      .then((response) => {
        const authData = Adapter.userRawToData(response.data);

        dispatch(ActionCreator.changeAuthorizationStatus(AuthorizationStatus.AUTH));
        dispatch(ActionCreator.changeAuthData(authData));
      })
      .catch((err) => {
        if (err.response.status === ServerError.UNAUTHORIZED) {
          dispatch(ActionCreator.changeAuthorizationStatus(AuthorizationStatus.NO_AUTH));
        }
      });
  },
  authorizeUser: (userData) => (dispatch, getState, api) => {
    return api.post(AppPaths.getLogin(), userData)
      .then((response) => {
        const authData = Adapter.userRawToData(response.data);

        dispatch(ActionCreator.changeAuthorizationStatus(AuthorizationStatus.AUTH));
        dispatch(ActionCreator.changeAuthData(authData));

        history.push(`/`);
      })
      .catch((err) => {
        if (err.response.status === ServerError.BAD_REQUEST) {
          dispatch(ActionCreator.setError(AuthorizationStatus.NO_AUTH));
        }

        dispatch(ActionCreator.changeAuthorizationStatus(AuthorizationStatus.NO_AUTH));
        dispatch(ActionCreator.changeAuthData(null));
      });
  }
};

export default function userReducer(state = initialState, action) {
  switch (action.type) {
    case actionTypes.CHANGE_AUTH_STATUS:
      return extend(state, {
        authorizationStatus: action.payload,
      });
    case actionTypes.AUTHORIZE_USER:
      return extend(state, {
        userData: action.payload,
      });
  }

  return state;
}

export {Operation};
