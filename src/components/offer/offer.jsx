import React, {Fragment} from 'react';
import OfferPropType from '../../prop-types/offer';
import {getRatingPercentage} from '../../utils';

const Offer = ({offer}) => {
  const {title, type, price, isPremium, rating, roomsCount, guestsCount, features} = offer;
  const {name, avatar, description, isPro} = offer.owner;

  const premium = !isPremium ? `` : (
    <div className="property__mark">
      <span>Premium</span>
    </div>);

  const ratingPercent = getRatingPercentage(rating);

  return (
    <Fragment>
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
          {roomsCount} Bedrooms
        </li>
        <li className="property__feature property__feature--adults">
          Max {guestsCount} adults
        </li>
      </ul>
      <div className="property__price">
        <b className="property__price-value">&euro;{price}</b>
        <span className="property__price-text">&nbsp;night</span>
      </div>
      <div className="property__inside">
        <h2 className="property__inside-title">What&apos;s inside</h2>
        <ul className="property__inside-list">
          {features.map((feature, index) => (
            <li key={feature + index} className="property__inside-item">{feature}</li>
          ))}
        </ul>
      </div>
      <div className="property__host">
        <h2 className="property__host-title">Meet the host</h2>
        <div className="property__host-user user">
          <div className={`property__avatar-wrapper user__avatar-wrapper ${isPro ? `property__avatar-wrapper--pro` : ``} `}>
            <img className="property__avatar user__avatar" src={avatar} width="74" height="74" alt="Host avatar"/>
          </div>
          <span className="property__user-name">
            {name}
          </span>
        </div>
        <div className="property__description">
          {description.map((paragraph, index) => (
            <p key={paragraph + index} className="property__text">{paragraph}</p>
          ))}
        </div>
      </div>
    </Fragment>
  );
};

Offer.propTypes = {
  offer: OfferPropType.isRequired,
};

export default Offer;
