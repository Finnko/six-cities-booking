import React from 'react';
import PropTypes from 'prop-types';
import CityPropType from '../../prop-types/city';

const CitiesList = ({cities, currentCity, onChangeCity}) => {
  return (
    <div className="tabs">
      <section className="locations container">
        <ul className="locations__list tabs__list">
          {cities.map((city, index) => {
            const isActive = city.name === currentCity.name;
            return (
              <li className="locations__item" key={city.name + index}>
                <a className={`locations__item-link tabs__item ${isActive ? `tabs__item--active` : ``}`}
                  href="#"
                  onClick={(evt) => {
                    evt.preventDefault();
                    onChangeCity(city.name);
                  }}
                >
                  <span>{city.name}</span>
                </a>
              </li>
            );
          })}
        </ul>
      </section>
    </div>
  );
};

CitiesList.propTypes = {
  onChangeCity: PropTypes.func.isRequired,
  currentCity: CityPropType,
  cities: PropTypes.arrayOf(CityPropType).isRequired,
};

export default CitiesList;
