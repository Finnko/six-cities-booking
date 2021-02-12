import { combineReducers } from '@reduxjs/toolkit';

import offersReducer from './features/offersSlice';

const rootReducer = combineReducers({
  offers: offersReducer
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
