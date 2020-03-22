import React from "react";
import renderer from "react-test-renderer";
import Review from './review.jsx';

const mockDate = new Date(1583591483969).valueOf();

const mock = {
  id: 11,
  name: `Alexey`,
  avatar: `img/avatar-max.jpg`,
  rating: 5,
  description: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.`,
  date: mockDate
};


it(`Should Review component render correctly`, () => {
  const tree = renderer
    .create(<Review
      review={mock}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
