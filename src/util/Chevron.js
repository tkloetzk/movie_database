import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as chevronAction from './chevron-actions';

class Chevron extends Component {
  componentWillMount = () => {
    this.props.updateChevron(false);
  };

  toggle = () => {
    this.props.updateChevron(!this.props.collapse);
  };
  render() {
    return (
      <div
        className={`chevron btn ${this.props.collapse ? 'down' : ''}`}
        onClick={this.toggle}
        onKeyPress={this.toggle}
        role="button"
        tabIndex={0}
        id="chevron"
      >
        <span className="arm left" />
        <span className="arm right" />
      </div>
    );
  }
}
Chevron.propTypes = {
  updateChevron: PropTypes.func.isRequired,
  collapse: PropTypes.bool.isRequired
};

const mapStateToProps = state => ({
  collapse: state.collapse
});

const mapDispatchToProps = dispatch => bindActionCreators(chevronAction, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Chevron);
