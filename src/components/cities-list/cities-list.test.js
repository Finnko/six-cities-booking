import React from 'react';
import renderer from 'react-test-renderer';
import CitiesList from './cities-list.jsx';

const props = {
  cities: [`Amsterdam`, `Brussels`, `Hamburg`],
  currentCity: {
    coords: {
      latitude: 52.370216,
      longitude: 4.895168,
      zoom: 10
    },
    name: `Amsterdam`,
  },
  onChangeCity: () => {}
};

it(`Should CitiesList render correctly`, () => {
  const tree = renderer.create(
      <CitiesList {...props}/>).toJSON();
  expect(tree).toMatchSnapshot();
});
