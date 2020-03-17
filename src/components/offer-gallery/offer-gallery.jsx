import React from 'react';
import PropTypes from 'prop-types';

const MAX_IMAGES_TO_DISPLAY = 6;

const OfferGallery = ({images}) => {
  const displayedImages = images.slice(0, MAX_IMAGES_TO_DISPLAY);

  return (images.length &&
    <div className="property__gallery-container container">
      <div className="property__gallery">
        {displayedImages.map((imageSrc, index) => (
          <div key={imageSrc + index} className="property__image-wrapper">
            <img className="property__image" src={imageSrc} alt="Photo studio" />
          </div>
        ))}
      </div>
    </div>
  );
};

OfferGallery.propTypes = {
  images: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default OfferGallery;
