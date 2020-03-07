import React from "react";
import renderer from "react-test-renderer";
import ReviewsList from './reviews-list.jsx';

const mockDate = new Date(1583591483969).valueOf();

const mocks = [
  {
    id: 1,
    name: `Max`,
    avatar: `img/avatar-max.jpg`,
    rating: 1.5,
    description: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.`,
    date: mockDate
  },
  {
    id: 2,
    name: `Alexey`,
    avatar: `img/avatar-max.jpg`,
    rating: 0.5,
    description: `The building is green and from 18th century.`,
    date: mockDate
  },
  {
    id: 3,
    name: `Anastasia`,
    avatar: `img/avatar-max.jpg`,
    rating: 4.5,
    description: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.`,
    date: mockDate
  }];

it(`Should ReviewsList component render correctly`, () => {
  const tree = renderer
    .create(<ReviewsList
      reviews={mocks}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
