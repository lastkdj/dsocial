import React, { useEffect } from "react";
import { Grid, Typography } from "@material-ui/core";
import Avatar from "@material-ui/core/Avatar";

const Who = () => {
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

    const fadeElms = document.querySelectorAll(".who_grid_container_right");
    const fadeElmsText = document.querySelectorAll(".text_container");

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

    const fadeElms = document.querySelectorAll(".who_grid_container");
    const fadeElmsText = document.querySelectorAll(".text_container_left");

    const observer = new IntersectionObserver(
      observerCallback,
      observerOptions
    );
    fadeElms.forEach((el) => observer.observe(el));
    fadeElmsText.forEach((el) => observer.observe(el));
  }, []);

  return (
    <Grid container className="who_container" id="who">
      <Grid
        container
        justifyContent="center"
        item
        xs={12}
        className="who_tittle_container"
      >
        <Typography className="who_tittle">
          <span className="about_tittle_span">¿QUIENES</span> SOMOS?
        </Typography>
      </Grid>
      <Grid container>
        <Grid
          container
          item
          sm={12}
          md={6}
          lg={6}
          className="who_grid_container fadeOut"
          style={{ order: 0 }}
        >
          <Typography className="who_name">Marisol Molina</Typography>
          <Avatar
            src="https://i.imgur.com/eNLmvNv.jpg"
            alt=""
            className="avatar"
          ></Avatar>
        </Grid>
        <Grid
          container
          item
          sm={12}
          md={5}
          lg={5}
          className="text_container fadeOut"
          style={{ order: 1 }}
        >
          <Typography className="who_text_tittle">
            Arquitecta, especialista en sociologia urbana y vivienda sociales
          </Typography>
          <Typography className="who_text">
            Máster en Arquitectura en la ENSA Paris-Malaquais (Francia), y
            diplomado en Hábitat Residencial en Contexto de Vulnerabilidad
            Social en Universidad de Chile y Postulante Doctorado en Sociología
            Urbana en Universidad de Lorraine (Francia).
          </Typography>
          <Typography className="who_text">
            Cuenta con una vasta experiencia en oficina de arquitectura
            sustentable y también en fundaciones como «Un Techo para Chile».
            Gracias al trabajo en terreno que ha realizado para su investigación
            de doctorado, cuenta con un bagaje social relacionado con temas como
            : la mixtura urbana y social, renovación urbana y intervenciones de
            barrios.
          </Typography>
        </Grid>
      </Grid>

      <Grid container style={{ justifyContent: "center" }}>
        <Grid
          container
          item
          sm={12}
          md={5}
          lg={5}
          className="text_container_left fadeOut"
        >
          <Typography className="who_text_tittle_laetita">
            Internacionalista, especialista en temas de la niñez y movilización
            de recursos
          </Typography>
          <Typography className="who_text">
            Maestría en Política mención América Latina, de la Universidad de
            Londres (UK), y diplomado de gerencia social de la Universidad
            Católica Andrés Bello de Caracas (Venezuela).
          </Typography>
          <Typography className="who_text">
            Trabajó durante 20 años con ONG humanitarias y de desarrollo social
            en Europa y América Latina, con interés particular en temas de
            derechos de l@s niñ@s, entre otros : Médecin du Monde, Medecin sans
            Frontieres, Fe y Alegría, Plan International, Save the Children y
            Better Cotton Initiative.
          </Typography>
        </Grid>
        <Grid
          container
          item
          sm={12}
          md={6}
          lg={5}
          className="who_grid_container_right fadeOut"
        >
          {" "}
          <Avatar
            src="https://i.imgur.com/VvxWNFR.png"
            alt=""
            className="avatar"
          ></Avatar>
          <Typography className="who_name">Laetitia Courtois</Typography>
        </Grid>
      </Grid>
      <Grid container>
        <Grid
          container
          justifyContent="flex-end"
          item
          sm={12}
          md={6}
          lg={6}
          className="who_grid_container fadeOut"
          style={{ order: 4 }}
        >
          <Typography className="who_name">Pierre Krop</Typography>{" "}
          <Avatar
            src="https://i.imgur.com/eVlHS1h.png"
            alt=""
            className="avatar"
          ></Avatar>
        </Grid>
        <Grid
          container
          item
          sm={12}
          md={5}
          lg={5}
          className="text_container fadeOut"
          style={{ order: 5 }}
        >
          <Typography className="who_text_tittle">
            Ingeniero geólogo, especialista en subsuelo
          </Typography>
          <Typography className="who_text">
            Máster en geotecnia en la ENSG de Ingeniería de Nancy (Francia)
          </Typography>
          <Typography className="who_text">
            Experiencia de más de diez años en una empresa de subsuelo, hacen de
            él un especialista de la construcción.Amante del deporte y de la
            naturaleza, su gran interés reside en generar menos residuos. Su
            preocupación se enfoca en trabajar siempre con materias primas que
            permitan soluciones a largo plazo.
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Who;
