import React from 'react';
import Grid from '@material-ui/core/Grid';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const Results = props => {
  const resultsList = (
    <ul>{props.movies.map(movie => <li key={movie.title}>{movie.title}</li>)}</ul>
  );
  return (
    <Grid item xs>
      {resultsList}
    </Grid>
  );
};

const mapStateToProps = state => ({
  movies: state.movies
});

Results.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object)
};

Results.defaultProps = {
  movies: []
};

export default connect(mapStateToProps)(Results);
