import React from "react";
import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import CitiesList from './cities-list.jsx';

Enzyme.configure({
  adapter: new Adapter(),
});

const props = {
  cities: [`Amsterdam`, `Cologne`, `Brussels`, `Dusseldorf`],
  chosenCity: `Amsterdam`,
};

describe(`Test e2e CitiesList component`, () => {
  const onChangeCity = jest.fn();

  const citiesList = shallow(
      <CitiesList {...props} onChangeCity={onChangeCity}/>
  );

  const cityTab = citiesList.find(`.locations__item-link`).at(2);

  it(`Should OffersCard be pressed correctly`, () => {
    cityTab.simulate(`click`, {preventDefault: () => {}});
    expect(onChangeCity).toHaveBeenCalledTimes(1);
  });

  it(`Should OffersCard info passed correctly on hover`, () => {
    cityTab.simulate(`click`, {preventDefault: () => {}});
    expect(onChangeCity).toHaveBeenCalledWith(props.cities[2]);
  });
});
