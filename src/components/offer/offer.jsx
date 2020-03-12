import React, {Fragment} from 'react';
import PropTypes from 'prop-types';
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
  offer: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
    promoImage: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    isPremium: PropTypes.bool.isRequired,
    roomsCount: PropTypes.number.isRequired,
    guestsCount: PropTypes.number.isRequired,
    features: PropTypes.arrayOf(PropTypes.string).isRequired,
    owner: PropTypes.shape({
      name: PropTypes.string.isRequired,
      avatar: PropTypes.string.isRequired,
      description: PropTypes.arrayOf(PropTypes.string).isRequired,
      isPro: PropTypes.bool.isRequired
    }).isRequired,
  }).isRequired,
};

export default Offer;
