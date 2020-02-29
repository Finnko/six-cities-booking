const OFFER_MAX_RATING = 5;

const bind = (thisArg, ...functions) => {
  functions.forEach((currentFunction) => {
    thisArg[currentFunction.name] = currentFunction.bind(thisArg);
  });
};

const getRandomArrayNumber = (array) => Math.floor(Math.random() * array.length);

const getRandomArray = (array) => {
  const randomNumber = getRandomArrayNumber(array);
  return array.slice(0, randomNumber);
};

const getRandomRating = () => (Math.random() * OFFER_MAX_RATING).toFixed(1);

export {bind, getRandomRating, getRandomArray};
