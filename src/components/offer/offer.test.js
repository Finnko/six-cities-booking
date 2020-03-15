import React from "react";
import renderer from "react-test-renderer";
import Offer from './offer';

const mockDate = new Date(1583591483969).valueOf();
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
  },
  reviews: [
    {
      id: 1,
      name: `Max`,
      avatar: `/img/avatar-max.jpg`,
      rating: 1.5,
      description: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.`,
      date: mockDate
    },
    {
      id: 2,
      name: `Alexey`,
      avatar: `/img/avatar-max.jpg`,
      rating: 0.5,
      description: `The building is green and from 18th century.`,
      date: mockDate
    },
    {
      id: 3,
      name: `Anastasia`,
      avatar: `/img/avatar-max.jpg`,
      rating: 4.5,
      description: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.`,
      date: mockDate
    }]
};


it(`Should Offer component render correctly`, () => {
  const tree = renderer
    .create(<Offer
      offer={mock}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
