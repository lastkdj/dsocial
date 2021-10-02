import { Grid, Typography } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import Link from "next/link";
import Image from "next/image";

const Donacion = () => {
  return (
    <Grid>
      <Grid container className="donacion_container">
        <Grid
          container
          item
          lg={6}
          xl={6}
          className="donacion_grid"
          alignItems="center"
        >
          <Grid container item lg={10} xl={7}>
            <Grid
              container
              item
              xs={12}
              justifyContent="center"
              style={{ margin: "50px 0px" }}
            >
              <Typography className="donacion_tittle">
                DATOS DE TRANSFERENCIA
              </Typography>
            </Grid>

            <Grid
              container
              item
              xs={12}
              className="text_grid"
              justifyContent="center"
            >
              <Typography className="donacion_text_tittle">
                Fundacion Desarrollo Social y Habitat Chi
              </Typography>
            </Grid>

            <Grid
              container
              item
              xs={12}
              className="text_grid"
              justifyContent="center"
            >
              <Image src="/bc.png" alt="" width={250} height={40} />
            </Grid>
            <Grid
              container
              item
              xs={12}
              className="text_grid"
              justifyContent="center"
            >
              <Typography className="donacion_text_tittle">
                RUT: <span className="donacion_text">652009913</span>
              </Typography>
            </Grid>
            <Grid
              container
              item
              xs={12}
              className="text_grid"
              justifyContent="center"
            >
              <Typography className="donacion_text_tittle">
                Cuenta Corriente:{" "}
                <span className="donacion_text">N° 001732609500</span>
              </Typography>
            </Grid>
            <Grid
              container
              item
              xs={12}
              className="text_grid"
              justifyContent="center"
            >
              <Typography className="donacion_text_tittle">
                Banco de Chile:{" "}
                <span className="donacion_text">Edwards-Citi</span>
              </Typography>
            </Grid>
            <Grid
              container
              item
              xs={12}
              className="text_grid"
              justifyContent="center"
            >
              <Typography className="donacion_text_tittle">
                Correo:{" "}
                <span className="donacion_text">dsh.chile@gmail.com</span>
              </Typography>
            </Grid>
          </Grid>
          <Grid>
            <Link href="/">
              <Grid item xs={12} container justifyContent="center">
                <Button variant="contained" className="dona_button_banner_back">
                  Regresar
                </Button>
              </Grid>
            </Link>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Donacion;
