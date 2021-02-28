import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { Redirect, useParams } from 'react-router-dom';

import { RootState } from '../../app/rootReducer';
import Header from '../../components/Header/Header';
import Offer from '../../components/Offer/Offer';
import OfferGallery from '../../components/OfferGallery/OfferGallery';
import OffersList from '../../components/OffersList/OffersList';
import ReviewsList from '../../components/ReviewsList/ReviewsList';
import { AppPaths } from '../../const';
import { fetchOffersNearby } from '../../features/offers/offersSlice';
import { selectOffer } from '../../features/offers/selectors';


interface OfferRouteParams {
  id: string;
}

const MAX_OFFERS_NEARBY = 3;

const OfferDetails: React.FC = () => {
  const dispatch = useDispatch();
  const { id } = useParams<OfferRouteParams>();
  const offer = useSelector((state: RootState) => selectOffer(state, id));
  const { offersNearby, offersNearbyStatus } = useSelector((state: RootState) => state.offers);

  useEffect(() => {
    dispatch(fetchOffersNearby(id));
  }, [dispatch, id]);

  if (!offer) {
    return <Redirect to={AppPaths.ROOT}/>;
  }

  const { images } = offer;

  return (
    <div className="page">
      <Header />

      <main className="page__main page__main--property">
        <section className="property">
          <OfferGallery images={images}/>
          <div className="property__container container">
            <div className="property__wrapper">
              <Offer offer={offer}/>
              <ReviewsList id={id}/>
            </div>
          </div>
          {/* <Map isNearByView currentCity={currentCity} offers={nearByOffers}/>*/}
        </section>

          <div className="container">
          <section className="near-places places">
            <h2 className="near-places__title">Other places in the neighbourhood</h2>

            {offersNearbyStatus === 'pending' && <p>Offers nearby loading...</p>}

            {offersNearbyStatus === 'succeeded' && <OffersList offers={offersNearby.slice(0, MAX_OFFERS_NEARBY)} isNearByView/>}
          </section>
          </div>
      </main>
    </div>
  );
};

export default OfferDetails;
