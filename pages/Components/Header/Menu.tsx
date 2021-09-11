import { Fragment, useState } from "react";
import { Typography } from "@material-ui/core";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import MenuIcon from "@material-ui/icons/Menu";

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
        <MenuItem onClick={handleClose}>
          <Typography className="header_menuicon_text">
            Quienes Somos?
          </Typography>
        </MenuItem>

        <MenuItem onClick={handleClose}>
          <Typography className="header_menuicon_text">Proyectos</Typography>
        </MenuItem>

        <MenuItem onClick={handleClose}>
          <Typography className="header_menuicon_text">Alianzas</Typography>
        </MenuItem>

        <MenuItem onClick={handleClose}>
          <Typography className="header_menuicon_text">Contactos</Typography>
        </MenuItem>
      </Menu>
    </Fragment>
  );
}
