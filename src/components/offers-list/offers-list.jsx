import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import OffersCard from '../offers-card/offers-card.jsx';
import OfferPropType from '../../prop-types/offer';

export default class OffersList extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {activeOffer: null};

    this.offerCardMouseEnterHandler = this.offerCardMouseEnterHandler.bind(this);
    this.offerCardMouseLeaveHandler = this.offerCardMouseLeaveHandler.bind(this);
  }

  offerCardMouseEnterHandler(offer) {
    this.setState({activeOffer: offer});
  }

  offerCardMouseLeaveHandler() {
    this.setState({activeOffer: null});
  }

  render() {
    const {offersCards, isNearByView} = this.props;

    return (
      <div className={`places__list ${isNearByView ? `near-places__list` : `cities__places-list tabs__content` }`}>
        {offersCards.map((offer) =>
          <OffersCard
            offer={offer}
            isNearByView={isNearByView}
            key={offer.id}
            onCardMouseEnter={this.offerCardMouseEnterHandler}
            onCardMouseLeave={this.offerCardMouseLeaveHandler}
          />)}
      </div>
    );
  }
}

OffersList.propTypes = {
  isNearByView: PropTypes.bool.isRequired,
  offersCards: PropTypes.arrayOf(OfferPropType).isRequired,
};
