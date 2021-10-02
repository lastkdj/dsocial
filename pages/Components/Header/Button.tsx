import React from "react";
import Button from "@material-ui/core/Button";
import Link from "next/link";

const ButtonDona = () => {
  return (
    <Link href="/Donacion">
      <div>
        <Button variant="contained" className="dona_button">
          Dona Aquí
        </Button>
      </div>
    </Link>
  );
};

export default ButtonDona;
