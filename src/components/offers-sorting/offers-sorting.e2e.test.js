import React from "react";
import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import {sortTypes} from '../../const';
import {OffersSorting} from './offers-sorting.jsx';

Enzyme.configure({
  adapter: new Adapter(),
});

const props = {
  activeSortType: `Popular`,
  isActive: false,
  onActiveChange: jest.fn(),
  onSortTypeChange: jest.fn()
};

describe(`Test e2e OffersSorting component`, () => {
  const offersSorting = shallow(
      <OffersSorting {...props}/>
  );

  const sortType = offersSorting.find(`.places__option`).at(2);

  it(`Should OffersSorting be pressed correctly`, () => {
    sortType.simulate(`click`);
    expect(props.onSortTypeChange).toHaveBeenCalledTimes(1);
  });

  it(`Should OffersSorting sortType info passed correctly on click`, () => {
    sortType.simulate(`click`);
    expect(props.onSortTypeChange).toHaveBeenCalledWith(sortTypes[2]);
  });
});
