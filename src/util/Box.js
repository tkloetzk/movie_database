import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Box extends Component {
  state = { hover: false };

  toggleHover = () => {
    this.setState({ hover: !this.state.hover });
  };
  addMPAA = e => {
    console.log(e.target.textContent);
  };
  render() {
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
    let hoverStyle;
    if (this.state.hover) {
      hoverStyle = { backgroundColor: 'cornflowerblue', color: 'white', cursor: 'pointer' };
    } else {
      hoverStyle = { backgroundColor: 'white', color: 'cornflowerblue', cursor: 'default' };
    }

    return (
      <div
        style={{ ...letterStyle, ...hoverStyle }}
        className="rounded"
        role="button"
        tabIndex="0"
        onMouseEnter={this.toggleHover}
        onMouseLeave={this.toggleHover}
        onKeyDown={this.addMPAA}
        onClick={this.addMPAA}
      >
        {this.props.children}
      </div>
    );
  }
}
Box.propTypes = {
  children: PropTypes.string.isRequired
};
