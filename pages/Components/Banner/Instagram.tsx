import { Grid, Typography } from "@material-ui/core";
import InstagramIcon from "@mui/icons-material/Instagram";

export default function Insta() {
  const goUrl = () => {
    window.location.href =
      "https://www.instagram.com/dsh_chile/?utm_medium=copy_link";
  };
  return (
    <Grid
      container
      item
      xs={12}
      justifyContent="center"
      style={{ cursor: "pointer" }}
      onClick={goUrl}
    >
      <Typography style={{ margin: "10px" }}>
        <a style={{ color: "inherit" }}> Siguenos en Instagram! </a>
      </Typography>
      <InstagramIcon className="socials" />
    </Grid>
  );
}
