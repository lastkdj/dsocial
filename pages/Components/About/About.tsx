import React, { useEffect } from "react";
import { Grid, Typography } from "@material-ui/core";
import Image from "next/image";
import { FormattedMessage } from "react-intl";

const About = () => {
  useEffect(() => {
    const observerOptions = {
      root: null,
      threshold: 0.7,
    };

    const observerCallback = (entries: any, observer: any) => {
      entries.forEach((entry: any) => {
        if (entry.isIntersecting) {
          // fade in observed elements that are in view
          entry.target.classList.replace("fadeOut", "fadeInBot");
        } else {
          // fade out observed elements that are not in view
          return;
        }
      });
    };

    const fadeElms = document.querySelectorAll(".about_grid_container");
    const fadeElmstwo = document.querySelectorAll(".about_grid_container_two");
    const fadeElmsthree = document.querySelectorAll(
      ".about_grid_container_three"
    );

    const observer = new IntersectionObserver(
      observerCallback,
      observerOptions
    );
    fadeElms.forEach((el) => observer.observe(el));
    fadeElmstwo.forEach((el) => observer.observe(el));
    fadeElmsthree.forEach((el) => observer.observe(el));
  }, []);

  return (
    <Grid
      container
      justifyContent="center"
      className="about_container"
      id="about"
    >
      <Grid container item xs={12} md={6} className="about_grid_picture"></Grid>

      <Grid container item xs={12} md={6} className="about_grid_flat">
        {" "}
        <Grid container justifyContent="center" item xs={12}>
          <Typography className="about_tittle">
            <span className="about_tittle_span">
              {" "}
              <FormattedMessage id="about.tituloQue" defaultMessage="¿QUE" />
            </span>{" "}
            <FormattedMessage
              id="about.tituloHacemos"
              defaultMessage="HACEMOS?"
            />
          </Typography>
        </Grid>
        <Grid container item xs={12} className="about_grid_container fadeOut">
          <Typography className="about_span">
            <FormattedMessage
              id="about.descripcionUno"
              defaultMessage="DS&H es una fundación de carácter no lucrativo que busca mejorar las
            condiciones de vida de las personas que se encuentran en situación
            de vulnerabilidad social. DS&H ha buscado siempre acercarse a través
            de la educación, con un especial interés por niñas, niños y
            adolescentes ya que creemos que en ellos esta la llave de un futuro
            más equitativo."
            />
          </Typography>
        </Grid>
        <Grid
          container
          item
          xs={12}
          className="about_grid_container_two fadeOut"
        >
          <Typography className="about_span">
            <FormattedMessage
              id="about.descripcionDos"
              defaultMessage="  
            Hoy DS&H se propone un nuevo desafió, que es la sustentabilidad,
            creemos urgente la preocupación por el medio ambiente y esto a toda
            escala social. Es por eso que tenemos el propósito de llevar a los
            campamentos, viviendas sociales y escuelas publicas de Santiago, el
            concepto del reciclaje de residuos. Trabajaremos, capacitando a las
            familias en la recolección, en la transformación de estos residuos y
            aportando, al final del proyecto, un producto que genere una
            economía circular para las familias que necesiten una fuente
            laboral."
            />
          </Typography>
        </Grid>{" "}
        <Grid
          container
          item
          xs={12}
          className="about_grid_container_three fadeOut"
        >
          <Typography className="about_span">
            <FormattedMessage
              id="about.descripcionTras"
              defaultMessage="Para poder realizar estos proyectos, DS&H Chile busca al igual que en sus proyectos anteriores, trabajar con apoyos financieros nacionales e internacionales, tanto privados como públicos, fomentando la corresponsabilidad. Estas entidades deberán estar preocupadas por el medio ambiente para así poder generar proyectos que estén acuerdo con nuestro propósito de mejorar la calidad de vida de las personas desde la sustentabilidad."
            />
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default About;
