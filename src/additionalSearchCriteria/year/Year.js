import React, { Component } from 'react';
import InputRange from 'react-input-range';
import PropTypes from 'prop-types';
import 'react-input-range/lib/css/index.css';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as yearAction from './year-actions';

class Year extends Component {
  handleChangeHorizontal = value => {
    this.props.updateYear(value);
  };
  render() {
    return (
      <div className="col-sm-3">
        Year
        <div className="slider custom-labels pt-3">
          <InputRange
            draggableTrack
            maxValue={2018}
            minValue={1920}
            value={this.props.years}
            onChange={this.handleChangeHorizontal}
          />
        </div>
      </div>
    );
  }
}

Year.defaultProps = {
  years: {
    min: 1940,
    max: 2000
  }
};
Year.propTypes = {
  updateYear: PropTypes.func.isRequired,
  years: PropTypes.string
};

const mapStateToProps = state => ({
  years: state.year
});

const mapDispatchToProps = dispatch => bindActionCreators(yearAction, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Year);
