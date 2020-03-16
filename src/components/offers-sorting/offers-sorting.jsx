import React from 'react';
import PropTypes from 'prop-types';
import {SortType} from '../../const';

const OffersSorting = ({isActive, activeSortType, onSortTypeChange, onActiveChange}) => {
  const renderSortOptions = () => {
    return Object.keys(SortType).map((sortItem, index) => (
      <li
        className={`places__option ${sortItem === activeSortType && `places__option--active`}`}
        tabIndex="0"
        onClick={() => {
          onActiveChange();
          onSortTypeChange(SortType[sortItem]);
        }}
        key={`${sortItem}${index}`}
      >
        {SortType[sortItem]}
      </li>
    ));
  };
  const listClassName = `places__options places__options--custom ${isActive ? `places__options--opened` : ``}`;

  return (
    <div>
      <form className="places__sorting" action="#" method="get">
        <span className="places__sorting-caption">Sort by</span>
        <span className="places__sorting-type" tabIndex="0" onClick={onActiveChange}>
          {activeSortType}
          <svg className="places__sorting-arrow" width="7" height="4">
            <use xlinkHref="#icon-arrow-select"/>
          </svg>
        </span>
        <ul className={listClassName}>
          {renderSortOptions()}
        </ul>
      </form>
    </div>
  );
};

OffersSorting.propTypes = {
  onSortTypeChange: PropTypes.func,
  onActiveChange: PropTypes.func,
  activeSortType: PropTypes.string.isRequired,
  isActive: PropTypes.bool.isRequired
};

export default OffersSorting;