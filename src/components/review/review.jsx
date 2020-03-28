import React from 'react';
import {getFormattedDate, getRatingPercentage, getTimeTagFormatted} from '../../utils/common';
import ReviewPropType from '../../prop-types/review';

const Review = ({review}) => {
  const {name, avatar, rating, description, date} = review;

  const ratingPercent = getRatingPercentage(rating);
  const formattedDate = getFormattedDate(date);
  const timeTagFormatted = getTimeTagFormatted(date);

  return (
    <ul className="reviews__list">
      <li className="reviews__item">
        <div className="reviews__user user">
          <div className="reviews__avatar-wrapper user__avatar-wrapper">
            <img className="reviews__avatar user__avatar" src={avatar} width="54" height="54"
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
            {description}
          </p>
          <time className="reviews__time" dateTime={timeTagFormatted}>{formattedDate}</time>
        </div>
      </li>
    </ul>
  );
};

Review.propTypes = {
  review: ReviewPropType.isRequired,
};

export default Review;
