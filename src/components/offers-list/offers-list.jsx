import React, {Component} from 'react';
import PropTypes from 'prop-types';
import OffersCard from '../offers-card/offers-card.jsx';

export default class OffersList extends Component {
  constructor(props) {
    super(props);

    this.state = {activeOffer: null};

    this._offerCardClickHandler = this._offerCardClickHandler.bind(this);
    this._offerCardMouseEnterHandler = this._offerCardMouseEnterHandler.bind(this);
    this._offerCardMouseLeaveHandler = this._offerCardMouseLeaveHandler.bind(this);
  }

  _offerCardClickHandler() {}

  _offerCardMouseEnterHandler(offer) {
    this.setState({
      activeOffer: offer
    });
  }

  _offerCardMouseLeaveHandler() {
    this.setState({
      activeOffer: null
    });
  }

  render() {
    const {offersCards} = this.props;

    return (
      <div className="cities__places-list places__list tabs__content">
        {offersCards.map((offer) =>
          <OffersCard
            offer={offer}
            key={offer.id}
            onCardClick={this._offerCardClickHandler}
            onCardMouseEnter={this._offerCardMouseEnterHandler}
            onCardMouseLeave={this._offerCardMouseLeaveHandler}
          />)}
      </div>
    );
  }
}

OffersList.propTypes = {
  offersCards: PropTypes.arrayOf(PropTypes.object).isRequired,
};
