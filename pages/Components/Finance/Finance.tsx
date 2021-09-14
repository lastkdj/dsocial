import React, { useEffect } from "react";
import { Grid, Typography } from "@material-ui/core";
import Image from "next/image";
import { useMediaQuery } from "react-responsive";

const Finance = () => {
  const isLaptop = useMediaQuery({ query: "(max-width: 1366px)" });
  const isTablet = useMediaQuery({ query: "(max-width: 960px)" });

  return (
    <Grid container className="big_fin_container" id="finance">
      <Grid
        container
        item
        sm={12}
        md={6}
        justifyContent="center"
        alignItems="center"
        className="fin_container_left"
      >
        <Grid
          item
          container
          xs={12}
          className="fin_image"
          justifyContent="center"
        >
          <Image
            src="/save.png"
            alt=""
            width={isLaptop ? 400 : 600}
            height={isLaptop ? 250 : 400}
          />
        </Grid>
      </Grid>
      <Grid container item sm={12} md={6} className="fin_container_right">
        <Grid
          item
          container
          sm={12}
          md={10}
          lg={10}
          xl={8}
          className="fin_right_container"
        >
          <Grid container item xs={12}>
            <Grid item xs={12}>
              <Typography className="fin_tittle">
                <span className="about_tittle_span">FINANCIAMIENTO</span>
              </Typography>
            </Grid>
            <Grid item xs={12} container justifyContent="center">
              <Typography className="fin_tittle">DE PROYECTOS</Typography>
            </Grid>
          </Grid>

          <Grid container item xs={12}>
            <Typography className="fin_text">
              DS&H recibió el apoyo financiero de la{" "}
              <span className="fin_tittle_span">Universidad de Columbia</span>{" "}
              en Nueva York,{" "}
              <span className="fin_tittle_span">
                Palms for Life, Fondation Air France, UBS, Kraft, Lafarge
              </span>
              , y beneficio de los fondos de cooperación de las{" "}
              <span className="fin_tittle_span">
                Embajadas de Alemania y Francia en Ecuador.
              </span>{" "}
              DS&H Ecuador fue <span className="fin_tittle_span">premiado</span>{" "}
              en 2011 por el{" "}
              <span className="fin_tittle_span">
                Banco Interamericano de Desarrollo
              </span>{" "}
              por Buenas Prácticas de prevención del delito en América Latina y
              El Caribe.
            </Typography>
          </Grid>
          <Grid container item xs={12}>
            <Typography className="fin_text">
              Igualmente, DS&H Ecuador trabajo en red con los servicios
              municipales de educación, salud y atención social de las
              provincias de Pichincha e Imbabura, y junto con el{" "}
              <span className="fin_tittle_span">
                Consejo Nacional de la Niñez y Adolescencia del Ecuador
              </span>{" "}
              y <span className="fin_tittle_span">Save the Children</span>{" "}
              desarrollaron un estudio del estado de{" "}
              <span className="fin_tittle_span">
                violencia contra niños y adolescentes en Ecuador.
              </span>
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Finance;
