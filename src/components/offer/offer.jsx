import React from 'react';
import PropTypes from 'prop-types';
import {getRatingPercentage} from '../../utils';

const Offer = ({offer}) => {
  const {title, type, price, isPremium, rating, roomsCount, guestsCount, features, images} = offer;
  const {name, avatar, description, isPro} = offer.owner;

  const MAX_IMAGES_TO_DISPLAY = 6;

  const premium = !isPremium ? `` : (
    <div className="property__mark">
      <span>Premium</span>
    </div>);

  const displayedImages = images.slice(0, MAX_IMAGES_TO_DISPLAY);
  const ratingPercent = getRatingPercentage(rating);

  return (
    <section className="property">
      <div className="property__gallery-container container">
        <div className="property__gallery">
          {displayedImages.map((imageSrc, index) => (
            <div key={imageSrc + index} className="property__image-wrapper">
              <img className="property__image" src={imageSrc} alt="Photo studio" />
            </div>
          ))}
        </div>
      </div>
      <div className="property__container container">
        <div className="property__wrapper">
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
        </div>
      </div>
    </section>
  );
};

Offer.propTypes = {
  offer: PropTypes.shape({
    id: PropTypes.string,
    title: PropTypes.string,
    type: PropTypes.string,
    rating: PropTypes.number,
    promoImage: PropTypes.string,
    price: PropTypes.string,
    isPremium: PropTypes.bool,
    roomsCount: PropTypes.number,
    guestsCount: PropTypes.number,
    images: PropTypes.arrayOf(PropTypes.string),
    features: PropTypes.arrayOf(PropTypes.string),
    owner: PropTypes.shape({
      name: PropTypes.string,
      avatar: PropTypes.string,
      description: PropTypes.arrayOf(PropTypes.string),
      isPro: PropTypes.bool
    }),
  }).isRequired,
};

export default Offer;
