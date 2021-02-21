import { SortType } from '../const';
import { IOffer } from '../interfaces/offer';

const sortOffers = (offers: IOffer[], sortType: string): IOffer[] => {
  switch (sortType) {
    case SortType.PRICE_TO_HIGH:
      return offers.slice().sort((a, b) => a.price - b.price);
    case SortType.PRICE_TO_LOW:
      return offers.slice().sort((a, b) => b.price - a.price);
    case SortType.TOP_RATED:
      return offers.slice().sort((a, b) => b.rating - a.rating);
    default:
      return offers;
  }
};

export { sortOffers };
