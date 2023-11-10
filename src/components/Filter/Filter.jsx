import React from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { filterContacts, selectFilter } from 'redux/sliseFilter';

import { StyledFilterInput, StyledFilterTitle } from './Filter.style';

export const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilter);
  return (
    <div>
      <StyledFilterTitle>Find contact by name</StyledFilterTitle>
      <StyledFilterInput
        onChange={event => dispatch(filterContacts(event.target.value.trim()))}
        value={filter}
        placeholder="Enter filter value"
        type="search"
        name="filter"
      ></StyledFilterInput>
    </div>
  );
};
