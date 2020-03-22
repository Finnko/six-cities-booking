import React from "react";
import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import OffersCard from "./offers-card.jsx";

Enzyme.configure({
  adapter: new Adapter(),
});

const mockDate = new Date(1583591483969).valueOf();
const mock = {
  id: `id_11`,
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

describe(`Test e2e OffersCard component`, () => {
  const onCardMouseEnter = jest.fn();

  const offersCard = shallow(
      <OffersCard offer={mock} isNearByView={false} onCardMouseEnter={onCardMouseEnter}/>
  );

  const offer = offersCard.find(`.place-card`);

  it(`Should OffersCard info passed correctly on hover`, () => {
    offer.simulate(`mouseenter`);
    expect(onCardMouseEnter).toHaveBeenCalledWith(mock);
  });
});
