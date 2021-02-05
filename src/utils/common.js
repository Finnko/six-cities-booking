const OFFER_MAX_RATING = 5;

const extend = (a, b) => {
  return Object.assign({}, a, b);
};

const getUpperCaseFirstLetter = (str) => str.substr(0, 1).toUpperCase() + str.slice(1);

const getCities = (items) => {
  const cityMap = {};

  items.forEach((item) => {
    if (!cityMap[item.city.name]) {
      cityMap[item.city.name] = item.city;
    }
  });

  return Object.values(cityMap);
};

const getRandomArrayNumber = (array) => Math.floor(Math.random() * array.length);

const getRandomArray = (array) => {
  const randomNumber = getRandomArrayNumber(array);
  return array.slice(0, randomNumber);
};

const getRandomInRange = function (min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const getRandomDate = () => {
  const targetDate = new Date();
  const diffValue = getRandomInRange(0, 5000);

  return targetDate.getTime() + diffValue;
};

// const getTimeTagFormatted = (date) => {
//   return moment(date).format(`YYYY-MM-DD`);
// };
//
// const getFormattedDate = (date) => {
//   return moment(date).format(`MMMM, YYYY`);
// };

const getRandomRating = () => parseFloat((Math.random() * OFFER_MAX_RATING).toFixed(1));

const getRatingPercentage = (rating) => rating * 100 / OFFER_MAX_RATING;

export {extend, getRandomRating, getRandomArray, getRatingPercentage, getRandomDate,
 getUpperCaseFirstLetter, getCities,
};
