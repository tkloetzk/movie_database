import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Box extends Component {
  state = { hover: false, isSelected: true };

  toggleHover = () => {
    this.setState({ hover: !this.state.hover });
  };

  toggleMPAAChange = () => {
    const { handleMPAAChange, label } = this.props;

    this.setState(({ isSelected }) => ({
      isSelected: !isSelected
    }));

    handleMPAAChange(label);
  };

  render() {
    const { label } = this.props;
    const { isSelected } = this.state;

    const letterStyle = {
      paddingTop: 10,
      paddingBottom: 10,
      paddingLeft: 15,
      paddingRight: 15,
      margin: 10,
      display: 'inline-block',
      fontFamily: 'monospace',
      fontSize: 15,
      textAlign: 'center',
      border: '1px solid cornflowerblue'
    };
    let activeStyle;
    if (this.state.hover || isSelected) {
      activeStyle = { backgroundColor: 'cornflowerblue', color: 'white', cursor: 'pointer' };
    } else {
      activeStyle = { backgroundColor: 'white', color: 'cornflowerblue', cursor: 'default' };
    }

    return (
      <div
        style={{ ...letterStyle, ...activeStyle }}
        className={'rounded'}
        role="button"
        tabIndex="0"
        onMouseEnter={this.toggleHover}
        onMouseLeave={this.toggleHover}
        onKeyDown={this.toggleMPAAChange}
        onClick={this.toggleMPAAChange}
      >
        {label}
      </div>
    );
  }
}
Box.propTypes = {
  label: PropTypes.string.isRequired,
  handleMPAAChange: PropTypes.func.isRequired
};
