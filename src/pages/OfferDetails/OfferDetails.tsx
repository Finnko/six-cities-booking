import React from 'react';
import { useSelector } from 'react-redux';
import { Redirect, useParams } from 'react-router-dom';

import { RootState } from '../../app/rootReducer';
import Header from '../../components/Header/Header';
import Offer from '../../components/Offer/Offer';
import OfferGallery from '../../components/OfferGallery/OfferGallery';
import ReviewsList from '../../components/ReviewsList/ReviewsList';
import { AppPaths } from '../../const';
import { selectOffer } from '../../features/offers/selectors';


interface OfferRouteParams {
  id: string;
}

const OfferDetails: React.FC = () => {
  const { id } = useParams<OfferRouteParams>();
  const offer = useSelector((state: RootState) => selectOffer(state, id));

  console.log(offer);
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
