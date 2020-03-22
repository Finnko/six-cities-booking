import PropTypes from "prop-types";
import CityPropType from "./city.js";
import ReviewPropType from './review';


const OfferPropType = PropTypes.shape({
  id: PropTypes.string.isRequired,
  coords: PropTypes.shape({
    latitude: PropTypes.number.isRequired,
    longitude: PropTypes.number.isRequired,
    zoom: PropTypes.number,
  }).isRequired,
  city: CityPropType.isRequired,
  title: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  promoImage: PropTypes.string.isRequired,
  isFavorite: PropTypes.bool,
  isPremium: PropTypes.bool.isRequired,
  rating: PropTypes.number.isRequired,
  roomsCount: PropTypes.number.isRequired,
  guestsCount: PropTypes.number.isRequired,
  images: PropTypes.arrayOf(PropTypes.string),
  features: PropTypes.arrayOf(PropTypes.string).isRequired,
  owner: PropTypes.shape({
    name: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    description: PropTypes.arrayOf(PropTypes.string).isRequired,
    isPro: PropTypes.bool.isRequired
  }).isRequired,
  reviews: PropTypes.arrayOf(ReviewPropType).isRequired,
});

export default OfferPropType;
