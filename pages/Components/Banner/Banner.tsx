import { Grid, Typography } from "@material-ui/core";
import Dona from "./Dona";
import Voluntario from "./Voluntario";
import Empresa from "./Empresa";
import Link from "next/link";
import InstagramIcon from "@mui/icons-material/Instagram";

export interface Props {}

const Banner: React.FC<Props> = () => {
  return (
    <Grid
      container
      justifyContent="center"
      className="banner_container"
      id="home"
    >
      <Grid
        container
        item
        xs={12}
        sm={10}
        md={6}
        lg={5}
        xl={4}
        direction="column"
        className="bio_container"
      >
        <Grid container className="banner_text">
          <Typography className="bio_tittle">DA UNA MANO AMIGA</Typography>
          <Typography className="bio_tittle_two">
            A LOS QUE LA NECESITEN
          </Typography>
          <Typography className="bio_description">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industrys standard dummy text
            ever since the 1500s
          </Typography>
        </Grid>
        <Grid container item className="bio_buttons_container">
          <Link href="/Voluntario">
            <Grid
              item
              xs={4}
              sm={3}
              md={5}
              lg={4}
              xl={3}
              className="bio_buttons_banner"
            >
              <Voluntario />
            </Grid>
          </Link>
          <Link href="/Donacion">
            <Grid
              item
              xs={4}
              sm={3}
              md={5}
              lg={4}
              xl={3}
              className="bio_buttons_banner"
            >
              <Dona />
            </Grid>
          </Link>
          <Link href="/Empresas">
            <Grid
              item
              xs={4}
              sm={3}
              md={5}
              lg={4}
              xl={3}
              className="bio_buttons_banner"
            >
              <Empresa />
            </Grid>
          </Link>{" "}
        </Grid>
      </Grid>
      <Grid
        container
        alignItems="flex-end"
        justifyContent="flex-end"
        item
        xs={4}
        className="avatar_container"
      ></Grid>
    </Grid>
  );
};

export default Banner;
