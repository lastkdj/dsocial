import React, { useEffect } from "react";
import { Grid, Typography } from "@material-ui/core";
import Image from "next/image";
import { useMediaQuery } from "react-responsive";

const FinanceLogos = () => {
  const isLaptop = useMediaQuery({ query: "(max-width: 1366px)" });

  useEffect(() => {
    const observerOptions = {
      root: null,
      threshold: 0.7,
    };

    const observerCallback = (entries: any, observer: any) => {
      entries.forEach((entry: any) => {
        if (entry.isIntersecting) {
          // fade in observed elements that are in view
          entry.target.classList.replace("fadeOutlittle", "fadeInbig");
        } else {
          // fade out observed elements that are not in view
          return;
        }
      });
    };

    const fadeElms = document.querySelectorAll(".fin_second_container");

    const observer = new IntersectionObserver(
      observerCallback,
      observerOptions
    );
    fadeElms.forEach((el) => observer.observe(el));
  }, []);

  return (
    <Grid container className="fin_second_container fadeOutlittle">
      <Grid item container xs={12} justifyContent="center">
        <Grid item xs={2} md={1} lg={1} xl={1} className="sponsor">
          <Image src="/columnew.jpg" alt="" width={100} height={70} />
        </Grid>
        <Grid item xs={2} md={1} lg={1} xl={1} className="sponsor">
          <Image src="/airfrancenew.jpg" alt="" width={100} height={70} />
        </Grid>
        <Grid item xs={2} md={1} lg={1} xl={1} className="sponsor">
          <Image src="/ubsnew.jpg" alt="" width={100} height={70} />
        </Grid>
        <Grid item xs={2} md={1} lg={1} xl={1} className="sponsor">
          <Image src="/kraftnew.jpg" alt="" width={100} height={70} />
        </Grid>
        <Grid item xs={2} md={1} lg={1} xl={1} className="sponsor">
          <Image src="/lafargenew.jpg" alt="" width={100} height={70} />
        </Grid>
        <Grid item xs={2} md={1} lg={1} xl={1} className="sponsor">
          <Image src="/palmsnew.jpg" alt="" width={100} height={70} />
        </Grid>
      </Grid>
    </Grid>
  );
};

export default FinanceLogos;
