import React, {Fragment} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {getOfferById} from '../../redux/reducers/data/data-reducer';
import NameSpace from '../../redux/name-space';
import OfferPropType from '../../interfaces/offer';
import CityPropType from '../../interfaces/city';
import Offer from '../offer/offer.jsx';
import OffersList from '../OffersList/offers-list.jsx';
import Map from '../map/map.jsx';
import OfferGallery from '../offer-gallery/offer-gallery.jsx';
import ReviewsList from '../reviews-list/reviews-list.jsx';

const OfferDetails = ({currentOffer, nearByOffers, currentCity}) => {
  const {images, reviews} = currentOffer;

  return (
    <Fragment>
      <section className="property">
        <OfferGallery images={images}/>
        <div className="property__container container">
          <div className="property__wrapper">
            <Offer offer={currentOffer}/>
            {/*<ReviewsList reviews={reviews}/>*/}
          </div>
        </div>
        <Map isNearByView={true} currentCity={currentCity} offers={nearByOffers}/>
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
  currentOffer: OfferPropType.isRequired,
  currentCity: CityPropType.isRequired,
  nearByOffers: PropTypes.arrayOf(OfferPropType).isRequired,
};

const mapStateToProps = (state, props) => {
  const id = props.match.params.id;

  const currentOffer = getOfferById(state[NameSpace.DATA].offers, id);
  const nearByOffers = getNearByOffers(state[NameSpace.DATA].offers, id);

  return {
    currentOffer,
    currentCity: state[NameSpace.DATA].currentCity,
    nearByOffers
  };
};

export {OfferDetails};
export default connect(mapStateToProps)(OfferDetails);
