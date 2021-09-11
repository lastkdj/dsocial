import React from "react";
import { Grid, Typography } from "@material-ui/core";

const About = () => {
  return (
    <Grid container justify="center" className="about_container" id="about">
      <Grid container justify="center" item xs={12}>
        <Grid className="about_span_container">
          <Grid className="about_span_befeore"></Grid>
          <Typography className="about_span">ABOUT</Typography>
          <Grid className="about_span_after"></Grid>
        </Grid>
      </Grid>
      <Grid container justify="center" item xs={12}>
        <Typography className="about_tittle">About Me</Typography>
      </Grid>
      <Grid
        container
        item
        justify="center"
        xs={12}
        className="about_grid_container fadeOut"
      >
        <Grid
          container
          justify="center"
          item
          xs={6}
          sm={3}
          xl={2}
          className="about_grid"
        ></Grid>

        <Grid
          container
          justify="center"
          item
          xs={6}
          sm={3}
          xl={2}
          className="about_grid"
        ></Grid>
        {/* <hr className="about_hr" /> */}
        <Grid
          container
          justify="center"
          item
          xs={6}
          sm={3}
          xl={2}
          className="about_grid"
        ></Grid>

        <Grid
          container
          justify="center"
          item
          xs={6}
          sm={3}
          xl={2}
          className="about_grid"
        ></Grid>
      </Grid>
      <Grid
        item
        xs={4}
        sm={2}
        md={2}
        lg={1}
        xl={1}
        className="bio_buttons"
      ></Grid>
    </Grid>
  );
};

export default About;
