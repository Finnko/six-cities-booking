import { combineReducers } from '@reduxjs/toolkit';

import offersReducer from '../features/offers/offersSlice';
import uiReducer from '../features/ui/uiSlice';

const rootReducer = combineReducers({
  offers: offersReducer,
  ui: uiReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
