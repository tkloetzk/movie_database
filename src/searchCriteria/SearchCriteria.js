import React, { Component } from 'react';
import { ButtonToolbar } from 'react-bootstrap';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { forEach } from 'lodash';
import PropTypes from 'prop-types';
import { fetchSearchedMovies } from './searchCriteria-actions';
import './SearchCriteria.css';
import Genres from './genres/Genres';
import Streaming from './streaming/Streaming';
import Buttons from './buttons/Buttons';

class SearchCriteria extends Component {
  getSearchedMovies = () => {
    const services = [];
    let personal = false;
    forEach(this.props.services, service => {
      if (service === 'Hulu') {
        services.push('hulu:free');
        services.push('hulu:plus');
      } else if (service === 'Personal') {
        personal = true;
      } else {
        services.push(service.toLowerCase());
      }
    });
    this.props.fetchSearchedMovies(this.props.genres, services, personal);
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
  genres: PropTypes.arrayOf(PropTypes.string),
  services: PropTypes.arrayOf(PropTypes.string)
};

SearchCriteria.defaultProps = {
  genres: [],
  services: []
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchCriteria);
