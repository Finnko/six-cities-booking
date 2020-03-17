import React, {Fragment} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import Offer from '../offer/offer.jsx';
import OffersList from '../offers-list/offers-list.jsx';
import Map from '../map/map.jsx';
import OfferGallery from '../offer-gallery/offer-gallery.jsx';
import ReviewsList from '../reviews-list/reviews-list.jsx';
import {getNearByOffers, getOfferById} from '../../store/reducers/data/data-reducer';

const OfferDetails = ({currentOffer, nearByOffers}) => {
  const {images, reviews} = currentOffer;

  return (
    <Fragment>
      <section className="property">
        <OfferGallery images={images}/>
        <div className="property__container container">
          <div className="property__wrapper">
            <Offer offer={currentOffer}/>
            <ReviewsList reviews={reviews}/>
          </div>
        </div>
        <Map isNearByView={true} offers={nearByOffers}/>
      </section>

      <div className="container">
        <section className="near-places places">
          <h2 className="near-places__title">Other places in the neighbourhood</h2>
          <OffersList offersCards={nearByOffers} isNearByView={true}/>
        </section>
      </div>
    </Fragment>
  );
};

OfferDetails.propTypes = {
  currentOffer: PropTypes.shape({
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
    reviews: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      avatar: PropTypes.string.isRequired,
      rating: PropTypes.number.isRequired,
      description: PropTypes.string.isRequired,
      date: PropTypes.number.isRequired,
    })).isRequired,
  }).isRequired,
  nearByOffers: PropTypes.arrayOf(PropTypes.object).isRequired,
};

const mapStateToProps = (state, props) => {
  const id = props.match.params.id;

  const currentOffer = getOfferById(state.data.offers, id);
  const nearByOffers = getNearByOffers(state.data.offers, id);

  return {
    currentOffer,
    nearByOffers
  };
};

export {OfferDetails};
export default connect(mapStateToProps)(OfferDetails);
