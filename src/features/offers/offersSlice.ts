import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

import { getOffers, getOffersNearby } from '../../api/api';
import { IOffer } from '../../interfaces/offer';

interface offersDisplayState {
  offers: IOffer[];
  status: 'idle' | 'pending' | 'succeeded' | 'failed';
  error: string | boolean;
  offer: unknown | IOffer;
  offersNearby: IOffer[];
  offersNearbyStatus: 'idle' | 'pending' | 'succeeded' | 'failed';
  offersNearbyError: string | boolean;
}

const initialState = {
  offers: [],
  offer: {},
  offersNearby: [],
  status: 'idle',
  error: false,
  offersNearbyStatus: 'idle',
  offersNearbyError: false,
} as offersDisplayState;

const fetchOffers = createAsyncThunk(
  'offers/fetchOffers',
  () => getOffers()
);

const fetchOffersNearby = createAsyncThunk(
  'offers/fetchOffersNearby',
  (id: string) => getOffersNearby(id)
);


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
    builder.addCase(fetchOffersNearby.pending, state => {
      state.offersNearbyStatus = 'pending';
    });
    builder.addCase(fetchOffersNearby.fulfilled, (state, { payload }) => {
      state.offersNearbyStatus = 'succeeded';
      state.offersNearby = payload.offers;
    });
    builder.addCase(fetchOffersNearby.rejected, state => {
      state.offersNearbyStatus = 'failed';
      state.offersNearbyError = true;
    });
  }
});

export default offers.reducer;

export { fetchOffers, fetchOffersNearby };
