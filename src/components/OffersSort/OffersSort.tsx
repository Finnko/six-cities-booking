import cx from 'classnames';
import { nanoid } from 'nanoid';
import React from 'react';
import {useDispatch, useSelector} from 'react-redux';

import { SortType } from '../../const';
import {changeSortType, selectSortType } from '../../features/ui/uiSlice';
import { useToggle } from '../../hooks/useToggle';


const OffersSorting: React.FC = () => {
  const [isSelectOpen, toggleSelect] = useToggle();

  const dispatch = useDispatch();
  const activeSortOption = useSelector(selectSortType);

  const handleSortOptionClick = (option: string) => {
    toggleSelect();
    dispatch(changeSortType(option));
  };

  const selectCls = cx('places__options', 'places__options--custom', {
    'places__options--opened': isSelectOpen,
  });

  return (
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by</span>

      <span
        className="places__sorting-type"
        tabIndex={0}
        onClick={toggleSelect}
      >
        {activeSortOption}
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="#icon-arrow-select"/>
        </svg>
      </span>

      <ul className={selectCls}>
        {Object.values(SortType).map(option => {
          const optionCls = cx('places__option', {
              'places__option--active': option === activeSortOption,
          });

          return (
            <li
              key={nanoid()}
              className={optionCls}
              tabIndex={0}
              onClick={() => handleSortOptionClick(option)}
            >
              {option}
            </li>
          );
        })}
      </ul>
    </form>
  );
};


export default OffersSorting;
