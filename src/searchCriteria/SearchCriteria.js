import React, { Component } from 'react';
import { ButtonToolbar } from 'react-bootstrap';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import { fetchSearchedMovies } from './searchCriteria-actions';
import './SearchCriteria.css';
import Genres from './genres/Genres';
import Streaming from './streaming/Streaming';
import Buttons from './buttons/Buttons';

class SearchCriteria extends Component {
  getSearchedMovies = () => {
    this.props.fetchSearchedMovies(this.props.genres);
  };

  render() {
    console.log(this.props.movies);
    return (
      <div className="row rounded" id="searchCriteria">
        <Genres />
        <Streaming />
        <ButtonToolbar className="col-sm-3 align-self-center minHeight34">
          <Buttons btnSize="btn-65px" glyph="bookmark" />
          <Buttons btnSize="btn-110px" glyph="search" onClick={this.getSearchedMovies} />
          <Buttons btnSize="btn-65px" glyph="save" />
        </ButtonToolbar>
      </div>
    );
  }
}
const mapStateToProps = state => ({
  movies: state.movies,
  genres: state.genres,
  services: state.streamingServices
});

const mapDispatchToProps = dispatch => bindActionCreators({ fetchSearchedMovies }, dispatch);

SearchCriteria.propTypes = {
  fetchSearchedMovies: PropTypes.func.isRequired,
  movies: PropTypes.arrayOf(PropTypes.object).isRequired,
  genres: PropTypes.string
};

SearchCriteria.defaultProps = {
  genres: []
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchCriteria);
