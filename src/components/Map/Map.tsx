import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

const LeafletProperties = {
  // PATH_TO_MAIN_PIN: '../img/main-pin.svg',
  // PATH_TO_MARKER: '../img/pin.svg',
  // ICON_SIZE: 40,
  TILE_LAYER: 'http://{s}.tiles.maps.sputnik.ru/{z}/{x}/{y}.png',
  ATTRIBUTION: 'Map data: © <a href="http://www.openstreetmap.org/copyright" target="_blank">OpenStreetMap</a> contributors, under ODbL | Tiles: © <a href="http://maps.sputnik.ru/" target="_blank">Спутник</a>',
  ZOOM: 13,
};

const Map: React.FC = () => (
    <div className="cities__right-section">
      <MapContainer
        center={[51.505, -0.09]}
        zoom={LeafletProperties.ZOOM}
        className="cities__map map"
      >
        <TileLayer
          attribution={LeafletProperties.ATTRIBUTION}
          url={LeafletProperties.TILE_LAYER}
        />
        <Marker position={[51.505, -0.09]}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );

export default Map;
