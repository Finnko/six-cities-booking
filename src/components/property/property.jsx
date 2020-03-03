import React from 'react';
import PropTypes from 'prop-types';
import Offer from '../offer/offer.jsx';
import ReviewsList from '../reviews-list/reviews-list.jsx';

const Property = ({offer, reviews}) => {
  return (
    <React.Fragment>
      <Offer offer={offer}/>
      <section className="property__reviews reviews">
        <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{reviews.length}</span></h2>
        <ReviewsList reviews={reviews}/>
      </section>
    </React.Fragment>
  );
};

Property.propTypes = {
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
    images: PropTypes.arrayOf(PropTypes.string).isRequired,
    features: PropTypes.arrayOf(PropTypes.string).isRequired,
    owner: PropTypes.shape({
      name: PropTypes.string.isRequired,
      avatar: PropTypes.string.isRequired,
      description: PropTypes.arrayOf(PropTypes.string).isRequired,
      isPro: PropTypes.bool.isRequired
    }).isRequired,
  }).isRequired,
  reviews: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
    description: PropTypes.string.isRequired,
    date: PropTypes.number.isRequired,
  })).isRequired,
};

export default Property;
