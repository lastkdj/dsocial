import React, { useEffect } from "react";
import { Grid, Typography } from "@material-ui/core";
import Image from "next/image";
import { useMediaQuery } from "react-responsive";
import { FormattedMessage } from "react-intl";

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
    <Grid container className="big_exp_container" id="exp">
      <Grid container className="exp_container">
        <Grid
          item
          container
          md={5}
          lg={4}
          xl={4}
          className="exp_left_container fadeOut"
        >
          <Grid container item xs={12} id="exp">
            <Typography className="exp_tittle">
              <span className="about_tittle_span">
                <FormattedMessage
                  id="experience.titulo"
                  defaultMessage="EXPERIENCIA"
                />
              </span>{" "}
              <FormattedMessage
                id="experience.titulodos"
                defaultMessage="DS&H"
              />
            </Typography>
          </Grid>
          <Grid container item xs={12} justifyContent="flex-end">
            <Typography className="exp_tittle_two">
              <FormattedMessage
                id="experience.subtitulo"
                defaultMessage="Ecuador y Francia"
              />
            </Typography>
          </Grid>
          <Grid container item xs={12}>
            <Typography className="exp_text">
              <FormattedMessage
                id="experience.descripcionUno"
                defaultMessage=" Desarrollo Social y H??bitat (DS&H) empez?? su trayectoria en
              Ecuador en 2008 con el fin de apoyar a NNA en situaci??n de riesgo
              y fortalecerlos en el ??mbito emocional y educativo."
              />
            </Typography>
          </Grid>
          <Grid container item xs={12}>
            <Typography className="exp_text">
              <FormattedMessage
                id="experience.descripcionDos"
                defaultMessage="A partir de un proyecto literario Viajando con Ni??os, realizado
              con NNA institucionalizados y de la calle, DS&H se estableci??
              formalmente como ONG ecuatoriana en Mayo 2009. Pocos meses despu??s
              y con el fin de levantar fondos para sus operaciones en Ecuador,
              DS&H France fue creado."
              />
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
            <FormattedMessage
              id="experience.descripcionTres"
              defaultMessage="Con el apoyo de la ONG belga Mobil School, DS&H llev?? la educaci??n a la calle con el proyecto de educaci??n popular Cu??ntamelo Todo Quito en Junio 2009 y Cu??ntamelo Todo Ibarra (ciudad al norte de Quito) en Octubre 2011. En el 2012 estos proyectos fueron transferidos a Fe & Alegr??a y m??s de 10 a??os despu??s, siguen promoviendo desde la calle estrategias y herramientas innovadoras enfocadas en los derechos de los ni??os y el desarrollo personal de los j??venes."
            />
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Experience;
