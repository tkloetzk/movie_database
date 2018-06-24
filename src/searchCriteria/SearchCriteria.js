import React, { Component } from 'react';
import { ButtonToolbar } from 'react-bootstrap';
import './SearchCriteria.css';
import Genres from './genres/Genres';
import Streaming from './streaming/Streaming';
import Buttons from './buttons/Buttons';

class SearchCriteria extends Component {
  search = () => {
    console.log('search');
  };

  render() {
    return (
      <div className="row rounded" id="searchCriteria">
        <Genres />
        <Streaming />
        <ButtonToolbar className="col-sm-3 align-self-center minHeight34">
          <Buttons btnSize="btn-65px" glyph="bookmark" />
          <Buttons btnSize="btn-110px" glyph="search" onClick={this.search} />
          <Buttons btnSize="btn-65px" glyph="save" />
        </ButtonToolbar>
      </div>
    );
  }
}

export default SearchCriteria;
