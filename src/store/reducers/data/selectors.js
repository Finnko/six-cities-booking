import {createSelector} from "reselect";
import NameSpace from '../../name-space';
import {getSortedOffers} from '../../../utils/sorting';

const NAME_SPACE = NameSpace.DATA;

const getOffers = (state) => {
  return state[NAME_SPACE].offers;
};

const getCurrentCity = (state) => {
  return state[NAME_SPACE].currentCity;
};

const getCitiesList = (state) => {
  return state[NAME_SPACE].cities;
};

const getActiveSortType = (state) => {
  return state[NAME_SPACE].sortType;
};

const getCurrentOffers = createSelector(
    [getCurrentCity, getActiveSortType, getOffers],
    (activeCity, activeSortType, offers) => {
      const filteredOffers = offers.filter((offer) => offer.city.name === activeCity.name);

      return getSortedOffers(filteredOffers, activeSortType);
    }
);

export {getCurrentOffers, getCurrentCity, getCitiesList};
