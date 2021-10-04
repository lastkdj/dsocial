import * as React from "react";
import { Grid, Typography } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import Link from "next/link";
import { Result } from "antd";
import "antd/dist/antd.css";
import Snackbar from "@mui/material/Snackbar";
import {
  FormControl,
  InputLabel,
  Input,
  FormHelperText,
  TextField,
} from "@mui/material/";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import emailjs from "emailjs-com";
import { FormattedMessage } from "react-intl";

const Donacion = () => {
  const [tipo, setTipo] = React.useState("");
  const [time, setTime] = React.useState("");
  const [project, setProject] = React.useState("");
  const [open, setOpen] = React.useState(false);

  const handleChange = (event: SelectChangeEvent) => {
    setTipo(event.target.value as string);
  };

  const handleChangeTime = (event: SelectChangeEvent) => {
    setTime(event.target.value as string);
  };

  const handleChangeProject = (event: SelectChangeEvent) => {
    setProject(event.target.value as string);
  };

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

  const setBack = () => {
    setOpen(false);
  };

  return (
    <Grid container className="voluntario_container" justifyContent="center">
      {open ? (
        <Grid className="fade_in_success">
          <Result
            className="fade_in_success"
            status="success"
            title="Su mensaje ha sido Enviado"
          />{" "}
          <Grid>
            <Button
              variant="contained"
              className="voluntario_button_banner"
              onClick={setBack}
            >
              Nuevo Voluntario
            </Button>
            ,
            <Link href="/">
              <Grid item xs={12} container justifyContent="center">
                <Button variant="contained" className="dona_button_banner_back">
                  Regresar
                </Button>
              </Grid>
            </Link>
          </Grid>
          ,
        </Grid>
      ) : (
        <Grid container justifyContent="center" className="fade_in_success">
          <Grid
            item
            container
            xs={12}
            justifyContent="center"
            alignItems="center"
          >
            <Typography className="donacion_tittle">
              <FormattedMessage
                id="voluntario.titulo"
                defaultMessage="FORMULARIO DE VOLUNTARIADO"
              />
            </Typography>
          </Grid>
          <Grid
            item
            container
            justifyContent="center"
            className="voluntario_padding"
            xs={12}
            sm={7}
            lg={5}
            xl={3}
          >
            <form onSubmit={sendEmail} style={{ display: "contents" }}>
              <Grid
                item
                container
                xs={12}
                lg={10}
                xl={12}
                justifyContent="center"
                className="voluntario_input"
              >
                <TextField
                  id="outlined-basic"
                  label="Nombre Completo"
                  variant="outlined"
                  fullWidth={true}
                  name="from_name"
                  required
                />
              </Grid>
              <Grid
                item
                container
                lg={10}
                xl={12}
                justifyContent="center"
                className="voluntario_input"
              >
                <TextField
                  id="outlined-basic"
                  label="Numero de Contacto"
                  variant="outlined"
                  name="from_number"
                  fullWidth={true}
                  required
                  type="number"
                />
              </Grid>
              <Grid
                item
                container
                lg={10}
                xl={12}
                justifyContent="center"
                className="voluntario_input"
              >
                <TextField
                  id="outlined-basic"
                  label="Email"
                  variant="outlined"
                  name="from_email"
                  type="email"
                  fullWidth={true}
                  required
                />
              </Grid>
              <Grid
                item
                container
                lg={10}
                xl={12}
                justifyContent="center"
                className="voluntario_input"
              >
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">
                    Tipo de Voluntariado
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={tipo}
                    label="Tipo de Voluntariado"
                    onChange={handleChange}
                    name="from_voluntario"
                    required
                  >
                    <MenuItem value={"Apoyo en Terreno"}>
                      Apoyo en Terreno
                    </MenuItem>
                    <MenuItem value={"Apoyo Online"}>Apoyo Online</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid
                item
                container
                lg={10}
                xl={12}
                justifyContent="center"
                className="voluntario_input"
              >
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">
                    Tiempo disponible
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={time}
                    label="   Tiempo disponible"
                    onChange={handleChangeTime}
                    name="from_time"
                    required
                  >
                    <MenuItem value={"Punctual"}>Punctual</MenuItem>
                    <MenuItem value={"1 Medio dia por Mes"}>
                      1 Medio dia por Mes
                    </MenuItem>
                    <MenuItem value={"Mas"}>Mas</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid
                item
                container
                lg={10}
                xl={12}
                justifyContent="center"
                className="voluntario_input"
              >
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">
                    Selecciona el Proyecto{" "}
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={project}
                    label="Selecciona el Proyecto"
                    onChange={handleChangeProject}
                    name="from_project"
                    required
                  >
                    <MenuItem value={"Apoyo General"}>Apoyo General</MenuItem>
                    <MenuItem value={"Las Tortolas"}>Las Tortolas</MenuItem>
                    <MenuItem value={"Puente Alto"}>Puente Alto</MenuItem>
                    <MenuItem value={"San Miguel"}>San Miguel</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid
                item
                container
                lg={10}
                xs={12}
                xl={12}
                justifyContent="center"
                className="voluntario_input"
              >
                <TextField
                  id="outlined-basic"
                  label="Desde Cuando"
                  variant="outlined"
                  fullWidth={true}
                  name="from_date"
                  required
                />
              </Grid>
              <Grid item xs={12} container justifyContent="center">
                <Button
                  variant="contained"
                  className="voluntario_button_banner"
                  type="submit"
                >
                  Enviar
                </Button>
              </Grid>
              <Link href="/">
                <Grid item xs={12} container justifyContent="center">
                  <Button
                    variant="contained"
                    className="dona_button_banner_back"
                  >
                    Regresar
                  </Button>
                </Grid>
              </Link>
            </form>
            <Snackbar
              style={{ width: "300px" }}
              open={open}
              autoHideDuration={3000}
              onClose={handleClose}
              message="Enviado!"
              anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
            />
          </Grid>{" "}
          <Grid item container justifyContent="center">
            <Typography>contacto@dshchile.org</Typography>
          </Grid>
        </Grid>
      )}
    </Grid>
  );
};

export default Donacion;
