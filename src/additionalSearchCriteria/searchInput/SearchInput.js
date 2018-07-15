import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as searchInputActions from './searchInput-actions';

class SearchInput extends Component {
  handleChange = () => event => {
    this.props.updateSearchInput(event.target.value);
  };
  render() {
    return (
      <div className="col-sm-3">
        <TextField
          disabled
          id="searchInput"
          label="Find by Title or Actor (COMING SOON)"
          value={this.props.searchInput}
          onChange={this.handleChange('searchInput')}
          margin="normal"
        />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  searchInput: state.searchInput
});

const mapDispatchToProps = dispatch => bindActionCreators(searchInputActions, dispatch);

SearchInput.defaultProps = {
  searchInput: ''
};

SearchInput.propTypes = {
  updateSearchInput: PropTypes.func.isRequired,
  searchInput: PropTypes.arrayOf(PropTypes.string)
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchInput);
