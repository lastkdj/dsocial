import React, { useEffect, useState } from "react";
import { Grid, Typography } from "@material-ui/core";
import Image from "next/image";
import { useMediaQuery } from "react-responsive";
import Dialog from "@mui/material/Dialog";
import { FormattedMessage } from "react-intl";

export interface SimpleDialogProps {
  open: boolean;
  selectedValue: string;
  onClose: (value: string) => void;
}

const Finance = () => {
  const isLaptop = useMediaQuery({ query: "(max-width: 1366px)" });
  const isTablet = useMediaQuery({ query: "(max-width: 960px)" });

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (value: string) => {
    setOpen(false);
  };

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

    const fadeElms = document.querySelectorAll(".fin_container_right");

    const observer = new IntersectionObserver(
      observerCallback,
      observerOptions
    );
    fadeElms.forEach((el) => observer.observe(el));
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
          entry.target.classList.replace("fadeOut", "fadeIn");
        } else {
          // fade out observed elements that are not in view
          return;
        }
      });
    };

    const fadeElms = document.querySelectorAll(".fin_container_left");

    const observer = new IntersectionObserver(
      observerCallback,
      observerOptions
    );
    fadeElms.forEach((el) => observer.observe(el));
  }, []);

  return (
    <Grid container className="big_fin_container" id="finance">
      <Dialog onClose={handleClose} open={open}>
        <Image src="/articulos.jpg" alt="" width={900} height={600} />
      </Dialog>
      <Grid
        container
        item
        sm={12}
        md={6}
        justifyContent="center"
        alignItems="center"
        className="fin_container_left fadeOut"
      >
        <Grid
          item
          container
          xs={12}
          className="fin_image"
          justifyContent="center"
        ></Grid>
      </Grid>
      <Grid
        container
        item
        sm={12}
        md={6}
        className="fin_container_right fadeOut"
      >
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
                <span className="about_tittle_span">
                  <FormattedMessage
                    id="finance.titulo"
                    defaultMessage="FINANCIAMIENTO"
                  />
                </span>
              </Typography>
            </Grid>
            <Grid item xs={12} container justifyContent="center">
              <Typography className="fin_tittle">
                {" "}
                <FormattedMessage
                  id="finance.titulodos"
                  defaultMessage=" DE PROYECTOS"
                />
              </Typography>
            </Grid>
          </Grid>

          <Grid container item xs={12}>
            <Typography className="fin_text">
              {" "}
              <FormattedMessage
                id="finance.descripcion1"
                defaultMessage="DS&H recibi?? el apoyo financiero de la"
              />{" "}
              <span className="fin_tittle_span">
                <FormattedMessage
                  id="finance.descripcion2"
                  defaultMessage="Universidad de Columbia"
                />
              </span>{" "}
              <FormattedMessage
                id="finance.descripcion3"
                defaultMessage="en Nueva York,"
              />{" "}
              <span className="fin_tittle_span">
                <FormattedMessage
                  id="finance.descripcion4"
                  defaultMessage="Palms for Life, Fondation Air France, UBS, Kraft, Lafarge"
                />
              </span>
              <FormattedMessage
                id="finance.descripcion5"
                defaultMessage=", y beneficio de los fondos de cooperaci??n de las"
              />{" "}
              <span className="fin_tittle_span">
                <FormattedMessage
                  id="finance.descripcion6"
                  defaultMessage="Embajadas de Alemania y Francia en Ecuador."
                />
              </span>{" "}
              <FormattedMessage
                id="finance.descripcion7"
                defaultMessage=" DS&H Ecuador fue "
              />
              <span className="fin_tittle_span">
                <FormattedMessage
                  id="finance.descripcion8"
                  defaultMessage="premiado"
                />
              </span>{" "}
              <FormattedMessage
                id="finance.descripcion9"
                defaultMessage="en 2011 por el"
              />{" "}
              <span className="fin_tittle_span">
                <FormattedMessage
                  id="finance.descripcion10"
                  defaultMessage="Banco Interamericano de Desarrollo"
                />
              </span>{" "}
              <FormattedMessage
                id="finance.descripcion11"
                defaultMessage=" por Buenas Pr??cticas de prevenci??n del delito en Am??rica Latina y
                El Caribe."
              />
            </Typography>
          </Grid>
          <Grid container item xs={12}>
            <Typography className="fin_text">
              <FormattedMessage
                id="finance.descripcion12"
                defaultMessage="Igualmente, DS&H Ecuador trabajo en red con los servicios
                municipales de educaci??n, salud y atenci??n social de las
                provincias de Pichincha e Imbabura, y junto con el"
              />{" "}
              <span className="fin_tittle_span">
                <FormattedMessage
                  id="finance.descripcion13"
                  defaultMessage="Consejo Nacional de la Ni??ez y Adolescencia del Ecuador"
                />
              </span>{" "}
              <FormattedMessage id="finance.descripcion14" defaultMessage="y" />
              <span className="fin_tittle_span">
                <FormattedMessage
                  id="finance.descripcion15"
                  defaultMessage="Save the Children"
                />
              </span>{" "}
              <FormattedMessage
                id="finance.descripcion16"
                defaultMessage="desarrollaron un estudio del estado de"
              />{" "}
              <span className="fin_tittle_span">
                <FormattedMessage
                  id="finance.descripcion17"
                  defaultMessage="violencia contra ni??os y adolescentes en Ecuador."
                />
              </span>
            </Typography>
            <Grid container item xs={12} justifyContent="flex-end">
              <Typography
                className="articulos"
                style={{ textAlign: "end", cursor: "pointer" }}
                onClick={handleClickOpen}
              >
                <FormattedMessage
                  id="finance.descripcion18"
                  defaultMessage="Articulos DS&H en el mundo"
                />
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Finance;
