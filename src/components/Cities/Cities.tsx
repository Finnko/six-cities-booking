import cx from 'classnames';
import { nanoid } from 'nanoid';
import React from 'react';
import {useDispatch} from 'react-redux';

import { DEFAULT_CITIES } from '../../const';
import {changeCity} from '../../features/ui/uiSlice';


interface CityProps {
  activeCity: string;
}

const Cities: React.FC<CityProps> = ({ activeCity }) => {
  const dispatch = useDispatch();

  return (
    <div className="tabs">
      <section className="locations container">
        <ul className="locations__list tabs__list">
          {DEFAULT_CITIES.map(city => {
            const linkCls = cx('locations__item-link', 'tabs__item', {
              'tabs__item--active': city === activeCity,
            });

            return (
              <li className="locations__item" key={nanoid()}>
                <a className={linkCls}
                   href="#"
                   onClick={evt => {
                     evt.preventDefault();
                     dispatch(changeCity(city));
                   }}
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

export default Cities;
