import PropTypes from "prop-types";

const ReviewPropType = PropTypes.shape({
  name: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
  description: PropTypes.string.isRequired,
  date: PropTypes.number.isRequired,
});

export default ReviewPropType;
