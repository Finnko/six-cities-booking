import React from 'react';

import { IReview } from '../../interfaces/review';
import { getFormattedDate, getRatingPercentage, getTimeTagFormatted } from '../../utils/common';

interface ReviewProps {
  review: IReview;
}

const Review: React.FC<ReviewProps> = ({ review }) => {
  const {
    rating,
    comment,
    date,
    user: {
      name,
      avatarUrl,
    }
  } = review;

  const ratingPercent = getRatingPercentage(rating);
  const formattedDate = getFormattedDate(date);
  const timeTagFormatted = getTimeTagFormatted(date);

  return (
    <li className="reviews__item">
      <div className="reviews__user user">
        <div className="reviews__avatar-wrapper user__avatar-wrapper">
          <img className="reviews__avatar user__avatar" src={avatarUrl} width="54" height="54"
            alt="Reviews avatar"/>
        </div>
        <span className="reviews__user-name">
          {name}
        </span>
      </div>
      <div className="reviews__info">
        <div className="reviews__rating rating">
          <div className="reviews__stars rating__stars">
            <span style={{width: ratingPercent}}/>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <p className="reviews__text">
          {comment}
        </p>
        <time className="reviews__time" dateTime={timeTagFormatted}>{formattedDate}</time>
      </div>
    </li>
  );
};

export default Review;
