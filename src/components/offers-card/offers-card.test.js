import React from "react";
import renderer from "react-test-renderer";
import OffersCard from './offers-card.jsx';

const mock = {
  id: `id_11`,
  title: `Beautiful & luxurious apartment at great location`,
  price: `120`,
  type: `Apartment`,
  promoImage: `img/apartment-01.jpg`,
  isPremium: true,
  rating: 3.5
};

it(`Should OffersCard component render correctly`, () => {
  const tree = renderer
    .create(<OffersCard
      offer={mock}
      onCardClick={() => {}}
      onCardMouseEnter={() => {}}
      onCardMouseLeave={() => {}}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
