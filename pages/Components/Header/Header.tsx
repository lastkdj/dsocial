import React, { useState, useEffect } from "react";
import { Grid, Typography } from "@material-ui/core";
import { Link } from "react-scroll";
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
      <Grid
        container
        item
        xs={4}
        md={3}
        alignItems="center"
        className="header_logo"
      >
        <Link
          activeClass="active"
          to="home"
          spy={true}
          smooth={true}
          offset={-66}
          duration={1000}
        >
          {scrolled ? (
            <Image
              src="/logo.png"
              alt=""
              className="logo"
              width="120px"
              height="40px"
            />
          ) : (
            <Image
              src="/logo.png"
              alt=""
              className="logo"
              width="180px"
              height="60px"
            />
          )}{" "}
        </Link>
      </Grid>

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
          <Link
            activeClass="active"
            to="about"
            spy={true}
            smooth={true}
            offset={-66}
            duration={1000}
          >
            <Typography className="header_menu_text">¿QUE HACEMOS?</Typography>{" "}
          </Link>{" "}
          <Link
            activeClass="active"
            to="who"
            spy={true}
            smooth={true}
            offset={-60}
            duration={1000}
          >
            <Typography className="header_menu_text">
              ¿QUIENES SOMOS?
            </Typography>{" "}
          </Link>{" "}
          <Link
            activeClass="active"
            to="exp"
            spy={true}
            smooth={true}
            offset={80}
            duration={1000}
          >
            <Typography className="header_menu_text">EXPERIENCIA</Typography>{" "}
          </Link>
          <Typography className="header_menu_text">CONTACTO</Typography>
          <Button />
        </Grid>
      )}
    </Grid>
  );
};

export default Header;
