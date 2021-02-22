import cx from 'classnames';
import React, { useCallback, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { SortType } from '../../const';
import { changeSortType, selectSortType } from '../../features/ui/uiSlice';
import { useOnClickOutside } from '../../hooks/useOutsideClick';


const OffersSorting: React.FC = () => {
  const selectRef = useRef(null);
  const [isSelectOpen, toggleSelect] = useState(false);

  const dispatch = useDispatch();
  const activeSortOption = useSelector(selectSortType);

  const handleClick = () => toggleSelect(!isSelectOpen);

  const handleSortOptionClick = (option: string) => {
    toggleSelect(!isSelectOpen);
    dispatch(changeSortType(option));
  };

  const handleClickOutside = useCallback(() => {
    toggleSelect(false);
  }, []);

  useOnClickOutside(selectRef, handleClickOutside);

  const selectCls = cx('places__options', 'places__options--custom', {
    'places__options--opened': isSelectOpen,
  });

  return (
    <form className="places__sorting" action="#" method="get" ref={selectRef}>
      <span className="places__sorting-caption">Sort by</span>

      <span
        className="places__sorting-type"
        tabIndex={0}
        onClick={handleClick}
      >
        {activeSortOption}
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="#icon-arrow-select"/>
        </svg>
      </span>

      <ul className={selectCls}>
        {Object.values(SortType).map((option, index) => {
          const optionCls = cx('places__option', {
              'places__option--active': option === activeSortOption,
          });

          return (
            <li
              key={`${option}-${index}`}
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
