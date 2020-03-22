import React from 'react';
import renderer from 'react-test-renderer';
import {OffersSorting} from './offers-sorting.jsx';
import {Provider} from 'react-redux';
import configureStore from 'redux-mock-store';
import {SortType} from '../../const';
import NameSpace from '../../store/name-space';

const mockStore = configureStore([]);

const store = mockStore({
  [NameSpace.DATA]: {
    sortType: SortType.POPULAR,
  }
});

const props = {
  activeSortType: `Popular`,
  onSortTypeChange: () => {}
};

it(`Should OffersSorting component render correctly`, () => {
  const tree = renderer
    .create(
        <Provider store={store}>
          <OffersSorting {...props}/>
        </Provider>, {
          createNodeMock: () => {
            return document.createElement(`div`);
          },
        }).toJSON();

  expect(tree).toMatchSnapshot();
});
