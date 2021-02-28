import React from 'react';

const MAX_IMAGES_TO_DISPLAY = 6;

interface GalleryProps {
  images: string[];
}

const OfferGallery: React.FC<GalleryProps> = ({ images }) => {
  if (!images.length) return null;

  const displayedImages = images.slice(0, MAX_IMAGES_TO_DISPLAY);

  return (
    <div className="property__gallery-container container">
      <div className="property__gallery">
        {displayedImages.map((src, index) => (
          <div key={src + index} className="property__image-wrapper">
            <img className="property__image" src={src} alt="Photo studio" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default OfferGallery;
