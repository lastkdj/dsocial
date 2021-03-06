import React, { useEffect, useState } from "react";
import { Grid, Typography } from "@material-ui/core";
import { useMediaQuery } from "react-responsive";
import Button from "@mui/material/Button";
import emailjs from "emailjs-com";
import Snackbar from "@mui/material/Snackbar";
import "react-phone-number-input/style.css";
import { FormattedMessage } from "react-intl";

const Proyectos = () => {
  const isLaptop = useMediaQuery({ query: "(max-width: 1366px)" });

  const [open, setOpen] = React.useState(false);

  const sendEmail = (e: any) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_74ygwyu",
        "template_5bu0jc9",
        e.target,
        "user_srd5fqbLmsiCxbMuGK9Yf"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    setOpen(true);
    e.target.reset();
  };

  const handleClose = (
    event: React.SyntheticEvent | React.MouseEvent,
    reason?: string
  ) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  return (
    <Grid
      container
      id="contact"
      className="contact_container"
      justifyContent="center"
    >
      <Grid item container xs={12} justifyContent="center">
        <Typography className="contact_tittle">
          {" "}
          <FormattedMessage id="contact.titulo" defaultMessage="CONTACTANOS" />
        </Typography>
      </Grid>
      <form onSubmit={sendEmail}>
        <Grid item container xs={12} justifyContent="center">
          <Grid
            item
            container
            xs={12}
            md={3}
            justifyContent="center"
            className="form_input_grid"
          >
            <Grid
              item
              container
              xs={12}
              alignItems="center"
              style={{ marginBottom: "10px" }}
            >
              <Typography className="contact_text_tittle">
                <FormattedMessage id="contact.nombre" defaultMessage="Nombre" />
              </Typography>
              <input className="form_input" name="from_name" required />
            </Grid>
            <Grid
              item
              container
              xs={12}
              alignItems="center"
              style={{ marginBottom: "10px" }}
            >
              <Typography className="contact_text_tittle">
                <FormattedMessage id="contact.email" defaultMessage="  Email" />
              </Typography>
              <input
                type="email"
                className="form_input"
                name="from_email"
                required
              />
            </Grid>{" "}
          </Grid>
          <Grid
            item
            container
            xs={12}
            md={3}
            justifyContent="center"
            className="form_input_grid"
          >
            <Grid
              item
              container
              xs={12}
              alignItems="center"
              style={{ marginBottom: "10px" }}
            >
              <Typography className="contact_text_tittle">
                {" "}
                <FormattedMessage
                  id="contact.telefono"
                  defaultMessage="Telefono"
                />
              </Typography>
              <input className="form_input" name="from_org" />
            </Grid>

            <Grid
              item
              container
              xs={12}
              alignItems="center"
              style={{ marginBottom: "10px" }}
            >
              <Typography className="contact_text_tittle">
                <FormattedMessage
                  id="contact.org"
                  defaultMessage="Organizaci??n / Instituci??n"
                />
              </Typography>
              <input className="form_input" name="from_org" />
            </Grid>
          </Grid>
        </Grid>

        <Grid item container xs={12} justifyContent="center">
          <Grid
            item
            xs={12}
            md={6}
            container
            alignItems="center"
            justifyContent="center"
          >
            <Typography className="contact_text_tittle">
              <FormattedMessage
                id="contact.descripcion"
                defaultMessage="Descripci??n"
              />
            </Typography>
          </Grid>
          <Grid
            item
            xs={12}
            md={6}
            container
            alignItems="center"
            justifyContent="center"
            className="form_input_grid"
            style={{ marginBottom: "10px" }}
          >
            <textarea className="form_input_description" name="from_message" />
          </Grid>
          <Grid
            container
            item
            xs={8}
            md={12}
            alignItems="center"
            justifyContent="center"
          >
            {" "}
            <Button
              variant="contained"
              className="form_button_banner"
              type="submit"
            >
              <FormattedMessage id="contact.boton" defaultMessage="Enviar" />{" "}
            </Button>
          </Grid>
          <Grid
            container
            item
            xs={6}
            md={12}
            alignItems="center"
            justifyContent="center"
            className="email_contact"
          >
            {" "}
            <Typography className="contact_text">
              <FormattedMessage
                id="contact.contact"
                defaultMessage="contacto@dshchile.org"
              />
            </Typography>
          </Grid>
        </Grid>
      </form>
      <Snackbar
        style={{ width: "300px" }}
        open={open}
        autoHideDuration={3000}
        onClose={handleClose}
        message="Enviado!"
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      />
    </Grid>
  );
};

export default Proyectos;
