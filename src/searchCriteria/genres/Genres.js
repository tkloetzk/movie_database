import React, { Component } from 'react';
import Select from 'react-select';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import 'react-select/dist/react-select.css';
import { connect } from 'react-redux';
import * as genreActions from './genres-actions';

class Genres extends Component {
  handleChange = genres => {
    this.props.updateGenreAction(genres);
  };

  render() {
    const genresDropDown = [
      { value: 'Action & Adventure', label: 'Action/Adventure' },
      { value: 'Animation', label: 'Animation' },
      { value: 'Classics', label: 'Classics' },
      { value: 'Comedy', label: 'Comedy' },
      { value: 'Documentary', label: 'Documentary' },
      { value: 'Drama', label: 'Drama' },
      { value: 'Horror', label: 'Horror' },
      { value: 'Kids & Family', label: 'Kids & Family' },
      { value: 'Musical & Performing Arts', label: 'Musical' },
      { value: 'Romance', label: 'Romance' },
      { value: 'Science Fiction & Fantasy', label: 'Sci-Fi & Fantasy' }
    ];
    return (
      <div className="col-sm-5">
        <Select
          className="align-middle"
          closeOnSelect={false}
          multi
          name="form-field-name"
          value={this.props.genres}
          onChange={this.handleChange}
          placeholder="Select a Genre"
          options={genresDropDown}
        />
      </div>
    );
  }
}
const mapStateToProps = state => ({
  genres: state.genres
});

const mapDispatchToProps = dispatch => bindActionCreators(genreActions, dispatch);

Genres.defaultProps = {
  genres: []
};
Genres.propTypes = {
  updateGenreAction: PropTypes.func.isRequired,
  genres: PropTypes.arrayOf(PropTypes.object)
};
export default connect(mapStateToProps, mapDispatchToProps)(Genres);
