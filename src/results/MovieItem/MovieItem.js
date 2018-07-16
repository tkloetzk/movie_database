import React, { Component } from 'react';
import ListItem from '@material-ui/core/ListItem';
import PropTypes from 'prop-types';

const styles = {
  img: {
    maxWidth: '100%',
    height: 'auto',
    position: 'relative'
  },
  icons: {
    maxWidth: '30%',
    height: 'auto',
    position: 'relative'
  },
  tomato: {
    paddingLeft: '4%',
    maxWidth: '17%',
    height: 'auto',
    position: 'relative'
  },
  playButton: {
    position: 'absolute',
    width: 'auto',
    height: '35%',
    left: 30,
    opacity: 0.85,
    top: 30
  }
};

class MovieItem extends Component {
  state = {};

  componentWillMount() {
    fetch(`http://www.omdbapi.com/?apikey=e01bbf15&t=${this.props.movie.title}`)
      .then(result => result.json())
      .then(items => this.setState(items));
  }

  image() {
    console.log(this.state);
    console.log(this.props.movie);
    if (!this.state.Poster || this.state.Poster !== 'N/A') {
      return (
        <div className="col-sm-1">
          <img
            src={this.state.Poster}
            className="img-fluid"
            style={styles.img}
            alt="movie poster"
          />
          <img
            src="/playbutton.png"
            className="img-fluid"
            style={styles.playButton}
            alt="poster overlay"
          />
        </div>
      );
    }
  }
  render() {
    const { movie } = this.props;
    return (
      <ListItem button>
        {this.image()}
        <div className="col-sm-7">
          <span>
            {movie.title} ({movie.year}) | {movie.mpaa_rating} | {this.state.Runtime} |{' '}
            {this.state.Genre}
          </span>
          <br />
          {this.state.Plot}
        </div>
        <div className="col-sm-3">
          <div>
            <span style={styles.paddingRightIcon}>
              <img src="imdb.svg" className="img-fluid" style={styles.icons} alt="imdb icon" />{' '}
              {this.state.imdbRating}
            </span>
            <img
              src={
                movie.critics_score > 75
                  ? 'certified_rotten_tomatoes.png'
                  : movie.critics_score < 75 && movie.critics_score > 60
                    ? 'fresh_rotten_tomatoes.png'
                    : 'rotten_rotten_tomatoes.png'
              }
              className="img-fluid"
              style={styles.tomato}
              alt="imdb icon"
            />{' '}
            {movie.critics_score}%
          </div>
        </div>
      </ListItem>
    );
  }
}

MovieItem.defaultProps = {
  movie: {}
};

MovieItem.propTypes = {
  // movie: PropTypes.shapeOf(PropTypes.arrayOf(PropTypes.string))
};

export default MovieItem;
