import React, { memo } from 'react';

import { IOffer } from '../../interfaces/offer';
import OfferCard from '../OfferCard/OfferCard';

interface ListProps {
  offers: IOffer[];
}

const OffersList: React.FC<ListProps> = ({offers}) => (
    <div className="places__list cities__places-list tabs__content">
      {offers.map(offer =>
        <OfferCard
          key={offer.id}
          id={offer.id}
          title={offer.title}
          type={offer.type}
          price={offer.price}
          previewImage={offer.previewImage}
          rating={offer.rating}
          isPremium={offer.isPremium}
          isFavorite={offer.isFavorite}
        />)}
    </div>
  );

export default memo(OffersList);
