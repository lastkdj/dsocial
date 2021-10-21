import { Grid, Typography } from "@material-ui/core";
import Dona from "./Dona";
import Voluntario from "./Voluntario";
import Empresa from "./Empresa";
import Link from "next/link";
import InstagramIcon from "@mui/icons-material/Instagram";
import { FormattedMessage } from "react-intl";
import Image from "next/image";

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
        md={8}
        lg={7}
        xl={4}
        direction="column"
        justifyContent="center"
      >
        <Grid item container justifyContent="center">
          <Image
            src="/logo3.png"
            alt=""
            className="logo"
            width="550px"
            height="300px"
          />
        </Grid>
        <Grid container className="banner_text">
          <Typography
            className="bio_tittle"
            style={{ textTransform: "uppercase", textAlign: "center" }}
          >
            <FormattedMessage
              id="banner.titulo"
              defaultMessage="Para tener un mejor futuro ayúdenos a mejorar el presente"
            />
          </Typography>
        </Grid>
        <Grid
          container
          item
          className="bio_buttons_container"
          style={{ justifyContent: "center" }}
        >
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
    </Grid>
  );
};

export default Banner;
