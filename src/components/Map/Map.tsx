import L from 'leaflet';
import React from 'react';
import {MapContainer, TileLayer, Marker, Popup, useMap} from 'react-leaflet';
import {useSelector} from 'react-redux';

import {RootState} from '../../app/rootReducer';
import {selectCurrentCity} from '../../features/offers/selectors';
import {IOffer} from '../../interfaces/offer';

const LeafletProperties = {
  TILE_LAYER: 'http://{s}.tiles.maps.sputnik.ru/{z}/{x}/{y}.png',
  ATTRIBUTION: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
};

const PinSize = {
  WIDTH: 27,
  HEIGHT: 39,
};

interface MapProps {
  offers: IOffer[];
}

interface ChangeViewProps {
  latitude: number;
  longitude: number;
  zoom: number;
}

const defaultIcon = new L.Icon({
  iconUrl: '../img/pin.svg',
  iconSize: [PinSize.WIDTH, PinSize.HEIGHT],
  iconAnchor: [PinSize.WIDTH / 2, PinSize.HEIGHT],
  popupAnchor: [0, -PinSize.HEIGHT / 3],
});

const activeIcon = new L.Icon({
  iconUrl: '../img/pin-active.svg',
  iconSize: [PinSize.WIDTH, PinSize.HEIGHT],
  iconAnchor: [PinSize.WIDTH / 2, PinSize.HEIGHT],
  popupAnchor: [0, -PinSize.HEIGHT / 3],
});

const renderPins = (offers: IOffer[], activeOffer: number | null) => offers.map(offer => {
  const {
    location: {
      latitude,
      longitude,
    },
    id,
    previewImage,
    price,
    title,
  } = offer;

  return (
    <Marker
      key={id}
      position={[latitude, longitude]}
      icon={activeOffer === id ? activeIcon : defaultIcon}
    >
      <Popup>
        <div className="place-card__image-wrapper cities__image-wrapper">
          <a href="#">
            <img className="place-card__image"
                 src={previewImage}
                 width="260"
                 height="200"
                 alt={title}
            />
          </a>
        </div>
        <h2 className="place-card__name">
          {title}
        </h2>
        <div className="place-card__price">
          <b className="place-card__price-value">€{price}</b>
          <span className="place-card__price-text">/&nbsp;night</span>
        </div>
      </Popup>
    </Marker>
  );
});

const ChangeView: React.FC<ChangeViewProps> = ({latitude, longitude, zoom}) => {
  const map = useMap();

  map.flyTo([latitude, longitude], zoom, {
    duration: 1.5, // sec
  });

  return null;
};


const Map: React.FC<MapProps> = ({offers}) => {
  const city = useSelector(selectCurrentCity);
  console.log(city);
  const {activeOffer} = useSelector((state: RootState) => state.ui);

  const {
    location: {
      latitude,
      longitude,
      zoom,
    }
  } = city;

  return (
    <div className="cities__right-section">
      <MapContainer
        center={[latitude, longitude]}
        zoom={zoom}
        className="cities__map map"
      >
        <ChangeView
          latitude={latitude}
          longitude={longitude}
          zoom={zoom}
        />
        <TileLayer
          attribution={LeafletProperties.ATTRIBUTION}
          url={LeafletProperties.TILE_LAYER}
        />
        {renderPins(offers, activeOffer)}
      </MapContainer>
    </div>
  );
};
export default Map;
