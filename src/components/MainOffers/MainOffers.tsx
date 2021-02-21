import React from 'react';

import { IOffer } from '../../interfaces/offer';
import Map from '../Map/Map';
import OffersList from '../OffersList/OffersList';
import OffersSort from '../OffersSort/OffersSort';

interface MainOffersProps {
  offers: IOffer[];
}

const MainOffers: React.FC<MainOffersProps> = ({offers}) => (
    <div className="cities">
      <div className="cities__places-container container">
        <section className="cities__places places">
          <h2 className="visually-hidden">Places</h2>
          <b className="places__found">{offers.length} places to stay in</b>
          <OffersSort />
          <OffersList offers={offers} />
        </section>
        <Map />
      </div>
    </div>
  );

export default MainOffers;
