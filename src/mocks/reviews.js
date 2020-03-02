import nanoid from 'nanoid';
import {getRandomRating, getRandomDate} from '../utils';

const ID_PREFIX = `id_`;

const reviews = [
  {
    id: ID_PREFIX + nanoid(10),
    name: `Max`,
    avatar: `img/avatar-max.jpg`,
    rating: getRandomRating(),
    description: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.`,
    date: getRandomDate()
  },
  {
    id: ID_PREFIX + nanoid(10),
    name: `Alex`,
    avatar: `img/avatar-max.jpg`,
    rating: getRandomRating(),
    description: `The building is green and from 18th century.`,
    date: getRandomDate()
  },
  {
    id: ID_PREFIX + nanoid(10),
    name: `Alex 1`,
    avatar: `img/avatar-max.jpg`,
    rating: getRandomRating(),
    description: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.`,
    date: getRandomDate()
  },
  {
    id: ID_PREFIX + nanoid(10),
    name: `Alex 3`,
    avatar: `img/avatar-max.jpg`,
    rating: getRandomRating(),
    description: `The building is green.`,
    date: getRandomDate()
  }
];

export default reviews;
