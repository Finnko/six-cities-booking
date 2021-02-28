import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';

import {
  getOffer,
  getOffers,
  OfferResult,
  OffersResult,
} from '../../api/api';
import { AppThunk } from '../../app/store';
import { IOffer } from '../../interfaces/offer';

interface offersDisplayState {
  offers: IOffer[];
  offer: unknown | IOffer;
  status: 'idle' | 'pending' | 'succeeded' | 'failed';
  error: string | boolean;
}

const initialState = {
  offers: [],
  offer: {},
  status: 'idle',
  error: false,
} as offersDisplayState;

const fetchOffers = createAsyncThunk(
  'offers/fetchOffers',
  () => getOffers()
);

// const fetchOffers = (): AppThunk => async dispatch => {
//   try {
//     dispatch(getOffersLoadingStart());
//     const offers = await getOffers();
//
//     dispatch(getOffersSuccess(offers));
//   } catch (err) {
//     dispatch(getOffersFailed(err.toString()));
//   }
// };

const offers = createSlice({
  name: 'offers',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(fetchOffers.pending, state => {
      state.status = 'pending';
    });
    builder.addCase(fetchOffers.fulfilled, (state, { payload }) => {
      state.status = 'succeeded';
      state.offers = payload.offers;
    });
    builder.addCase(fetchOffers.rejected, state => {
      state.status = 'failed';
      state.error = true;
    });
  }
});


// const fetchOffer = (id: string): AppThunk => async dispatch => {
//   try {
//     dispatch(getOfferLoadingStart());
//     const offer = await getOffer(id);
//
//     dispatch(getOfferSuccess(offer));
//   } catch (err) {
//     dispatch(getOfferFailed(err.toString()));
//   }
// };

// const {
//   getOffersLoadingStart,
//   getOffersSuccess,
//   getOffersFailed,
//   getOfferLoadingStart,
//   getOfferSuccess,
//   getOfferFailed,
// } = offers.actions;

export default offers.reducer;

export {
  fetchOffers,
  // fetchOffer,
};
