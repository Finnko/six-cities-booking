import React from 'react';
import PropTypes from 'prop-types';
import {getRatingPercentage} from '../../utils';

const OffersCard = ({offer, onCardClick, onCardMouseEnter, onCardMouseLeave}) => {
  const {title, type, price, promoImage, rating, isPremium} = offer;

  const premium = !isPremium ? `` : (
    <div className="place-card__mark">
      <span>Premium</span>
    </div>);

  const ratingPercent = getRatingPercentage(rating);

  return (
    <article
      onMouseEnter={onCardMouseEnter}
      onMouseLeave={onCardMouseLeave}
      className="cities__place-card place-card"
    >
      {premium}
      <div className="cities__image-wrapper place-card__image-wrapper">
        <a href="#">
          <img className="place-card__image" src={promoImage} width={260} height={200} alt="Place image" />
        </a>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">€{price}</b>
            <span className="place-card__price-text">/&nbsp;night</span>
          </div>
          <button className="place-card__bookmark-button button" type="button">
            <svg className="place-card__bookmark-icon" width={18} height={19}>
              <use xlinkHref="#icon-bookmark" />
            </svg>
            <span className="visually-hidden">To bookmarks</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{width: `${ratingPercent}%`}} />
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <a href="#" onClick={onCardClick}>{title}</a>
        </h2>
        <p className="place-card__type">{type}</p>
      </div>
    </article>
  );
};

OffersCard.propTypes = {
  onCardClick: PropTypes.func,
  onCardMouseEnter: PropTypes.func,
  onCardMouseLeave: PropTypes.func,
  offer: PropTypes.shape({
    id: PropTypes.string,
    title: PropTypes.string,
    type: PropTypes.string,
    rating: PropTypes.number,
    promoImage: PropTypes.string,
    price: PropTypes.string,
    isPremium: PropTypes.bool,
  }).isRequired,
};

export default OffersCard;
