import nanoid from 'nanoid';
import {getRandomRating, getRandomArray} from '../utils/common';
import {features} from '../const';
import reviews from './reviews';

const ID_PREFIX = `id_`;
const MAX_ROOMS_QUANTITY = 3;
const MAX_GUESTS_QUANTITY = 4;

const offers = [
  {
    id: ID_PREFIX + nanoid(10),
    coords: {
      latitude: 52.3909553943508,
      longitude: 4.86309666406198,
      zoom: 8
    },
    city: {
      coords: {
        latitude: 52.370216,
        longitude: 4.895168,
        zoom: 10
      },
      name: `Amsterdam`,
    },
    title: `Beautiful & luxurious apartment at great location`,
    price: `120`,
    type: `Apartment`,
    promoImage: `/img/apartment-01.jpg`,
    isPremium: Math.random() > 0.5,
    isFavorite: Math.random() > 0.5,
    rating: getRandomRating(),
    images: [
      `/img/room.jpg`,
      `/img/apartment-01.jpg`,
      `/img/apartment-02.jpg`,
      `/img/apartment-03.jpg`,
      `/img/studio-01.jpg`,
      `/img/apartment-01.jpg`,
    ],
    roomsCount: Math.ceil(Math.random() * MAX_ROOMS_QUANTITY),
    guestsCount: Math.ceil(Math.random() * MAX_GUESTS_QUANTITY),
    features,
    owner: {
      name: `Angelina`,
      avatar: `/img/avatar-angelina.jpg`,
      description: [
        `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.`,
        `An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.`
      ],
      isPro: Math.random() > 0.5
    },
    reviews: getRandomArray(reviews),
  },
  {
    id: ID_PREFIX + nanoid(10),
    coords: {
      latitude: 52.369553943508,
      longitude: 4.84309666406198,
      zoom: 8
    },
    city: {
      coords: {
        latitude: 52.370216,
        longitude: 4.895168,
        zoom: 10
      },
      name: `Amsterdam`,
    },
    title: `Wood and stone place`,
    price: `80`,
    type: `Private room`,
    promoImage: `/img/room.jpg`,
    isPremium: Math.random() > 0.5,
    isFavorite: Math.random() > 0.5,
    rating: getRandomRating(),
    images: [
      `/img/apartment-01.jpg`,
      `/img/apartment-02.jpg`,
      `/img/room.jpg`,
      `/img/studio-01.jpg`,
    ],
    roomsCount: Math.ceil(Math.random() * MAX_ROOMS_QUANTITY),
    guestsCount: Math.ceil(Math.random() * MAX_GUESTS_QUANTITY),
    features: getRandomArray(features),
    owner: {
      name: `Angelina 2`,
      avatar: `/img/avatar-angelina.jpg`,
      description: [
        `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.`,
      ],
      isPro: Math.random() > 0.5
    },
    reviews: getRandomArray(reviews),
  },
  {
    id: ID_PREFIX + nanoid(10),
    coords: {
      latitude: 52.3909553943508,
      longitude: 4.929309666406198,
      zoom: 8
    },
    city: {
      coords: {
        latitude: 52.370216,
        longitude: 4.895168,
        zoom: 10
      },
      name: `Cologne`,
    },
    title: `Canal View Prinsengracht`,
    price: `132`,
    type: `Apartment`,
    promoImage: `/img/apartment-02.jpg`,
    isPremium: Math.random() > 0.5,
    isFavorite: Math.random() > 0.5,
    rating: getRandomRating(),
    images: [
      `/img/room.jpg`,
      `/img/apartment-01.jpg`,
      `/img/apartment-02.jpg`,
      `/img/apartment-03.jpg`,
      `/img/studio-01.jpg`,
      `/img/apartment-01.jpg`,
    ],
    roomsCount: Math.ceil(Math.random() * MAX_ROOMS_QUANTITY),
    guestsCount: Math.ceil(Math.random() * MAX_GUESTS_QUANTITY),
    features: getRandomArray(features),
    owner: {
      name: `Angelina 3`,
      avatar: `/img/avatar-angelina.jpg`,
      description: [
        `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.`,
        `An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.`
      ],
      isPro: Math.random() > 0.5
    },
    reviews: getRandomArray(reviews),
  },
  {
    id: ID_PREFIX + nanoid(10),
    coords: {
      latitude: 52.3809553943508,
      longitude: 4.939309666406198,
      zoom: 8
    },
    city: {
      coords: {
        latitude: 52.370216,
        longitude: 4.895168,
        zoom: 10
      },
      name: `Brussels`,
    },
    title: `Nice, cozy, warm big bed apartment`,
    price: `180`,
    type: `Apartment`,
    promoImage: `/img/apartment-03.jpg`,
    isPremium: Math.random() > 0.5,
    isFavorite: Math.random() > 0.5,
    rating: getRandomRating(),
    images: [
      `/img/room.jpg`,
      `/img/apartment-01.jpg`,
      `/img/apartment-02.jpg`,
      `/img/apartment-03.jpg`,
      `/img/studio-01.jpg`,
      `/img/apartment-01.jpg`,
    ],
    roomsCount: Math.ceil(Math.random() * MAX_ROOMS_QUANTITY),
    guestsCount: Math.ceil(Math.random() * MAX_GUESTS_QUANTITY),
    features: getRandomArray(features),
    owner: {
      name: `Angelina 4`,
      avatar: `/img/avatar-angelina.jpg`,
      description: [
        `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.`,
        `An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.`
      ],
      isPro: Math.random() > 0.5
    },
    reviews: getRandomArray(reviews),
  },
  {
    id: ID_PREFIX + nanoid(10),
    coords: {
      latitude: 52.5909553943508,
      longitude: 4.85309666406198,
      zoom: 8
    },
    city: {
      coords: {
        latitude: 52.370216,
        longitude: 4.895168,
        zoom: 10
      },
      name: `Dusseldorf`,
    },
    title: `Beautiful & luxurious apartment at great location`,
    price: `120`,
    type: `Apartment`,
    promoImage: `/img/apartment-01.jpg`,
    isPremium: Math.random() > 0.5,
    isFavorite: Math.random() > 0.5,
    rating: getRandomRating(),
    images: [
      `/img/room.jpg`,
      `/img/apartment-01.jpg`,
      `/img/apartment-02.jpg`,
      `/img/apartment-03.jpg`,
      `/img/studio-01.jpg`,
      `/img/apartment-01.jpg`,
    ],
    roomsCount: Math.ceil(Math.random() * MAX_ROOMS_QUANTITY),
    guestsCount: Math.ceil(Math.random() * MAX_GUESTS_QUANTITY),
    features,
    owner: {
      name: `Angelina`,
      avatar: `/img/avatar-angelina.jpg`,
      description: [
        `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.`,
        `An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.`
      ],
      isPro: Math.random() > 0.5
    },
    reviews: getRandomArray(reviews),
  },
  {
    id: ID_PREFIX + nanoid(10),
    coords: {
      latitude: 52.469553943508,
      longitude: 4.85309666406198,
      zoom: 8
    },
    city: {
      coords: {
        latitude: 52.370216,
        longitude: 4.895168,
        zoom: 10
      },
      name: `Paris`,
    },
    title: `Wood and stone place`,
    price: `80`,
    type: `Private room`,
    promoImage: `/img/room.jpg`,
    isPremium: Math.random() > 0.5,
    isFavorite: Math.random() > 0.5,
    rating: getRandomRating(),
    images: [
      `/img/apartment-01.jpg`,
      `/img/apartment-02.jpg`,
      `/img/room.jpg`,
      `/img/studio-01.jpg`,
    ],
    roomsCount: Math.ceil(Math.random() * MAX_ROOMS_QUANTITY),
    guestsCount: Math.ceil(Math.random() * MAX_GUESTS_QUANTITY),
    features: getRandomArray(features),
    owner: {
      name: `Angelina 2`,
      avatar: `/img/avatar-angelina.jpg`,
      description: [
        `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.`,
      ],
      isPro: Math.random() > 0.5
    },
    reviews: getRandomArray(reviews),
  },
  {
    id: ID_PREFIX + nanoid(10),
    coords: {
      latitude: 52.3709553943508,
      longitude: 4.929309666406198,
      zoom: 8
    },
    city: {
      coords: {
        latitude: 52.370216,
        longitude: 4.895168,
        zoom: 10
      },
      name: `Amsterdam`,
    },
    title: `Canal View Prinsengracht`,
    price: `132`,
    type: `Apartment`,
    promoImage: `/img/apartment-02.jpg`,
    isPremium: Math.random() > 0.5,
    isFavorite: Math.random() > 0.5,
    rating: getRandomRating(),
    images: [
      `/img/room.jpg`,
      `/img/apartment-01.jpg`,
      `/img/apartment-02.jpg`,
      `/img/apartment-03.jpg`,
      `/img/studio-01.jpg`,
      `/img/apartment-01.jpg`,
    ],
    roomsCount: Math.ceil(Math.random() * MAX_ROOMS_QUANTITY),
    guestsCount: Math.ceil(Math.random() * MAX_GUESTS_QUANTITY),
    features: getRandomArray(features),
    owner: {
      name: `Angelina 3`,
      avatar: `/img/avatar-angelina.jpg`,
      description: [
        `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.`,
        `An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.`
      ],
      isPro: Math.random() > 0.5
    },
    reviews: getRandomArray(reviews),
  },
  {
    id: ID_PREFIX + nanoid(10),
    coords: {
      latitude: 52.4009553943508,
      longitude: 4.939309666406198,
      zoom: 8
    },
    city: {
      coords: {
        latitude: 52.370216,
        longitude: 4.895168,
        zoom: 10
      },
      name: `Amsterdam`,
    },
    title: `Nice, cozy, warm big bed apartment`,
    price: `180`,
    type: `Apartment`,
    promoImage: `/img/apartment-03.jpg`,
    isPremium: Math.random() > 0.5,
    isFavorite: Math.random() > 0.5,
    rating: getRandomRating(),
    images: [
      `/img/room.jpg`,
      `/img/apartment-01.jpg`,
      `/img/apartment-02.jpg`,
      `/img/apartment-03.jpg`,
      `/img/studio-01.jpg`,
      `/img/apartment-01.jpg`,
    ],
    roomsCount: Math.ceil(Math.random() * MAX_ROOMS_QUANTITY),
    guestsCount: Math.ceil(Math.random() * MAX_GUESTS_QUANTITY),
    features: getRandomArray(features),
    owner: {
      name: `Angelina 4`,
      avatar: `/img/avatar-angelina.jpg`,
      description: [
        `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.`,
        `An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.`
      ],
      isPro: Math.random() > 0.5
    },
    reviews: getRandomArray(reviews),
  }
];

export default offers;
