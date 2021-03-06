import cx from 'classnames';
import React, { memo } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import { changeActiveOffer } from '../../features/ui/uiSlice';
import { getRatingPercentage, getUpperCaseFirstLetter } from '../../utils/common';


interface CardProps {
  id: number;
  title: string;
  type: string;
  price: number;
  previewImage: string;
  rating: number;
  isPremium: boolean;
  isFavorite: boolean;
  isNearByView: boolean;
}

const OfferCard: React.FC<CardProps> = ({
  id,
  title,
  type,
  price,
  previewImage,
  rating,
  isPremium,
  isFavorite,
  isNearByView,
}) => {
  const dispatch = useDispatch();

  const cardCls = cx('place-card', {
    'cities__place-card': !isNearByView,
    'near-places__card': isNearByView,
  });

  const imageWrapperCls = cx('place-card__image-wrapper', {
    'cities__image-wrapper': !isNearByView,
    'near-places__image-wrapper': isNearByView,
  });

  const premium = !isPremium ? '' : (
    <div className="place-card__mark">
      <span>Premium</span>
    </div>);

  const ratingPercent = getRatingPercentage(rating);

  return (
    <article
      className={cardCls}
      onMouseEnter={() => dispatch(changeActiveOffer(id))}
      onMouseLeave={() => dispatch(changeActiveOffer(null))}
    >
      {premium}
      <div className={imageWrapperCls}>
        <Link to={`/offer/${id}`}>
          <img
            className="place-card__image"
            src={previewImage}
            width={260}
            height={200}
            alt="Place image"
          />
        </Link>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">€{price}</b>
            <span className="place-card__price-text">/&nbsp;night</span>
          </div>
          <button className={`place-card__bookmark-button button ${isFavorite ? 'place-card__bookmark-button--active' : ''}`} type="button">
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
          <Link to={`/offer/${id}`}>{title}</Link>
        </h2>
        <p className="place-card__type">{getUpperCaseFirstLetter(type)}</p>
      </div>
    </article>
  );
};

export default memo(OfferCard);
