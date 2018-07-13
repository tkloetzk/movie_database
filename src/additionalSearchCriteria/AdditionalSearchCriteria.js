import React from 'react';
import Tomatometer from './tomatometer/Tomatometer';
import MPAA from './mpaa/MPAA';

const AdditionalSearchCriteria = () => (
  <div className="col-sm-12 pt-2">
    <Tomatometer />
    <MPAA />
  </div>
);

export default AdditionalSearchCriteria;
