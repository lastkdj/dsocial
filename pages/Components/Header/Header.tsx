import React, { useState, useEffect } from "react";
import { Grid, Typography } from "@material-ui/core";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import Button from "./Button";
import { useMediaQuery } from "react-responsive";
// import { Link } from "react-scroll";
import Image from "next/image";

import Menu from "./Menu";

export interface Props {}

const Header: React.FC<Props> = () => {
  const [scrolled, setScrolled] = useState<boolean>(false);
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 959px)" });
  useEffect(() => {
    window.addEventListener("scroll", () => {
      const isTop: boolean = window.scrollY < 76;

      if (isTop === false) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    });
    const proxyEmpty = () => {};
    return () => {
      window.removeEventListener("scroll", proxyEmpty);
    };
  }, []);

  return (
    <Grid
      container
      justifyContent="center"
      className={scrolled ? "sticky" : "container"}
    >
      {/* <Link
        activeClass="active"
        to="home"
        spy={true}
        smooth={true}
        offset={-66}
        duration={1000}
      > */}
      <Grid
        container
        item
        xs={4}
        md={3}
        alignItems="center"
        className="header_logo"
      >
        {scrolled ? (
          <Image
            src="/logo.png"
            alt=""
            className="logo"
            width="100px"
            height="30px"
          />
        ) : (
          <Image
            src="/logo.png"
            alt=""
            className="logo"
            width="180px"
            height="60px"
          />
        )}
      </Grid>
      {/* </Link> */}
      {isTabletOrMobile ? (
        <Grid container item xs={6} sm={6} md={6} className="header_menu">
          <Menu />
        </Grid>
      ) : (
        <Grid
          container
          item
          xs={6}
          sm={8}
          md={8}
          lg={7}
          justifyContent="center"
          className="header_menu"
        >
          <Typography className="header_menu_text">¿QUE HACEMOS?</Typography>{" "}
          <Typography className="header_menu_text">¿QUIENES SOMOS?</Typography>
          <Typography className="header_menu_text">ALIANZAS</Typography>{" "}
          <Typography className="header_menu_text">CONTACTO</Typography>
          <Button />
        </Grid>
      )}
    </Grid>
  );
};

export default Header;
