import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import {getRatingPercentage} from '../../utils';

const OffersCard = ({offer, isNearByView, onCardClick, onCardMouseEnter, onCardMouseLeave}) => {
  const {id, title, type, price, promoImage, rating, isPremium} = offer;

  const handleTitleClick = () => onCardClick(offer);
  const handleMouseEnter = () => onCardMouseEnter(offer);
  const handleMouseLeave = () => onCardMouseLeave();

  const premium = !isPremium ? `` : (
    <div className="place-card__mark">
      <span>Premium</span>
    </div>);

  const ratingPercent = getRatingPercentage(rating);

  return (
    <article
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`place-card ${isNearByView ? `near-places__card` : `cities__place-card`}`}
    >
      {premium}
      <div className={`place-card__image-wrapper ${isNearByView ? `near-places__image-wrapper` : `cities__image-wrapper`}`}>
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
          {/*<Link to={`/offer/${id}`} />*/}
          <a href="#" onClick={handleTitleClick}>{title}</a>
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
  isNearByView: PropTypes.bool.isRequired,
  offer: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
    promoImage: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    isPremium: PropTypes.bool.isRequired,
  }).isRequired,
};

export default OffersCard;
