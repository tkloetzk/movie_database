import React, { Component } from 'react';
import { ButtonToolbar } from 'react-bootstrap';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { forEach } from 'lodash';
import { Collapse } from 'mdbreact';
import PropTypes from 'prop-types';
import 'react-rangeslider/lib/index.css';
import { fetchSearchedMovies } from './searchCriteria-actions';
import './SearchCriteria.css';
import Genres from './genres/Genres';
import Streaming from './streaming/Streaming';
import Buttons from './buttons/Buttons';
import Chevron from './../util/Chevron';
import AdditionalSearchCriteria from './../additionalSearchCriteria/AdditionalSearchCriteria';

class SearchCriteria extends Component {
  getSearchedMovies = () => {
    const { genres, tomatometer, collapse, services, mpaaRating, years } = this.props;
    let personal = false;
    const streaming = [];
    forEach(services, service => {
      if (service === 'Hulu') {
        streaming.push('hulu:free');
        streaming.push('hulu:plus');
      } else if (service === 'Personal') {
        personal = true;
      } else {
        streaming.push(`${service.toLowerCase()}:`);
      }
    });
    const parameters = {
      genres,
      streaming,
      personal,
      tomatometer: collapse ? tomatometer : null,
      mpaaRating,
      years
    };
    this.props.fetchSearchedMovies(parameters);
  };

  render() {
    return (
      <div>
        <div className="row rounded" id="searchCriteria">
          <Genres />
          <Streaming />
          <ButtonToolbar className="col-sm-3 align-self-center minHeight34">
            <Buttons btnSize="btn-54px" glyph="bookmark" />
            <Buttons btnSize="btn-90px" glyph="search" onClick={this.getSearchedMovies} />
            <Buttons btnSize="btn-54px" glyph="save" />
            <Chevron />
          </ButtonToolbar>
          <Collapse isOpen={this.props.collapse} className="w-100">
            <AdditionalSearchCriteria />
          </Collapse>
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => ({
  movies: state.movies,
  genres: state.genres,
  services: state.streamingServices,
  collapse: state.collapse,
  tomatometer: state.tomatometer,
  mpaaRating: state.mpaaRating,
  years: state.year
});

const mapDispatchToProps = dispatch => bindActionCreators({ fetchSearchedMovies }, dispatch);

SearchCriteria.propTypes = {
  fetchSearchedMovies: PropTypes.func.isRequired,
  genres: PropTypes.arrayOf(PropTypes.shape({ label: PropTypes.string, value: PropTypes.string })),
  services: PropTypes.arrayOf(PropTypes.string),
  collapse: PropTypes.bool.isRequired,
  tomatometer: PropTypes.number,
  mpaaRating: PropTypes.arrayOf(PropTypes.string),
  years: PropTypes.objectOf(PropTypes.number)
};

SearchCriteria.defaultProps = {
  genres: [],
  services: [],
  tomatometer: null,
  mpaaRating: null,
  years: {}
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchCriteria);
