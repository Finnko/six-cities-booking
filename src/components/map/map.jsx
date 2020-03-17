import React, {PureComponent, createRef} from "react";
import PropTypes from "prop-types";
import leaflet from "leaflet";

const mapSettings = {
  center: [52.38333, 4.9],
  zoom: 12,
  zoomControl: false,
  marker: true
};

class Map extends PureComponent {
  constructor(props) {
    super(props);

    this._mapRef = createRef();

    this._pinTemplate = leaflet.icon({
      iconUrl: `/img/pin.svg`,
      iconSize: [30, 30]
    });
  }

  componentDidMount() {
    const {offers} = this.props;

    if (offers !== null) {
      const pinCoords = offers.map((offer) => {
        return offer.coords;
      });

      this.init(pinCoords);
    }
  }

  componentWillUnmount() {
    this._map.remove();
  }

  init(coords) {
    if (!this._mapRef || !this._mapRef.current) {
      return;
    }

    this._map = leaflet.map(this._mapRef.current, mapSettings);

    const {center, zoom} = mapSettings;
    this._map.setView(center, zoom);

    leaflet.tileLayer(`https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png`, {
      attribution: `&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>`
    }).addTo(this._map);

    this.addMapPins(coords);
  }

  addMapPins(coords) {
    coords.forEach((pinCoord) => {
      this.addPin(pinCoord);
    });
  }

  addPin(pinCoord) {
    const icon = this._pinTemplate;
    leaflet.marker(pinCoord, {icon}).addTo(this._map);
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
  isNearByView: PropTypes.bool,
  offers: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Map;
