import React from "react";
import Button from "@material-ui/core/Button";
import { Link } from "react-scroll";

const ButtonVoluntario = () => {
  return (
    <div>
      <Link
        activeClass="active"
        to="contact"
        spy={true}
        smooth={true}
        offset={-66}
        duration={1000}
      >
        <Button variant="contained" className="dona_button_banner">
          Voluntario
        </Button>
      </Link>
    </div>
  );
};

export default ButtonVoluntario;
