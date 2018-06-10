import React from 'react';
import './SearchCriteria.css';
import Genres from './genres/Genres';
import Streaming from './streaming/Streaming';
import Buttons from './buttons/Buttons';

const SearchCriteria = () => (
  <div className="row rounded" id="searchCriteria">
    <Genres />
    <Streaming />
    <Buttons />
  </div>
);

export default SearchCriteria;
