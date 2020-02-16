import React from "react";
import renderer from "react-test-renderer";
import CityPlace from './city-place.jsx';

const mockTitle = `Beautiful & luxurious apartment at great location`;

it(`Should CityPlace component render correctly`, () => {
  const tree = renderer
    .create(<CityPlace
      title={mockTitle}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
