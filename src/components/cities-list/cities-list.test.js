import React from "react";
import renderer from "react-test-renderer";
import CitiesList from './cities-list.jsx';

const mock = [
  {title: `Beautiful & luxurious apartment at great location`}
];

it(`Should CitiesList component render correctly`, () => {
  const tree = renderer
    .create(<CitiesList
      placesCards={mock}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
