import React from 'react';
import renderer from 'react-test-renderer';
import MainEmpty from './main-empty.jsx';

const props = {
  currentCity: {
    coords: {
      latitude: 52.370216,
      longitude: 4.895168,
      zoom: 10
    },
    name: `Amsterdam`,
  },
};

it(`Should MainEmpty render correctly`, () => {
  const tree = renderer.create(
      <MainEmpty {...props}/>).toJSON();
  expect(tree).toMatchSnapshot();
});
