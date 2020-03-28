import dataReducer from './data-reducer';
import {actionTypes} from '../../actions/action-types';
import {SortType} from '../../../const';

const initialState = {
  offers: [],
  currentOffers: [],
  currentCity: ``,
  cities: [],
};

describe(`Data Reducer works correctly`, () => {
  it(`Reducer without additional parameters should return initial state`, () => {
    expect(dataReducer(initialState, {type: undefined})).toEqual(initialState);
  });

  it(`Reducer should correctly change city according to the given value`, () => {
    expect(dataReducer({
      currentCity: `Amsterdam`,
      cities: [`Amsterdam`, `Brussels`],
    }, {
      type: actionTypes.CHANGE_CITY,
      payload: `Brussels`,
    })).toEqual({
      currentCity: `Brussels`,
      cities: [`Amsterdam`, `Brussels`],
    });
  });

  it(`Reducer should correctly change sorting type according to the given value`, () => {
    expect(dataReducer({
      sortType: SortType.POPULAR,
    }, {
      type: actionTypes.CHANGE_SORTING_TYPE,
      payload: SortType.TOPRATED,
    })).toEqual({
      sortType: SortType.TOPRATED,
    });
  });
});
