import React from 'react';
import { Button, ButtonToolbar, Glyphicon } from 'react-bootstrap';

const Buttons = () => (
  <ButtonToolbar className="col-sm-3 align-self-center minHeight34">
    <Button bsSize="small" className="btn-custom-main btn-65px">
      <Glyphicon glyph="bookmark" />
    </Button>

    <Button bsSize="small" className="btn-custom-main btn-110px">
      <Glyphicon glyph="search" />
    </Button>

    <Button bsSize="small" className="btn-custom-main btn-65px">
      <Glyphicon glyph="save" />
    </Button>
  </ButtonToolbar>
);
export default Buttons;
