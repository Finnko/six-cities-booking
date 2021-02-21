const END_POINT = 'https://6.react.pages.academy/six-cities';
const TIMEOUT = 1000 * 5;

const DEFAULT_CITIES = [
  'Paris',
  'Cologne',
  'Brussels',
  'Amsterdam',
  'Hamburg',
  'Dusseldorf',
];

const DEFAULT_CITY = {
  name: 'Paris',
  location: {
    latitude: 48.85661,
    longitude: 2.351499,
    zoom: 13,
  }
};

const Features: { [unit: string]: string } = {
  WIFI: 'Wi-Fi',
  WASHING_MACHINE: 'Washing machine',
  TOWELS: 'Towels',
  HEATING: 'Heating',
  COFFEE_MACHINE: 'Coffee machine',
  BABY_SEAT: 'Baby seat',
  KITCHEN: 'Kitchen',
  DISHWASHER: 'Dishwasher',
  CABLE_TV: 'Cabel TV',
  FRIDGE: 'Fridge',
};

const SortType: { [unit: string]: string } = {
  POPULAR: 'Popular',
  PRICE_TO_HIGH: 'Price: low to high',
  PRICE_TO_LOW: 'Price: high to low',
  TOP_RATED: 'Top rated first',
};

// const REVIEW_RATING_VALUES = [
//   {value: 5, title: 'perfect'},
//   {value: 4, title: 'good'},
//   {value: 3, title: 'not bad'},
//   {value: 2, title: 'badly'},
//   {value: 1, title: 'terribly'},
// ];

const AuthorizationStatus: { [unit: string]: string } = {
  NO_AUTH: 'NO_AUTH',
  AUTH: 'AUTH',
};

const ServerError: { [unit: string]: number} = {
  UNAUTHORIZED: 401,
  BAD_REQUEST: 400,
};


export {
  Features,
  SortType,
  END_POINT,
  TIMEOUT,
  DEFAULT_CITIES,
  DEFAULT_CITY,
  AuthorizationStatus,
  ServerError,
};
