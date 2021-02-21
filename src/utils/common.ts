const OFFER_MAX_RATING = 5;

const getUpperCaseFirstLetter = (str: string): string => str.slice(0, 1).toUpperCase() + str.slice(1);

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
const renameKeys = obj => {
  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      if (typeof obj[key] === 'object') {
        renameKeys(obj[key]);
      }

      if (key.includes('_')) {
        const [firstWord, secondWord] = key.split('_');
        const newKey = firstWord + secondWord[0].toUpperCase() + secondWord.slice(1);

        obj[newKey] = obj[key];
        delete obj[key];
      }
    }
  }

  return obj;
};

// const getRandomDate = () => {
//   const targetDate = new Date();
//   const diffValue = getRandomInRange(0, 5000);
//
//   return targetDate.getTime() + diffValue;
// };

// const getTimeTagFormatted = (date) => {
//   return moment(date).format(`YYYY-MM-DD`);
// };
//
// const getFormattedDate = (date) => {
//   return moment(date).format(`MMMM, YYYY`);
// };

const getRatingPercentage = (rating: number): number => rating * 100 / OFFER_MAX_RATING;

export {
  getRatingPercentage,
  getUpperCaseFirstLetter,
  renameKeys,
};
