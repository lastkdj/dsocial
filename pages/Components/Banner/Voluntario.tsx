import React from "react";
import Button from "@material-ui/core/Button";
import { FormattedMessage } from "react-intl";

const ButtonVoluntario = () => {
  return (
    <div>
      <Button variant="contained" className="dona_button_banner">
        <FormattedMessage
          id="banner.botonVoluntario"
          defaultMessage="   Voluntario"
        />
      </Button>
    </div>
  );
};

export default ButtonVoluntario;
