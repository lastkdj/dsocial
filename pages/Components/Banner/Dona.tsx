import React from "react";
import Button from "@material-ui/core/Button";
import { FormattedMessage } from "react-intl";

const ButtonDona = () => {
  return (
    <div>
      <Button variant="contained" className="dona_button_banner">
        <FormattedMessage
          id="banner.botonDonar"
          defaultMessage="Quiero Donar!"
        />
      </Button>
    </div>
  );
};

export default ButtonDona;
