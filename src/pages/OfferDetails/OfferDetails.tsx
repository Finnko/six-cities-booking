

import React, { useEffect } from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { Redirect, useParams } from 'react-router-dom';

import { RootState } from '../../app/rootReducer';
import Header from '../../components/Header/Header';
import Offer from '../../components/Offer/Offer.tsx';
import OfferGallery from '../../components/OfferGallery/OfferGallery';
import { AppPaths } from '../../const';
import { fetchOffer } from '../../features/offers/offersSlice';
import { selectOffer } from '../../features/offers/selectors';
import Map from '../Map/map.jsx';
import OffersList from '../OffersList/offers-list.jsx';
import ReviewsList from '../ReviewsList/reviews-list.jsx';

interface OfferRouteParams {
  id: string;
}

const OfferDetails: React.FC = () => {
  const dispatch = useDispatch();
  const { id } = useParams<OfferRouteParams>();
  const offer = useSelector((state: RootState) => selectOffer(state, id));

  useEffect(() => {
    if (!offer) {
      dispatch(fetchOffer(id));
    }
  }, [dispatch, id, offer]);

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
              {/* <ReviewsList reviews={reviews}/>*/}
            </div>
          </div>
          {/* <Map isNearByView currentCity={currentCity} offers={nearByOffers}/>*/}
        </section>

        {/* <div className="container">*/}
        {/*  <section className="near-places places">*/}
        {/*    <h2 className="near-places__title">Other places in the neighbourhood</h2>*/}
        {/*    <OffersList offersCards={nearByOffers} isNearByView/>*/}
        {/*  </section>*/}
        {/* </div>*/}
      </main>
    </div>
  );
};

export default OfferDetails;
