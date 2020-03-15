import React from 'react';
import renderer from 'react-test-renderer';
import CitiesList from './cities-list.jsx';

const props = {
  cities: [`Amsterdam`, `Cologne`, `Brussels`, `Dusseldorf`],
  chosenCity: `Amsterdam`,
  onChangeCity: () => {}
};

it(`Should CitiesList render correctly`, () => {
  const tree = renderer.create(
      <CitiesList {...props}/>).toJSON();
  expect(tree).toMatchSnapshot();
});
