import React from 'react';
import renderer from 'react-test-renderer';
import {Provider} from 'react-redux';
import configureStore from 'redux-mock-store';
import {BrowserRouter} from 'react-router-dom';
import NameSpace from '../../store/name-space';
import {SignIn} from './sign-in';

const mock = [
  {
    id: `id_11`,
    city: {
      coords: {
        latitude: 52.370216,
        longitude: 4.895168,
        zoom: 10
      },
      name: `Amsterdam`,
    },
  },
];

const mockStore = configureStore([]);

const store = mockStore({
  [NameSpace.USER]: {
    isAuthorized: false,
  },
  [NameSpace.DATA]: {
    currentCity: mock[0].city,
  }
});

const props = {
  currentCity: mock[0].city,
  onFormSubmit: jest.fn(),
};

describe(`Should SignIn component render correctly`, () => {
  it(`should be rendered correctly`, () => {
    const tree = renderer.create(
        <Provider store={store}>
          <BrowserRouter>
            <SignIn {...props} />
          </BrowserRouter>
        </Provider>
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
