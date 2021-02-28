import React from 'react';

import { IOffer } from '../../interfaces/offer';
import { getRatingPercentage } from '../../utils/common';

interface OfferProps {
  offer: IOffer;
}

const Offer: React.FC<OfferProps> = ({ offer }) => {
  const {
    title,
    type,
    price,
    isPremium,
    rating,
    bedrooms,
    maxAdults,
    goods,
    description,
    host: {
      name,
      avatarUrl,
      isPro
    }
  } = offer;

  const premium = isPremium ? (
    <div className="property__mark">
      <span>Premium</span>
    </div>) : null;

  const ratingPercent = getRatingPercentage(rating);

  return (
    <>
      {premium}
      <div className="property__name-wrapper">
        <h1 className="property__name">
          {title}
        </h1>
        <button className="property__bookmark-button button" type="button">
          <svg className="property__bookmark-icon" width="31" height="33">
            <use xlinkHref="#icon-bookmark"/>
          </svg>
          <span className="visually-hidden">To bookmarks</span>
        </button>
      </div>
      <div className="property__rating rating">
        <div className="property__stars rating__stars">
          <span style={{width: `${ratingPercent}%`}} />
          <span className="visually-hidden">Rating</span>
        </div>
        <span className="property__rating-value rating__value">{rating}</span>
      </div>
      <ul className="property__features">
        <li className="property__feature property__feature--entire">
          {type}
        </li>
        <li className="property__feature property__feature--bedrooms">
          {bedrooms} Bedrooms
        </li>
        <li className="property__feature property__feature--adults">
          Max {maxAdults} adults
        </li>
      </ul>
      <div className="property__price">
        <b className="property__price-value">&euro;{price}</b>
        <span className="property__price-text">&nbsp;night</span>
      </div>
      <div className="property__inside">
        <h2 className="property__inside-title">What&apos;s inside</h2>
        <ul className="property__inside-list">
          {goods.map((good, index) => (
            <li key={good + index} className="property__inside-item">{good}</li>
          ))}
        </ul>
      </div>
      <div className="property__host">
        <h2 className="property__host-title">Meet the host</h2>
        <div className="property__host-user user">
          <div className={`property__avatar-wrapper user__avatar-wrapper ${isPro ? 'property__avatar-wrapper--pro' : ''} `}>
            <img className="property__avatar user__avatar" src={`/${avatarUrl}`} width="74" height="74" alt="Host avatar"/>
          </div>
          <span className="property__user-name">
            {name}
          </span>
        </div>
        <div className="property__description">
          <p className="property__text">
            {description}
          </p>
        </div>
      </div>
    </>
  );
};

export default Offer;
