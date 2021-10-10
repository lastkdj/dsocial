import { Fragment, useState } from "react";
import { Typography } from "@material-ui/core";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import MenuIcon from "@material-ui/icons/Menu";
import { Link } from "react-scroll";

export default function SimpleMenu() {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleClick = (event: any) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Fragment>
      <MenuIcon className="header_menuicon" onClick={handleClick} />

      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
        PaperProps={{
          style: { backgroundColor: "#f6f5f3" },
        }}
      >
        {" "}
        <Link
          activeClass="active"
          to="about"
          spy={true}
          smooth={true}
          offset={-66}
          duration={1000}
        >
          <MenuItem onClick={handleClose}>
            <Typography className="header_menuicon_text">
              Que Hacemos?
            </Typography>
          </MenuItem>
        </Link>
        <Link
          activeClass="active"
          to="who"
          spy={true}
          smooth={true}
          offset={-60}
          duration={1000}
        >
          <MenuItem onClick={handleClose}>
            <Typography className="header_menuicon_text">
              Quienes Somos?
            </Typography>
          </MenuItem>
        </Link>
        <Link
          activeClass="active"
          to="exp"
          spy={true}
          smooth={true}
          offset={80}
          duration={1000}
        >
          <MenuItem onClick={handleClose}>
            <Typography className="header_menuicon_text">
              Experiencia
            </Typography>
          </MenuItem>
        </Link>
        <MenuItem onClick={handleClose}>
          <Typography className="header_menuicon_text">Proyectos</Typography>
        </MenuItem>
        <Link
          activeClass="active"
          to="contact"
          spy={true}
          smooth={true}
          offset={80}
          duration={1000}
        >
          <MenuItem onClick={handleClose}>
            <Typography className="header_menuicon_text">Contactos</Typography>
          </MenuItem>
        </Link>
      </Menu>
    </Fragment>
  );
}
