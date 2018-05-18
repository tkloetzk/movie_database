import React from 'react';
import './SearchCriteria.css';
import { Genres } from './genres/Genres';

const SearchCriteria = () => (
  <div className="row rounded" id="searchCriteria">
    <Genres />
  </div>
);

export default SearchCriteria;
