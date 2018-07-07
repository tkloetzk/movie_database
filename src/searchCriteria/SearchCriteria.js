import React, { Component } from 'react';
import { ButtonToolbar } from 'react-bootstrap';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { forEach } from 'lodash';
import { Collapse } from 'mdbreact';
import PropTypes from 'prop-types';
import { fetchSearchedMovies } from './searchCriteria-actions';
import './SearchCriteria.css';
import Genres from './genres/Genres';
import Streaming from './streaming/Streaming';
import Buttons from './buttons/Buttons';

class SearchCriteria extends Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);

    this.state = {
      collapse: false
    };
  }

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

  toggle() {
    this.setState({ collapse: !this.state.collapse });
  }

  render() {
    console.log(this.props.movies);
    return (
      <div>
        <div className="row rounded" id="searchCriteria">
          <Genres />
          <Streaming />
          <ButtonToolbar className="col-sm-3 align-self-center minHeight34">
            <Buttons btnSize="btn-54px" glyph="bookmark" />
            <Buttons btnSize="btn-90px" glyph="search" onClick={this.getSearchedMovies} />
            <Buttons btnSize="btn-54px" glyph="save" />
            <div
              className={`chevron btn ${this.state.collapse ? 'down' : ''}`}
              onClick={this.toggle}
              onKeyPress={this.toggle}
              role="button"
              tabIndex={0}
              id="chevron"
            >
              <span className="arm left" />
              <span className="arm right" />
            </div>
          </ButtonToolbar>
          <Collapse isOpen={this.state.collapse} className="col-sm-12">
            <p>
              Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson
              ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt
              sapiente ea proident.
            </p>
          </Collapse>
        </div>
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
