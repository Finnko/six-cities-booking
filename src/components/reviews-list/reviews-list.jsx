import React from 'react';
import PropTypes from 'prop-types';
import Review from '../review/review.jsx';

const MAX_REVIEWS_TO_SHOW = 10;

const ReviewsList = ({reviews}) => {
  const sortedReviews = reviews.slice(-MAX_REVIEWS_TO_SHOW).sort((a, b) => b.date - a.date);

  return (
    <ul className="reviews__list">
      {sortedReviews.map((review) =>
        <Review
          review={review}
          key={review.id}
        />
      )}
    </ul>
  );
};

ReviewsList.propTypes = {
  reviews: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
    description: PropTypes.string.isRequired,
    date: PropTypes.number.isRequired,
  })).isRequired,
};

export default ReviewsList;
