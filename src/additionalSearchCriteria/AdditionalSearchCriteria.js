import React from 'react';
import Tomatometer from './tomatometer/Tomatometer';
import MPAA from './mpaa/MPAA';
import Year from './year/Year';
import SearchInput from './searchInput/SearchInput';

const AdditionalSearchCriteria = () => (
  <div className="col-sm-12 pt-2">
    <Tomatometer />
    <MPAA />
    <Year />
    <SearchInput />
  </div>
);

export default AdditionalSearchCriteria;
