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

export {features, SortType, sortTypes};
