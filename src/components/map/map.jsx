import React, {PureComponent, createRef} from "react";
import PropTypes from "prop-types";
import CityPropType from '../../prop-types/city';
import leaflet from "leaflet";

const MAP_PIN = {
  size: [28, 38],
  url: `img/pin.svg`,
  activeUrl: `img/pin-active.svg`,
};

const MAP_LAYER = {
  url: `https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png`,
  attribution: `&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>`,
};

class Map extends PureComponent {
  constructor(props) {
    super(props);
    this._mapRef = createRef();
    this._map = null;
    this._markers = [];
  }

  componentDidMount() {
    this.initMap();
  }

  componentDidUpdate() {
    const {currentCity: {coords}} = this.props;
    const city = [coords.latitude, coords.longitude];
    const zoom = coords.zoom;

    this.clearMarkers();
    this._map.setView(city, zoom);
    this.addMarkers();
  }

  componentWillUnmount() {
    this._map.remove();
  }

  getMarkerTemplate(isActivePin) {
    return leaflet.icon({
      iconUrl: isActivePin ? MAP_PIN.activeUrl : MAP_PIN.url,
      iconSize: MAP_PIN.size,
    });
  }

  initMap() {
    const {currentCity: {coords}} = this.props;
    const city = [coords.latitude, coords.longitude];
    const zoom = coords.zoom;

    this._map = leaflet.map(this._mapRef.current, {
      center: city,
      zoom,
      zoomControl: false,
      marker: true,
    });

    this._map.setView(city, zoom);

    leaflet.tileLayer(MAP_LAYER.url, {
      attribution: MAP_LAYER.attribution,
    }).addTo(this._map);

    this.addMarkers();
  }

  addMarkers() {
    const {offers, activeItemId} = this.props;

    offers.forEach((offer) => {
      const {coords: {latitude, longitude}} = offer;
      const coordinates = [latitude, longitude];
      let isActivePin = false;

      if (activeItemId) {
        isActivePin = offer.id === activeItemId;
      }

      const icon = this.getMarkerTemplate(isActivePin);
      const marker = leaflet.marker(coordinates, {icon}).addTo(this._map);
      this._markers.push(marker);
    });
  }

  clearMarkers() {
    this._markers.forEach((marker) => this._map.removeLayer(marker));
    this._markers = [];
  }

  render() {
    const {isNearByView} = this.props;

    return (
      <section className={`map ${isNearByView ? `property__map` : `cities__map`}`}>
        <div id='map' style={{height: `100%`}} ref={this._mapRef}/>
      </section>);
  }
}

Map.propTypes = {
  currentCity: CityPropType.isRequired,
  isNearByView: PropTypes.bool,
  activeItemId: PropTypes.number,
  offers: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Map;
