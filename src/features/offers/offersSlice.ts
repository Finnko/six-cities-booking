import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { getOffers, OffersResult } from '../../api/api';
import { AppThunk } from '../../app/store';
import { IOffer } from '../../interfaces/offer';

interface offersDisplayState {
  offers: IOffer[];
  isPending: boolean;
  error: string | boolean;
}

const initialState = {
  offers: [],
  isPending: false,
  error: false,
} as offersDisplayState;

const offers = createSlice({
  name: 'offers',
  initialState,
  reducers: {
    getOffersLoadingStart(state) {
      state.isPending = true;
    },
    getOffersSuccess(state, action: PayloadAction<OffersResult>) {
      state.offers = action.payload.offers;
      state.isPending = false;
    },
    getOffersFailed(state, action: PayloadAction<string>) {
      state.isPending = false;
      state.error = action.payload;
    }
  }
});

const fetchOffers = (): AppThunk => async dispatch => {
  try {
    dispatch(getOffersLoadingStart());
    const offers = await getOffers();

    dispatch(getOffersSuccess(offers));
  } catch (err) {
    dispatch(getOffersFailed(err.toString()));
  }
};

const {
  getOffersLoadingStart,
  getOffersSuccess,
  getOffersFailed,
} = offers.actions;

export default offers.reducer;

export {
  fetchOffers,
};
