const Features = {
  WIFI: 'Wi-Fi',
  WASHING_MACHINE: 'Washing machine',
  TOWELS: 'Towels',
  HEATING: 'Heating',
  COFFEE_MACHINE: 'Coffee machine',
  BABY_SEAT: 'Baby seat',
  KITCHEN: 'Kitchen',
  DISHWASHER: 'Dishwasher',
  CABLE_TV: 'Cabel TV',
  FRIDGE: 'Fridge'
};

const SortType = {
  POPULAR: 'Popular',
  PRICE_TO_HIGH: 'Price: low to high',
  PRICE_TO_LOW: 'Price: high to low',
  TOP_RATED: 'Top rated first'
};

const REVIEW_RATING_VALUES = [
  {value: 5, title: 'perfect'},
  {value: 4, title: 'good'},
  {value: 3, title: 'not bad'},
  {value: 2, title: 'badly'},
  {value: 1, title: 'terribly'},
];

const AppViewMode = {
  MAIN: 'Main',
  DETAILS: 'Details'
};

const INITIAL_CITY = {
  'name': 'Amsterdam',
  'coords': {
    'latitude': 52.37454,
    'longitude': 4.897976,
    'zoom': 13
  }
};

const AuthorizationStatus = {
  NO_AUTH: 'NO_AUTH',
  AUTH: 'AUTH',
};

const AppPaths = {
  getAuth: (): string => '/login',
  getOffers: (): string => '/hotels',
  getOffer: (id: number): string => `/offer/${id}`,
  getOffersNearby: (id: number): string => `/hotels/${id}/nearby`,
  getRoot: (): string => '/',
};

const ServerError = {
  UNAUTHORIZED: 401,
  BAD_REQUEST: 400,
};

const END_POINT = 'https://6.react.pages.academy/six-cities';
const TIMEOUT = 1000 * 5;

export {Features, SortType, AppPaths, AppViewMode, END_POINT,
  TIMEOUT, INITIAL_CITY, AuthorizationStatus, ServerError, REVIEW_RATING_VALUES
};
