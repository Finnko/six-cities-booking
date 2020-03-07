import React from 'react';
import renderer from 'react-test-renderer';
import Map from './map.jsx';

const mocks = [
  {
    coords: [52.38533, 4.89],
  }
];

it(`<Map /> should be render correctly`, () => {
  const map = renderer.create(<Map offers={mocks} isNearByView={false}/>, {
    createNodeMock: () => {
      return document.createElement(`div`);
    }
  }).toJSON();

  expect(map).toMatchSnapshot();
});
