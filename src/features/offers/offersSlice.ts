import { createSlice, PayloadAction } from '@reduxjs/toolkit';

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
  isPending: boolean;
  error: string | boolean;
}

const initialState = {
  offers: [],
  offer: {},
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
    },
    getOfferLoadingStart(state) {
      state.isPending = true;
    },
    getOfferSuccess(state, action: PayloadAction<OfferResult>) {
      state.offer = action.payload.offer;
      state.isPending = false;
    },
    getOfferFailed(state, action: PayloadAction<string>) {
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

const fetchOffer = (id: string): AppThunk => async dispatch => {
  try {
    dispatch(getOfferLoadingStart());
    const offer = await getOffer(id);

    dispatch(getOfferSuccess(offer));
  } catch (err) {
    dispatch(getOfferFailed(err.toString()));
  }
};

const {
  getOffersLoadingStart,
  getOffersSuccess,
  getOffersFailed,
  getOfferLoadingStart,
  getOfferSuccess,
  getOfferFailed,
} = offers.actions;

export default offers.reducer;

export {
  fetchOffers,
  fetchOffer,
};
