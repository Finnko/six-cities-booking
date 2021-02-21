import { createSelector } from 'reselect';

import { RootState } from '../../app/rootReducer';

const selectOffers = (state: RootState) => state.offers.offers;

const selectCurrentCity = createSelector(
  selectOffers,
  offers => offers[0] ? offers[0].city : [52.37454, 4.897976]
);

const selectCities = createSelector(
  selectOffers,
  offers => new Set([...offers.map(offer => offer.city.name)])
);

// const getCurrentOffers = createSelector(
//   [getCurrentCity, getActiveSortType, getOffers],
//   (activeCity, activeSortType, offers) => {
//     const filteredOffers = offers.filter((offer) => offer.city.name === activeCity.name);
//
//     return getSortedOffers(filteredOffers, activeSortType);
//   }
// );


const selectCurrentOffers = createSelector(
  selectOffers,
  selectCurrentCity,
  (offers, city) => offers.filter(offer => offer.city.name === city)
);

export { selectCities, selectCurrentCity };

