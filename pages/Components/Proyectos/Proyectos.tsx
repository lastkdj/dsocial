import React, { useEffect } from "react";
import { Grid, Typography } from "@material-ui/core";
import Image from "next/image";
import { useMediaQuery } from "react-responsive";

const Experience = () => {
  const isLaptop = useMediaQuery({ query: "(max-width: 1366px)" });

  return <Grid container id="finance" style={{ height: "600px" }}></Grid>;
};

export default Experience;
