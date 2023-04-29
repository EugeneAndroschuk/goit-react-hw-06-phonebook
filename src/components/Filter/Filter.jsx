import React from 'react';
import { useDispatch } from 'react-redux';
import { updateFilter } from 'redux/filterSlice';
import css from './Filter.module.css';

const Filter = () => {
  const dispatch = useDispatch();

  return (
    <>
      <label className={css['filter-label']} htmlFor="">
        Find contacts by name
        <input
          className={css['filter-input']}
          type="text"
          onChange={e => dispatch(updateFilter(e.currentTarget.value))}
        />
      </label>
    </>
  );
};

export default Filter;