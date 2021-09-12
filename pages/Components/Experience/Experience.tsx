import React, { useEffect } from "react";
import { Grid, Typography } from "@material-ui/core";
import Image from "next/image";
import { useMediaQuery } from "react-responsive";

const Experience = () => {
  const isLaptop = useMediaQuery({ query: "(max-width: 1366px)" });

  useEffect(() => {
    const observerOptions = {
      root: null,
      threshold: 0.7,
    };

    const observerCallback = (entries: any, observer: any) => {
      entries.forEach((entry: any) => {
        if (entry.isIntersecting) {
          // fade in observed elements that are in view
          entry.target.classList.replace("fadeOut", "fadeInRight");
        } else {
          // fade out observed elements that are not in view
          return;
        }
      });
    };

    const fadeElms = document.querySelectorAll(".exp_left_container");
    const fadeElmsText = document.querySelectorAll(".exp_left_container_two");

    const observer = new IntersectionObserver(
      observerCallback,
      observerOptions
    );
    fadeElms.forEach((el) => observer.observe(el));
    fadeElmsText.forEach((el) => observer.observe(el));
  }, []);

  useEffect(() => {
    const observerOptions = {
      root: null,
      threshold: 0.7,
    };

    const observerCallback = (entries: any, observer: any) => {
      entries.forEach((entry: any) => {
        if (entry.isIntersecting) {
          // fade in observed elements that are in view
          entry.target.classList.replace("fadeOut", "fadeInLeft");
        } else {
          // fade out observed elements that are not in view
          return;
        }
      });
    };

    const fadeElms = document.querySelectorAll(".exp_right_container");
    const fadeElmsText = document.querySelectorAll(".exp_right_container_two");

    const observer = new IntersectionObserver(
      observerCallback,
      observerOptions
    );
    fadeElms.forEach((el) => observer.observe(el));
    fadeElmsText.forEach((el) => observer.observe(el));
  }, []);

  return (
    <Grid container className="big_exp_container">
      <Grid container className="exp_container">
        <Grid
          item
          container
          md={5}
          lg={4}
          xl={4}
          className="exp_left_container fadeOut"
        >
          <Grid container item xs={12}>
            <Typography className="exp_tittle">
              <span className="about_tittle_span">EXPERIENCIA</span> DS&H
            </Typography>
          </Grid>
          <Grid container item xs={12} justifyContent="flex-end">
            <Typography className="exp_tittle_two">
              Ecuador y Francia
            </Typography>
          </Grid>
          <Grid container item xs={12}>
            <Typography className="exp_text">
              Desarrollo Social y Hábitat (DS&H) empezó su trayectoria en
              Ecuador en 2008 con el fin de apoyar a NNA en situación de riesgo
              y fortalecerlos en el ámbito emocional y educativo.
            </Typography>
          </Grid>
          <Grid container item xs={12}>
            <Typography className="exp_text">
              A partir de un proyecto literario Viajando con Niños, realizado
              con NNA institucionalizados y de la calle, DS&H se estableció
              formalmente como ONG ecuatoriana en Mayo 2009. Pocos meses después
              y con el fin de levantar fondos para sus operaciones en Ecuador,
              DS&H France fue creado.
            </Typography>
          </Grid>
        </Grid>
        <Grid item container xs={6} className="exp_right_container fadeOut">
          <Image
            src="/exp.png"
            alt=""
            width={isLaptop ? 470 : 670}
            height={isLaptop ? 310 : 450}
          />
        </Grid>
        <Grid item container xs={6} className="exp_left_container_two fadeOut">
          <Image src="/puppets.png" alt="" width="600px" height="420px" />
        </Grid>{" "}
        <Grid
          item
          container
          md={5}
          lg={4}
          xl={4}
          className="exp_right_container_two fadeOut"
        >
          <Typography className="exp_text">
            A partir de un proyecto literario Viajando con Niños, realizado con
            NNA institucionalizados y de la calle, DS&H se estableció
            formalmente como ONG ecuatoriana en Mayo 2009. Pocos meses después y
            con el fin de levantar fondos para sus operaciones en Ecuador, DS&H
            France fue creado.
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Experience;
