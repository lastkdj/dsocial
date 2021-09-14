import React, { useEffect } from "react";
import { Grid, Typography } from "@material-ui/core";
import Image from "next/image";
import { useMediaQuery } from "react-responsive";

const FinanceLogos = () => {
  const isLaptop = useMediaQuery({ query: "(max-width: 1366px)" });

  return (
    <Grid container className="fin_second_container">
      <Grid item container xs={12} justifyContent="center">
        <Grid item xs={2} className="sponsor">
          <Image src="/columnew.jpg" alt="" width={100} height={70} />
        </Grid>
        <Grid item xs={2} className="sponsor">
          <Image src="/airfrancenew.jpg" alt="" width={100} height={70} />
        </Grid>
        <Grid item xs={2} className="sponsor">
          <Image src="/ubsnew.jpg" alt="" width={100} height={70} />
        </Grid>
        <Grid item xs={2} className="sponsor">
          <Image src="/kraftnew.jpg" alt="" width={100} height={70} />
        </Grid>
        <Grid item xs={2} className="sponsor">
          <Image src="/lafargenew.jpg" alt="" width={100} height={70} />
        </Grid>
        <Grid item xs={2} className="sponsor">
          <Image src="/palmsnew.jpg" alt="" width={100} height={70} />
        </Grid>
      </Grid>
    </Grid>
  );
};

export default FinanceLogos;
