import React from 'react';
import { Button, ButtonToolbar } from 'react-bootstrap';

const Buttons = () => (
  <ButtonToolbar className="col-sm-3">
    {/* Standard button */}
    <Button bsSize="small" className="outline btn-custom-main">
      Default
    </Button>

    {/* Provides extra visual weight and identifies the primary action in a set of buttons */}
    <Button bsSize="small" className="outline btn-custom-main">
      SEARCH
    </Button>

    {/* Indicates a successful or positive action */}
    <Button bsSize="small" className="outline btn-custom-main">
      SAVE
    </Button>
  </ButtonToolbar>
);
export default Buttons;
