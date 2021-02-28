import { combineReducers } from '@reduxjs/toolkit';

import commentsReducer from '../features/comments/commentsSlice';
import offersReducer from '../features/offers/offersSlice';
import uiReducer from '../features/ui/uiSlice';
import userReducer from '../features/user/userSlice';

const rootReducer = combineReducers({
  offers: offersReducer,
  ui: uiReducer,
  user: userReducer,
  comments: commentsReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
