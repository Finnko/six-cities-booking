import PropTypes from "prop-types";

const CityPropType = PropTypes.shape({
  coords: PropTypes.shape({
    latitude: PropTypes.number.isRequired,
    longitude: PropTypes.number.isRequired,
    zoom: PropTypes.number,
  }),
  name: PropTypes.string.isRequired,
});

export default CityPropType;
