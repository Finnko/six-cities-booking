import React from "react";
import renderer from "react-test-renderer";
import OffersList from './offers-list.jsx';

const mock = [
  {title: `Beautiful & luxurious apartment at great location`}
];

it(`Should OffersList component render correctly`, () => {
  const tree = renderer
    .create(<OffersList
      placesCards={mock}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
