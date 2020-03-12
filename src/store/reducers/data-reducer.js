import offers from '../../mocks/offers';
import reviews from '../../mocks/reviews';

const getCities = (initialOffers) => [...new Set(initialOffers.map((offer) => offer.city))];


const initialState = {
  offers,
  reviews,
  chosenCity: getCities(offers)[0],
  cities: getCities(offers)
};

export default function dataReducer(state = initialState, action) {
  switch (action.type) {
    default:
      return state;
  }
}
