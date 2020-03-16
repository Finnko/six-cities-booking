import React from 'react';
import renderer from 'react-test-renderer';
import OffersSorting from './offers-sorting';

const props = {
  activeSortType: `Popular`,
  isActive: false,
  onActiveChange: () => {},
  onSortTypeChange: () => {}
};

it(`Should OffersSorting render correctly`, () => {
  const tree = renderer.create(
      <OffersSorting {...props}/>).toJSON();
  expect(tree).toMatchSnapshot();
});
