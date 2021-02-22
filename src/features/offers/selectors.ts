import { createSelector } from 'reselect';

import { RootState } from '../../app/rootReducer';
import { ICity } from '../../interfaces/city';
import { sortOffers } from '../../utils/sort';
import { selectActiveCity, selectSortType } from '../ui/uiSlice';

const selectOffers = (state: RootState) => state.offers.offers;

const selectCities = createSelector(
  selectOffers,
  offers => Object.values(offers.reduce((acc, { city }) => ({...acc, [city.name]: city }), {}) as ICity[])
);

const selectCurrentCity = createSelector(
  [selectCities, selectActiveCity],
  (cities: ICity[], activeCity: string) => cities.find(city => city.name === activeCity)
);

const selectCurrentOffers = createSelector(
  [selectActiveCity, selectSortType, selectOffers],
  (activeCity, activeSortType, offers) => {
    const filteredOffers = offers.filter(({city}) => city.name === activeCity);

    return sortOffers(filteredOffers, activeSortType);
  }
);

export { selectCurrentCity, selectCurrentOffers };

