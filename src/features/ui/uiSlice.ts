import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import {SortType, DEFAULT_CITY} from '../../const';


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


export const {
  changeCity,
  changeSortType,
} = ui.actions;

export default ui.reducer;


