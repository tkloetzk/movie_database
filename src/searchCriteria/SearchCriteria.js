import React from "react";
import "./SearchCriteria.css";
import Genres from "./genres/Genres";

const SearchCriteria = () => {
  return (
    <div className="row rounded" id="searchCriteria">
      <Genres />
    </div>
  );
};

export default SearchCriteria;
