import nanoid from 'nanoid';
import {getRandomRating, getRandomArray} from '../utils';
import {FEATURES} from '../const';

const ID_PREFIX = `id_`;

const offers = [
  {
    id: ID_PREFIX + nanoid(10),
    title: `Beautiful & luxurious apartment at great location`,
    price: `120`,
    type: `Apartment`,
    promoImage: `img/apartment-01.jpg`,
    isPremium: true,
    rating: getRandomRating(),
    images: [
      `img/room.jpg`,
      `img/apartment-01.jpg`,
      `img/apartment-02.jpg`,
      `img/apartment-03.jpg`,
      `img/studio-01.jpg`,
      `img/apartment-01.jpg`,
    ],
    features: FEATURES,
    owner: {
      name: `Angelina`,
      avatar: `img/avatar-angelina.jpg`,
      description: [
        `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.`,
        `An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.`
      ],
    }
  },
  {
    id: ID_PREFIX + nanoid(10),
    title: `Wood and stone place`,
    price: `80`,
    type: `Private room`,
    promoImage: `img/room.jpg`,
    isPremium: false,
    rating: getRandomRating(),
    images: [
      `img/apartment-01.jpg`,
      `img/apartment-02.jpg`,
      `img/room.jpg`,
      `img/studio-01.jpg`,
    ],
    features: getRandomArray(FEATURES),
    owner: {
      name: `Angelina 2`,
      avatar: `img/avatar-angelina.jpg`,
      description: [
        `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.`,
      ],
    }
  },
  {
    id: ID_PREFIX + nanoid(10),
    title: `Canal View Prinsengracht`,
    price: `132`,
    type: `Apartment`,
    promoImage: `img/apartment-02.jpg`,
    isPremium: false,
    rating: getRandomRating(),
    images: [
      `img/room.jpg`,
      `img/apartment-01.jpg`,
      `img/apartment-02.jpg`,
      `img/apartment-03.jpg`,
      `img/studio-01.jpg`,
      `img/apartment-01.jpg`,
    ],
    features: getRandomArray(FEATURES),
    owner: {
      name: `Angelina 3`,
      avatar: `img/avatar-angelina.jpg`,
      description: [
        `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.`,
        `An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.`
      ],
    }
  },
  {
    id: ID_PREFIX + nanoid(10),
    title: `Nice, cozy, warm big bed apartment`,
    price: `180`,
    type: `Apartment`,
    promoImage: `img/apartment-03.jpg`,
    isPremium: true,
    rating: getRandomRating(),
    images: [
      `img/room.jpg`,
      `img/apartment-01.jpg`,
      `img/apartment-02.jpg`,
      `img/apartment-03.jpg`,
      `img/studio-01.jpg`,
      `img/apartment-01.jpg`,
    ],
    features: getRandomArray(FEATURES),
    owner: {
      name: `Angelina 4`,
      avatar: `img/avatar-angelina.jpg`,
      description: [
        `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.`,
        `An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.`
      ],
    }
  }
];

export default offers;
