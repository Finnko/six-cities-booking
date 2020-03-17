import React from "react";
import renderer from "react-test-renderer";
import OfferGallery from './offer-gallery.jsx';

const mockImages = [
  `img/room.jpg`,
  `img/apartment-01.jpg`,
  `img/apartment-01.jpg`,
];

it(`Should OfferGallery component render correctly`, () => {
  const tree = renderer
    .create(<OfferGallery images={mockImages}/>).toJSON();

  expect(tree).toMatchSnapshot();
});
