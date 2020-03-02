const OFFER_MAX_RATING = 5;

const extend = (a, b) => {
  return Object.assign({}, a, b);
};

const getRandomArrayNumber = (array) => Math.floor(Math.random() * array.length);

const getRandomArray = (array) => {
  const randomNumber = getRandomArrayNumber(array);
  return array.slice(0, randomNumber);
};

const getRandomRating = () => parseFloat((Math.random() * OFFER_MAX_RATING).toFixed(1));

const getRatingPercentage = (rating) => rating * 100 / OFFER_MAX_RATING;

export {extend, getRandomRating, getRandomArray, getRatingPercentage};
