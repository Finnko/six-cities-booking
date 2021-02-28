import cx from 'classnames';
import React, { memo } from 'react';

import { IOffer } from '../../interfaces/offer';
import OfferCard from '../OfferCard/OfferCard';

interface ListProps {
  offers: IOffer[];
  isNearByView?: boolean;
}

const OffersList: React.FC<ListProps> = ({offers, isNearByView = false}) => {
  const listCls = cx('places__list', {
    'cities__places-list': !isNearByView,
    'tabs__content': !isNearByView,
    'near-places__list': isNearByView,
  });

  return (
    <div className={listCls}>
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
          isNearByView={isNearByView}
        />)}
    </div>
  );
};

export default memo(OffersList);
