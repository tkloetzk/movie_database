import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as streamingActions from './streaming-services-actions';

import Checkbox from '../../util/Checkbox';

class Streaming extends Component {
  componentWillMount = () => {
    this.selectedServices = new Set();
  };

  toggleCheckbox = label => {
    if (this.selectedServices.has(label)) {
      this.selectedServices.delete(label);
    } else {
      this.selectedServices.add(label);
    }
    this.props.updateStreamingSelections(this.selectedServices);
  };

  createCheckbox = label => (
    <Checkbox label={label} handleCheckboxChange={this.toggleCheckbox} key={label} />
  );

  createServicesCheckboxes = () => this.props.services.map(this.createCheckbox);

  render() {
    return (
      <div className="col-sm-4 border border-gray rounded text-center align-self-center minHeight34">
        {this.createServicesCheckboxes()}
      </div>
    );
  }
}
const mapStateToProps = state => ({
  services: state.services
});

const mapDispatchToProps = dispatch => bindActionCreators(streamingActions, dispatch);

Streaming.defaultProps = {
  services: ['Netflix', 'Hulu', 'Prime', 'Personal']
};
Streaming.propTypes = {
  updateStreamingSelections: PropTypes.func.isRequired,
  services: PropTypes.arrayOf(PropTypes.string)
};

export default connect(mapStateToProps, mapDispatchToProps)(Streaming);
