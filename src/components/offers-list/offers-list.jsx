import React, {Component} from 'react';
import PropTypes from 'prop-types';
import OffersCard from '../offers-card/offers-card.jsx';

export default class OffersList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      activeCard: null,
    };
  }

  render() {
    const {offersCards} = this.props;

    const offers = offersCards.map((offer) => {
      return <OffersCard
        offer={offer}
        key={offer.id}
      />;
    });

    return (
      <div className="cities__places-list places__list tabs__content">
        {offers}
      </div>
    );
  }
}

OffersList.propTypes = {
  offersCards: PropTypes.arrayOf(PropTypes.object).isRequired,
};
