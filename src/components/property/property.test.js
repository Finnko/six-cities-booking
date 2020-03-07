import React from "react";
import renderer from "react-test-renderer";
import Property from "./property.jsx";
import {FEATURES} from '../../const';

const mock = {
  id: `id_11`,
  title: `Beautiful & luxurious apartment at great location`,
  price: `120`,
  type: `Apartment`,
  promoImage: `img/apartment-01.jpg`,
  isPremium: true,
  rating: 2.5,
  images: [
    `img/room.jpg`,
    `img/apartment-01.jpg`,
    `img/apartment-01.jpg`,
  ],
  roomsCount: 2,
  guestsCount: 4,
  features: [`Wi-Fi`, `Baby seat`, `Cabel TV`, `Fridge`],
  owner: {
    name: `Dominika`,
    avatar: `img/avatar-angelina.jpg`,
    description: [`A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.`],
    isPro: true
  }
};

const mockDate = new Date(1583591483969).valueOf();

const reviewMocks = [
  {
    id: 1,
    name: `Max`,
    avatar: `img/avatar-max.jpg`,
    rating: 1.5,
    description: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.`,
    date: mockDate
  },
  {
    id: 2,
    name: `Alexey`,
    avatar: `img/avatar-max.jpg`,
    rating: 0.5,
    description: `The building is green and from 18th century.`,
    date: mockDate
  },
  {
    id: 3,
    name: `Anastasia`,
    avatar: `img/avatar-max.jpg`,
    rating: 4.5,
    description: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.`,
    date: mockDate
  }];

const nearByOfferMocks = [
  {
    id: `id_11`,
    title: `Beautiful & luxurious apartment at great location`,
    price: `120`,
    type: `Apartment`,
    promoImage: `img/apartment-01.jpg`,
    isPremium: true,
    rating: 1.5,
    images: [
      `img/room.jpg`,
      `img/apartment-01.jpg`,
      `img/apartment-02.jpg`,
      `img/apartment-03.jpg`,
      `img/studio-01.jpg`,
      `img/apartment-01.jpg`,
    ],
    roomsCount: 2,
    guestsCount: 3,
    features: FEATURES,
    coords: [52.3909553943508, 4.85309666406198],
    owner: {
      name: `Angelina`,
      avatar: `img/avatar-angelina.jpg`,
      description: [
        `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.`,
        `An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.`
      ],
      isPro: true
    }
  },
  {
    id: `id_12`,
    title: `Beautiful & luxurious apartment at great location`,
    price: `70`,
    type: `Apartment`,
    promoImage: `img/apartment-01.jpg`,
    isPremium: false,
    rating: 3.5,
    images: [
      `img/room.jpg`,
      `img/apartment-01.jpg`,
      `img/apartment-02.jpg`,
    ],
    roomsCount: 1,
    guestsCount: 2,
    features: FEATURES,
    coords: [52.3909553943508, 4.86309666406198],
    owner: {
      name: `Angelina 2`,
      avatar: `img/avatar-angelina.jpg`,
      description: [
        `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.`,
        `An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.`
      ],
      isPro: true
    }
  },
  {
    id: `id_13`,
    title: `Beautiful & luxurious apartment at great location`,
    price: `125`,
    type: `Apartment`,
    promoImage: `img/apartment-01.jpg`,
    isPremium: true,
    rating: 4.5,
    images: [
      `img/room.jpg`,
      `img/apartment-01.jpg`,
      `img/apartment-02.jpg`,
      `img/apartment-03.jpg`,
      `img/studio-01.jpg`,
      `img/apartment-01.jpg`,
    ],
    roomsCount: 3,
    guestsCount: 2,
    features: FEATURES,
    coords: [52.3909553943508, 4.84309666406198],
    owner: {
      name: `Angelina 3`,
      avatar: `img/avatar-angelina.jpg`,
      description: [
        `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.`,
        `An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.`
      ],
      isPro: false
    }
  },
];

it(`Should Property component render correctly`, () => {

  const tree = renderer.create(<Property
    offer={mock}
    reviews={reviewMocks}
    nearByOffers={nearByOfferMocks}
    onOfferTitleClick={() => { }}
  />).toJSON();

  expect(tree).toMatchSnapshot();
});