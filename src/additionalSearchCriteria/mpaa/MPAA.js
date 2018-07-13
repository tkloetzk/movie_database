import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { remove } from 'lodash';
import PropTypes from 'prop-types';
import Box from '../../util/Box';
import * as mpaaActions from './mpaa-actions';

class MPAA extends Component {
  componentWillMount = () => {
    this.props.updateMPAASelections(this.props.mpaaArray);
  };

  toggleMPAA = label => {
    if (this.props.mpaaRating.includes(label)) {
      remove(this.props.mpaaRating, mpaaRating => mpaaRating === label);
    } else {
      this.props.mpaaRating.push(label);
    }
    this.props.updateMPAASelections(this.props.mpaaRating);
  };

  createMPAA = label => <Box label={label} handleMPAAChange={this.toggleMPAA} key={label} />;

  createMPAASelections = () => this.props.mpaaArray.map(this.createMPAA);

  render() {
    return <div className="col-sm-6 text-center pt-2">{this.createMPAASelections()}</div>;
  }
}

const mapStateToProps = state => ({
  mpaaRating: state.mpaaRating
});

const mapDispatchToProps = dispatch => bindActionCreators(mpaaActions, dispatch);

MPAA.propTypes = {
  updateMPAASelections: PropTypes.func.isRequired,
  mpaaRating: PropTypes.arrayOf(PropTypes.string).isRequired,
  mpaaArray: PropTypes.arrayOf(PropTypes.string).isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(MPAA);
