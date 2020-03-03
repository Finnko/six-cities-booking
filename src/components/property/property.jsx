import React from 'react';
import PropTypes from 'prop-types';
import Offer from '../offer/offer.jsx';

const Property = ({offer}) => {
  return (
    <React.Fragment>
      <Offer offer={offer}></Offer>
      <section className="property__reviews reviews">
        <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">1</span></h2>
        <ul className="reviews__list">
          <li className="reviews__item">
            <div className="reviews__user user">
              <div className="reviews__avatar-wrapper user__avatar-wrapper">
                <img className="reviews__avatar user__avatar" src="img/avatar-max.jpg" width="54" height="54"
                  alt="Reviews avatar"/>
              </div>
              <span className="reviews__user-name">
                Max
              </span>
            </div>
            <div className="reviews__info">
              <div className="reviews__rating rating">
                <div className="reviews__stars rating__stars">
                  <span style={{width: `80%`}}/>
                  <span className="visually-hidden">Rating</span>
                </div>
              </div>
              <p className="reviews__text">
                A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is
                green and from 18th century.
              </p>
              <time className="reviews__time" dateTime="2019-04-24">April 2019</time>
            </div>
          </li>
        </ul>
      </section>
    </React.Fragment>
  );
};

export default Property;
