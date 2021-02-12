import {actionTypes} from './action-types';
import {ActionCreator} from './action-creator';

describe(`Test ActionCreator works correctly`, () => {
  it(`ActionCreator.changeCity should return a right action`, () => {
    expect(ActionCreator.changeCity(`Moscow`)).toEqual({type: actionTypes.CHANGE_CITY, payload: `Moscow`});
  });
});
