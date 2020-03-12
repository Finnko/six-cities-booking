import React from "react";
import renderer from "react-test-renderer";
import OffersList from './offers-list.jsx';

const mock = [{
  id: `id_11`,
  title: `Beautiful & luxurious apartment at great location`,
  price: `120`,
  type: `Apartment`,
  photo: `img/apartment-01.jpg`,
  isPremium: true
}];

it(`Should OffersList component render correctly`, () => {
  const tree = renderer
    .create(<OffersList
      offersCards={mock}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
