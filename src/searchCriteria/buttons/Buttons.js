import React from 'react';
import { Button, Glyphicon } from 'react-bootstrap';
import PropTypes from 'prop-types';

const Buttons = props => (
  <Button
    bsSize="small"
    className={`btn-custom-main ${props.btnSize} `}
    key={props.glyph}
    onClick={props.onClick}
  >
    <Glyphicon glyph={props.glyph} />
  </Button>
);

Buttons.propTypes = {
  btnSize: PropTypes.string.isRequired,
  glyph: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired
};

export default Buttons;
