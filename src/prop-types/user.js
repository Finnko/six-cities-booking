import PropTypes from "prop-types";

const UserPropType = PropTypes.shape({
  id: PropTypes.number,
  email: PropTypes.string,
  name: PropTypes.string,
  avatar: PropTypes.string,
  isPro: PropTypes.bool,
});

export default UserPropType;
