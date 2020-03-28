import {SortType} from '../const';

const getOffersSortedByPriceToHigh = (offers) => {
  return offers.slice().sort((a, b) => a.price - b.price);
};

const getOffersSortedByPriceToLow = (offers) => {
  return offers.slice().sort((a, b) => b.price - a.price);
};

const getOffersSortedByTopRating = (offers) => {
  return offers.slice().sort((a, b) => b.rating - a.rating);
};

const getSortedOffers = (offers, sortType) => {
  switch (sortType) {
    case SortType.POPULAR:
      return offers;
    case SortType.PRICE_TO_HIGH:
      return getOffersSortedByPriceToHigh(offers);
    case SortType.PRICE_TO_LOW:
      return getOffersSortedByPriceToLow(offers);
    case SortType.TOPRATED:
      return getOffersSortedByTopRating(offers);
  }

  return offers;
};

export {getSortedOffers};
