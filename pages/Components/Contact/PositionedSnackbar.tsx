import * as React from "react";
import { Grid, Typography } from "@material-ui/core";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";

export interface Props {
  children: JSX.Element | JSX.Element[];
}

export default function PositionedSnackbar<Props>() {
  return (
    <Grid
      container
      style={{
        width: "150px",
        padding: "10px",
        color: "white",
        backgroundColor: "rgb(48 146 53)",
        borderRadius: "3px",
      }}
    >
      <Grid container alignItems="center" justifyContent="center" item xs={8}>
        {" "}
        Enviado!{" "}
      </Grid>
      <Grid container alignItems="center" justifyContent="center" item xs={4}>
        <CheckCircleOutlineIcon />{" "}
      </Grid>
    </Grid>
  );
}
