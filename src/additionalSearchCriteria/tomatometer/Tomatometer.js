import React, { Component } from 'react';
import InputRange from 'react-input-range';
import PropTypes from 'prop-types';
import 'react-input-range/lib/css/index.css';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as tomatometerAction from './tomatometer-actions';

class Tomatometer extends Component {
  handleChangeHorizontal = value => {
    this.props.updateTomatometer(value);
  };
  render() {
    return (
      <div className="col-sm-3">
        Tomatometer
        <div className="slider custom-labels pt-3">
          <InputRange
            maxValue={100}
            minValue={0}
            formatLabel={value => `${value}%`}
            value={this.props.tomatometer}
            onChange={this.handleChangeHorizontal}
          />
        </div>
      </div>
    );
  }
}

Tomatometer.defaultProps = {
  tomatometer: 60
};
Tomatometer.propTypes = {
  updateTomatometer: PropTypes.func.isRequired,
  tomatometer: PropTypes.number
};

const mapStateToProps = state => ({
  tomatometer: state.tomatometer
});

const mapDispatchToProps = dispatch => bindActionCreators(tomatometerAction, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Tomatometer);
