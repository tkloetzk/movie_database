import React, { Component } from 'react';
import Slider from 'react-rangeslider';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as tomatometerAction from './tomatometer-actions';

class Tomatometer extends Component {
  handleChangeHorizontal = value => {
    this.props.updateTomatometer(value);
  };
  render() {
    const horizontalLabels = {
      0: 'Rotten',
      60: 'Fresh'
    };
    const formatPercent = value => `${value} %`;
    return (
      <div className="col-sm-3">
        Tomatometer
        <div className="slider custom-labels">
          <Slider
            min={0}
            max={100}
            value={this.props.tomatometer}
            labels={horizontalLabels}
            format={formatPercent}
            handleLabel={`${this.props.tomatometer}`}
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
