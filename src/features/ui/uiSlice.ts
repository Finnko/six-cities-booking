import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { RootState } from '../../app/rootReducer';
import { SortType, DEFAULT_CITY } from '../../const';


interface uiDisplayState {
  activeCity: string;
  sortType: string;
  activeOffer: number | null;
}

const initialState = {
  activeCity: DEFAULT_CITY.name,
  sortType: SortType.POPULAR,
  activeOffer: null,
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
    changeActiveOffer(state, action: PayloadAction<number | null>) {
      state.activeOffer = action.payload;
    },
  }
});

const selectActiveCity = (state: RootState): string => state.ui.activeCity;
const selectSortType = (state: RootState): string => state.ui.sortType;

export const {
  changeCity,
  changeSortType,
  changeActiveOffer,
} = ui.actions;

export {
  selectActiveCity,
  selectSortType,
};

export default ui.reducer;


