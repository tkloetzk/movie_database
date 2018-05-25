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
      { value: 'Action, Adventure', label: 'Action/Adventure' },
      { value: 'Comedy', label: 'Comedy' },
      { value: 'Crime', label: 'Crime' },
      { value: 'Drama', label: 'Drama' },
      { value: 'Family', label: 'Family' },
      { value: 'Fantasy', label: 'Fantasy' },
      { value: 'Film Noir', label: 'Film Noir' },
      { value: 'Horror', label: 'Horror' },
      { value: 'Musical', label: 'Musical' },
      { value: 'Mystery', label: 'Mystery' },
      { value: 'Romance', label: 'Romance' },
      { value: 'Sci-Fi', label: 'Sci-Fi' },
      { value: 'Thriller', label: 'Thriller' },
      { value: 'War', label: 'War' },
      { value: 'Western', label: 'Western' }
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
