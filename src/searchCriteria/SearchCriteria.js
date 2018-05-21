import React from 'react';
import './SearchCriteria.css';
import Genres from './genres/Genres';
import Streaming from './streaming/Streaming';

const SearchCriteria = () => (
  <div className="row rounded" id="searchCriteria">
    <Genres />
    <Streaming />
  </div>
);

export default SearchCriteria;
