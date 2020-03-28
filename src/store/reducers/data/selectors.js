import {createSelector} from "reselect";
import NameSpace from '../../name-space';

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


// export const getArtistQuestions = createSelector(
//     // Функция принимает state и возвращает результат
//     getOffers,
//     // Функция так же принимает state и возвращает результат.
//     // Таких функций (геттеров) может быть множество
//     randomFilter,
//     // Последняя функция уже не геттер, а комбайнер,
//     // она принимает результаты всех предыдущих функций
//     // и возвращает результат на их основе
//     (resultOne, resultTwo) => {
//       return resultOne.filter((it) => resultTwo && it.type === `artist`);
//     }
// );

// // Example of composing selectors
// const getTotalTax = createSelector(
//   [ getSelectedState, getItemSubtotal ],
//   (selectedState, subtotal) => {
//     return subtotal * taxRates[selectedState];
//   },
// );

// const getCitiesNames = createSelector(
//   getOffers,
//   (offers) => {
//     return offers.map((offer) => offer.city);
//   }
// );

const getCurrentOffers = createSelector(
    [getCurrentCity, getOffers],
    (activeCity, offers) => offers.filter((offer) => offer.city.name === activeCity.name)
);

export {getCurrentOffers, getCurrentCity, getCitiesList};
