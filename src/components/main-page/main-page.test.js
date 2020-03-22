import React from "react";
import renderer from "react-test-renderer";
import {MainPage} from './main-page.jsx';
import {features, SortType} from '../../const';
import configureStore from 'redux-mock-store';
import {Provider} from 'react-redux';
import {BrowserRouter} from 'react-router-dom';
import NameSpace from '../../store/name-space';

const mockDate = new Date(1583591483969).valueOf();
const mocks = [
  {
    id: `id_11`,
    coords: {
      latitude: 52.3909553943508,
      longitude: 4.86309666406198,
      zoom: 8
    },
    city: {
      coords: {
        latitude: 52.370216,
        longitude: 4.895168,
        zoom: 10
      },
      name: `Amsterdam`,
    },
    title: `Beautiful & luxurious apartment at great location`,
    price: `120`,
    type: `Apartment`,
    promoImage: `/img/apartment-01.jpg`,
    isPremium: true,
    isFavorite: true,
    rating: 1.5,
    images: [
      `/img/room.jpg`,
      `/img/apartment-01.jpg`,
      `/img/apartment-02.jpg`,
      `/img/apartment-03.jpg`,
      `/img/studio-01.jpg`,
      `/img/apartment-01.jpg`,
    ],
    roomsCount: 2,
    guestsCount: 3,
    features,
    owner: {
      name: `Angelina`,
      avatar: `/img/avatar-angelina.jpg`,
      description: [
        `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.`,
        `An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.`
      ],
      isPro: true
    },
    reviews: [
      {
        id: 1,
        name: `Max`,
        avatar: `/img/avatar-max.jpg`,
        rating: 1.5,
        description: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.`,
        date: mockDate
      },
      {
        id: 2,
        name: `Alexey`,
        avatar: `/img/avatar-max.jpg`,
        rating: 0.5,
        description: `The building is green and from 18th century.`,
        date: mockDate
      },
      {
        id: 3,
        name: `Anastasia`,
        avatar: `/img/avatar-max.jpg`,
        rating: 4.5,
        description: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.`,
        date: mockDate
      }]
  },
  {
    id: `id_12`,
    coords: {
      latitude: 52.3809553943508,
      longitude: 4.939309666406198,
      zoom: 8
    },
    city: {
      coords: {
        latitude: 52.370216,
        longitude: 4.895168,
        zoom: 10
      },
      name: `Brussels`,
    },
    title: `Beautiful & luxurious apartment at great location`,
    price: `70`,
    type: `Apartment`,
    promoImage: `/img/apartment-01.jpg`,
    isPremium: false,
    isFavorite: false,
    rating: 3.5,
    images: [
      `/img/room.jpg`,
      `/img/apartment-01.jpg`,
      `/img/apartment-02.jpg`,
    ],
    roomsCount: 1,
    guestsCount: 2,
    features,
    owner: {
      name: `Angelina 2`,
      avatar: `/img/avatar-angelina.jpg`,
      description: [
        `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.`,
        `An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.`
      ],
      isPro: true
    },
    reviews: [
      {
        id: 1,
        name: `Max`,
        avatar: `/img/avatar-max.jpg`,
        rating: 1.5,
        description: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.`,
        date: mockDate
      },
      {
        id: 3,
        name: `Anastasia`,
        avatar: `/img/avatar-max.jpg`,
        rating: 4.5,
        description: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.`,
        date: mockDate
      }]
  },
  {
    id: `id_13`,
    coords: {
      latitude: 52.3709553943508,
      longitude: 4.929309666406198,
      zoom: 8
    },
    city: {
      coords: {
        latitude: 52.370216,
        longitude: 4.895168,
        zoom: 10
      },
      name: `Hamburg`,
    },
    title: `Beautiful & luxurious apartment at great location`,
    price: `125`,
    type: `Apartment`,
    promoImage: `/img/apartment-01.jpg`,
    isPremium: true,
    isFavorite: false,
    rating: 4.5,
    images: [
      `/img/room.jpg`,
      `/img/apartment-01.jpg`,
      `/img/apartment-02.jpg`,
      `/img/apartment-03.jpg`,
      `/img/studio-01.jpg`,
      `/img/apartment-01.jpg`,
    ],
    roomsCount: 3,
    guestsCount: 2,
    features,
    owner: {
      name: `Angelina 3`,
      avatar: `/img/avatar-angelina.jpg`,
      description: [
        `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.`,
        `An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.`
      ],
      isPro: false
    },
    reviews: [
      {
        id: 1,
        name: `Max`,
        avatar: `/img/avatar-max.jpg`,
        rating: 1.5,
        description: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.`,
        date: mockDate
      }]
  },
];

const mockStore = configureStore([]);

const store = mockStore({
  [NameSpace.DATA]: {
    offers: mocks,
    currentCity: mocks[0].city,
    cities: [`Amsterdam`, `Brussels`, `Hamburg`],
    currentOffers: [mocks[0]],
    sortType: SortType.POPULAR
  }
});

const props = {
  cities: [`Amsterdam`, `Brussels`, `Hamburg`],
  currentCity: mocks[0].city,
  currentOffers: [mocks[0]],
  onChangeCity: () => {},
  sortType: SortType.POPULAR,
  onSortTypeChange: () => {}
};

it(`Should MainPage component render correctly`, () => {
  const tree = renderer
    .create(
        <Provider store={store}>
          <BrowserRouter>
            <MainPage {...props}/>
          </BrowserRouter>
        </Provider>, {
          createNodeMock: () => {
            return document.createElement(`div`);
          },
        }).toJSON();

  expect(tree).toMatchSnapshot();
});
