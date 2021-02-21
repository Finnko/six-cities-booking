import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { RootState } from '../../app/rootReducer';
import { SortType, DEFAULT_CITY } from '../../const';


interface uiDisplayState {
  activeCity: string;
  sortType: string;
}

const initialState = {
  activeCity: DEFAULT_CITY.name,
  sortType: SortType.POPULAR,
} as uiDisplayState;

const ui = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    changeCity(state, action: PayloadAction<string>) {
      state.activeCity = action.payload;
    },
    changeSortType(state, action: PayloadAction<string>) {
      state.sortType = action.payload;
    },
  }
});

const selectActiveCity = (state: RootState): string => state.ui.activeCity;
const selectSortType = (state: RootState): string => state.ui.sortType;

export const {
  changeCity,
  changeSortType,
} = ui.actions;

export {
  selectActiveCity,
  selectSortType,
};

export default ui.reducer;


