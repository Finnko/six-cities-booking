import PropTypes from "prop-types";
import CityPropType from "./city.js";
import ReviewPropType from './review';


const OfferPropType = PropTypes.shape({
  id: PropTypes.number.isRequired,
  coords: PropTypes.shape({
    latitude: PropTypes.number.isRequired,
    longitude: PropTypes.number.isRequired,
    zoom: PropTypes.number,
  }),
  city: CityPropType.isRequired,
  title: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
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
    id: PropTypes.number,
    name: PropTypes.string,
    avatar: PropTypes.string,
    description: PropTypes.arrayOf(PropTypes.string),
    isPro: PropTypes.bool
  }).isRequired,
  reviews: PropTypes.arrayOf(ReviewPropType),
});

export default OfferPropType;
