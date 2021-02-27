import { combineReducers } from '@reduxjs/toolkit';

import offersReducer from '../features/offers/offersSlice';
import uiReducer from '../features/ui/uiSlice';
import userReducer from '../features/user/userSlice';

const rootReducer = combineReducers({
  offers: offersReducer,
  ui: uiReducer,
  user: userReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
