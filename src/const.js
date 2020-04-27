const Feature = {
  WIFI: `Wi-Fi`,
  WASHINGMACHINE: `Washing machine`,
  TOWELS: `Towels`,
  HEATING: `Heating`,
  COFFEEMACHINE: `Coffee machine`,
  BABYSET: `Baby seat`,
  KITCHEN: `Kitchen`,
  DISHWASHER: `Dishwasher`,
  CABELTV: `Cabel TV`,
  FRIDGE: `Fridge`
};

const features = [
  Feature.WIFI,
  Feature.WASHINGMACHINE,
  Feature.HEATING,
  Feature.COFFEEMACHINE,
  Feature.BABYSET,
  Feature.DISHWASHER,
  Feature.CABELTV,
  Feature.FRIDGE
];

const SortType = {
  POPULAR: `Popular`,
  PRICE_TO_HIGH: `Price: low to high`,
  PRICE_TO_LOW: `Price: high to low`,
  TOPRATED: `Top rated first`
};

const sortTypes = [
  SortType.POPULAR,
  SortType.PRICE_TO_HIGH,
  SortType.PRICE_TO_LOW,
  SortType.TOPRATED
];

const REVIEW_RATING_VALUES = [
  {value: 5, title: `perfect`},
  {value: 4, title: `good`},
  {value: 3, title: `not bad`},
  {value: 2, title: `badly`},
  {value: 1, title: `terribly`},
];

const AppViewMode = {
  MAIN: `Main`,
  DETAILS: `Details`
};

const INITIAL_CITY = {
  "name": `Amsterdam`,
  "coords": {
    "latitude": 52.37454,
    "longitude": 4.897976,
    "zoom": 13
  }
};

const AuthorizationStatus = {
  NO_AUTH: `NO_AUTH`,
  AUTH: `AUTH`,
};

const AppPaths = {
  getLogin: () => `/login`,
  getOffers: () => `/hotels`,
  getOffer: (id) => `/offer/${id}`,
  getRoot: () => `/`,
};


const ServerError = {
  UNAUTHORIZED: 401,
  BAD_REQUEST: 400,
};

const END_POINT = `https://htmlacademy-react-3.appspot.com/six-cities`;
const TIMEOUT = 1000 * 5;

export {features, SortType, sortTypes, AppPaths, AppViewMode, END_POINT,
  TIMEOUT, INITIAL_CITY, AuthorizationStatus, ServerError, REVIEW_RATING_VALUES
};
