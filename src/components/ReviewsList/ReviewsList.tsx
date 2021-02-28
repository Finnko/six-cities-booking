import React, { useEffect } from 'react';
import {useDispatch, useSelector} from 'react-redux';

import { RootState } from '../../app/rootReducer';
import { fetchComments } from '../../features/comments/commentsSlice';
import Review from '../Review/Review';

const MAX_REVIEWS_TO_SHOW = 10;

interface ReviewsListProps {
  id: string;
}

const ReviewsList: React.FC<ReviewsListProps> = ({id}) => {
  const dispatch = useDispatch();
  const { comments: reviews } = useSelector((state: RootState) => state.comments);

  useEffect(() => {
    dispatch(fetchComments(id));
  }, [dispatch, id]);


  const sortedReviews = reviews.slice(0, MAX_REVIEWS_TO_SHOW);
    // .sort((a, b) => b.date - a.date);

  if (!sortedReviews.length) return null;

  return (
    <section className="property__reviews reviews">
      <h2 className="reviews__title">
        Reviews &middot;
        <span className="reviews__amount">{reviews.length}</span>
      </h2>

      <ul className="reviews__list">
        {sortedReviews.map(review =>
          <Review
            key={review.id}
            review={review}
          />
        )}
      </ul>
    </section>
  );
};

export default ReviewsList;
