import React from "react";
import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import OffersCard from "./offers-card.jsx";

Enzyme.configure({
  adapter: new Adapter(),
});

const mockOffer = {
  id: `id_11`,
  title: `Beautiful & luxurious apartment at great location`,
  price: `120`,
  type: `Apartment`,
  promoImage: `img/apartment-01.jpg`,
  isPremium: true,
  rating: 3.5
};

describe(`Test e2e OffersCard component`, () => {
  const onCardClick = jest.fn();
  const onCardMouseEnter = jest.fn();

  const offersCard = shallow(
      <OffersCard offer={mockOffer} isNearByView={false} onCardClick={onCardClick} onCardMouseEnter={onCardMouseEnter}/>
  );

  const offersCardHeader = offersCard.find(`.place-card__name a`);
  const offer = offersCard.find(`.place-card`);

  it(`Should OffersCard be pressed correctly`, () => {
    offersCardHeader.simulate(`click`);
    expect(onCardClick).toHaveBeenCalledTimes(1);
  });

  it(`Should OffersCard info passed correctly on hover`, () => {
    offer.simulate(`mouseenter`);
    expect(onCardMouseEnter.mock.calls[0][0].id).toBe(mockOffer.id);
  });
});
