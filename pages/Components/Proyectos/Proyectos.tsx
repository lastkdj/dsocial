import React, { useEffect } from "react";
import { Grid, Typography } from "@material-ui/core";
import Image from "next/image";
import { useMediaQuery } from "react-responsive";
import { EnvironmentOutlined } from "@ant-design/icons";

const Proyectos = () => {
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
          entry.target.classList.replace("fadeOut", "fadeInBot");
        } else {
          // fade out observed elements that are not in view
          return;
        }
      });
    };

    const fadeElms = document.querySelectorAll(".who_tittle_container");
    const fadeElmsText = document.querySelectorAll(".proy_tittle_text");

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
          entry.target.classList.replace("fadeOut", "fadeInBot");
        } else {
          // fade out observed elements that are not in view
          return;
        }
      });
    };

    const fadeElmsThree = document.querySelectorAll(".proy_job_grids");

    const observer = new IntersectionObserver(
      observerCallback,
      observerOptions
    );

    fadeElmsThree.forEach((el) => observer.observe(el));
  }, []);

  return (
    <Grid
      container
      id="proyectos"
      className="proyectos_container"
      justifyContent="center"
    >
      <Grid
        container
        justifyContent="center"
        item
        xs={12}
        className="who_tittle_container fadeOut"
      >
        <Typography className="proy_tittle">
          <span className="about_tittle_span">PROYECTOS</span> EN CONSTRUCCION
        </Typography>
      </Grid>
      <Grid
        container
        item
        xs={12}
        sm={12}
        md={10}
        lg={6}
        xl={6}
        justifyContent="center"
        className="proy_tittle_text fadeOut"
      >
        <Typography className="proy_text" style={{ textAlign: "center" }}>
          DS&H desea trabajar en terreno, dado la contingencia, nos
          focalizaremos este año en la Región Metropolitana. Cada uno de los
          proyectos con los cuales estamos trabajando nacen desde las
          necesidades del territorio. Por lo que es imperativo tener un vinculo
          estrecho con ellos.
        </Typography>
      </Grid>

      <Grid
        container
        item
        xs={12}
        justifyContent="center"
        className="proy_job_grids fadeOut"
      >
        <Grid
          container
          item
          xs={12}
          sm={12}
          md={5}
          lg={4}
          xl={3}
          className="proy_job"
          justifyContent="center"
        >
          <Grid container item justifyContent="center" className="translate">
            <Grid
              container
              item
              xs={2}
              justifyContent="center"
              alignItems="center"
              className="icon_back"
            >
              <EnvironmentOutlined className="icon" />
            </Grid>{" "}
            <Grid item xs={12}>
              <Typography className="proy_text_tittle">
                Campamento las Totoras{" "}
              </Typography>
              <Typography className="proy_country">Quilicura, Chile</Typography>
            </Grid>{" "}
            <Grid item xs={12}>
              <Typography className="proy_text">
                El campamento las Totoras nos acogido junto a su dirigenta
                Viviana, que nos ayudo a visualizar la poca preocupación por los
                desechos en este campamento. Es una comunidad emprendedora que
                desea y necesita preocuparse por el mañana. Queremos ayudarles a
                obtener todo lo necesario para que los residuos reciclables
                puedan transformarse en algo mejor para la comunidad, con el fin
                de fomentar la economía circular que estos residuos podrían
                generar.
              </Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid
          container
          item
          xs={12}
          sm={12}
          md={5}
          lg={4}
          xl={3}
          className="proy_job"
          justifyContent="center"
        >
          <Grid container item justifyContent="center" className="translate">
            <Grid
              container
              item
              xs={2}
              justifyContent="center"
              alignItems="center"
              className="icon_back"
            >
              <EnvironmentOutlined className="icon" />
            </Grid>{" "}
            <Grid item xs={12}>
              <Typography className="proy_text_tittle">
                Liceo Juan Mackena O’Relly
              </Typography>
              <Typography className="proy_country">
                Puente Alto, Chile
              </Typography>
            </Grid>{" "}
            <Grid item xs={12}>
              <Typography className="proy_text">
                El bienestar de l@s niños, niñas y adolescentes son la prioridad
                para DS&H es por eso que el liceo público Juan Mackena O’Relly
                en Puente Alto era el terreno adecuado para acoger un proyecto
                de transformación de residuos.
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid
        container
        item
        xs={12}
        sm={10}
        md={6}
        lg={12}
        xl={12}
        justifyContent="center"
        className="map_grid"
      >
        <Image
          src="/mapa.jpg"
          width={500}
          height={350}
          className="map_container"
        />
      </Grid>
    </Grid>
  );
};

export default Proyectos;
