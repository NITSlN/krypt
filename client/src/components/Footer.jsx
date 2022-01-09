import { makeStyles } from "@mui/styles";
import { padding } from "@mui/system";
import { Typography } from "@mui/material";
import React from "react";

const useStyles = makeStyles({
  container: {
    width: "100%",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "column",
    padding: "14px",
    "@media (max-width:900px)": {
      justifyContent: "center",
    },
  },
  container_2: {
    width: "100%",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    margin: "30px 0",
    "@media (max-width:500px)": {
      flexDirection: "column",
    },
  },
  logo: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    flex: "0.5",
  },
  para: {
    color: "white",
    margin: "0 20px",
    cursor: "pointer",
    textAlign: "center",
    transition:'0.2s',
    textDecoration:'none',
    "&:hover": {
      color: "rgb(0 118 255)",
    },
    "@media (max-width:500px)": {
      margin: "10px 0 !important",
    },
  },
  paraContainer: {
    display: "flex",
    flex: "1",
    justifyContent: "space-evenly",
    width: "100%",
    flexWrap: "wrap",
    alignItems: "center",
    "@media (max-width:400px)": {
      marginTop: "0px",
      flexDirection: "column",
    },
  },
  join: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    textAlign: "center",
    marginTop: "30px",
  },
  last: {
    width: "95%",
    display: "flex",
    justifyContent: "space-between",
    color: "white",
    marginTop: "12px",
    "@media (max-width:300px)": {
      flexDirection: "column",
      alignItems:'center'
    },
  },
});
function Footer() {
  const classes = useStyles();
  return (
    <div id="footer" className={classes.container}>
      <div className={classes.container_2}>
        <div className={classes.logo}>
          <Typography
            variant="h6"
            sx={{
              flexGrow: 1,
              color: "white",
              cursor: "pointer",
              width: "83px",
            }}
          >
            KRYPT
          </Typography>
        </div>
        <div className={classes.paraContainer}>
        <a className={classes.para} href="/"><Typography>Home</Typography></a>
            <a className={classes.para} href="#services"><Typography>Services</Typography></a>
            <a className={classes.para} href="#lt"><Typography>Transaction</Typography></a>
            <a className={classes.para} href="#nav"><Typography>Top</Typography></a>
        </div>
      </div>

      <div className={classes.join}>
        <Typography style={{ color: "white", fontSize: "14px" }}>
          Come join us
        </Typography>
        <Typography
          style={{
            color: "white",
            fontSize: "14px",
            marginTop: "5px",
            fontWeight: "500",
          }}
        >
          info@nit_sin_krypto.com
        </Typography>
      </div>

      <div
        style={{
          width: "95%",
          height: "0.25px",
          backgroundColor: "white",
          marginTop: "20px",
        }}
      />

      <div className={classes.last}>
        <Typography fontSize={14} style={{ color: "white", textAlign: "left" }}>
          @nit_sin_krypto
        </Typography>
        <Typography fontSize={14} style={{ color: "white", textAlign: "left" }}>
          {" "}
          &copy; All rights reserved
        </Typography>
      </div>
    </div>
  );
}

export default Footer;
