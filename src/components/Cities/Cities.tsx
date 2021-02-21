import React from 'react';

const CityTabs: React.FC = () => (
    <div className="tabs">
      <section className="locations container">
        {/* <ul className="locations__list tabs__list">*/}
        {/*  {cities.map((city, index) => {*/}
        {/*    const isActive = city.name === currentCity.name;*/}
        {/*    return (*/}
        {/*      <li className="locations__item" key={city.name + index}>*/}
        {/*        <a className={`locations__item-link tabs__item ${isActive ? `tabs__item--active` : ``}`}*/}
        {/*          href="#"*/}
        {/*          onClick={(evt) => {*/}
        {/*            evt.preventDefault();*/}
        {/*            onChangeCity(city);*/}
        {/*          }}*/}
        {/*        >*/}
        {/*          <span>{city.name}</span>*/}
        {/*        </a>*/}
        {/*      </li>*/}
        {/*    );*/}
        {/*  })}*/}
        {/* </ul>*/}
      </section>
    </div>
  );

export default CityTabs;
