import React from 'react';
import PropTypes from 'prop-types';

const CitiesList = ({cities, chosenCity}) => {
  return (
    <div className="tabs">
      <section className="locations container">
        <ul className="locations__list tabs__list">
          {cities.map((city, index) => {
            const isActive = city === chosenCity;
            return (
              <li className="locations__item" key={city + index}>
                <a className={`locations__item-link tabs__item ${isActive ? `tabs__item--active` : ``}`}
                  href="#"
                >
                  <span>{city}</span>
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
  chosenCity: PropTypes.string.isRequired,
  cities: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default CitiesList;
