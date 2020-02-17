import React from "react";
import renderer from "react-test-renderer";
import OffersCard from './offers-card.jsx';

const mockTitle = `Beautiful & luxurious apartment at great location`;

it(`Should OffersCard component render correctly`, () => {
  const tree = renderer
    .create(<OffersCard
      title={mockTitle}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
