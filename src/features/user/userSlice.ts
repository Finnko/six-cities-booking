import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { createSelector } from 'reselect';

import { authorizeUser, UserResult } from '../../api/api';
import { RootState } from '../../app/rootReducer';
import { AppThunk } from '../../app/store';
import { AuthStatus } from '../../const';
import { IUser } from '../../interfaces/user';


interface userDisplayState {
  authStatus: string;
  isPending: boolean;
  error: string | boolean;
  authInfo: IUser;
}

const initialState = {
  authStatus: AuthStatus.NO_AUTH,
  isPending: false,
  error: false,
  authInfo: {
    name: '',
    avatarUrl: '',
  },
} as userDisplayState;

const user = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setAuth(state, action: PayloadAction<string>) {
      state.authStatus = action.payload;
    },
    authenticateUserStart(state) {
      state.isPending = false;
    },
    authenticateUserSuccess(state, action: PayloadAction<UserResult>) {
      state.authInfo = action.payload.authInfo;
      state.isPending = false;
    },
    authenticateUserFailed(state, action: PayloadAction<string>) {
      state.isPending = false;
      state.error = action.payload;
    }
  }
});

const checkAuth = (): AppThunk => async dispatch => {
  try {
    const userData = await checkAuth();

    dispatch(setAuth(AuthStatus.AUTH));
    // dispatch(authenticateUserSuccess(userData);
  } catch (err) {
    throw err.toString();
  }
};

const authenticateUser = (email: string, password: string): AppThunk => async dispatch => {
  try {
    dispatch(authenticateUserStart());
    const userData = await authorizeUser(email, password);

    dispatch(setAuth(AuthStatus.AUTH));
    dispatch(authenticateUserSuccess(userData));
  } catch (err) {
    dispatch(authenticateUserFailed(err.toString()));
  }
};

const selectUser = (state: RootState) => state.user;

const selectUserInfo = createSelector(
  selectUser,
  user => user.authInfo
);

const {
  setAuth,
  authenticateUserStart,
  authenticateUserSuccess,
  authenticateUserFailed,
} = user.actions;

export default user.reducer;

export {
  checkAuth,
  authenticateUser,
  selectUserInfo,
};
