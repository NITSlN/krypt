import { makeStyles } from "@mui/styles";
import React from "react";
import { Typography } from "@mui/material";
import ServiceItem from "./ServiceItem";

const services = [
  {
    heading: "Security Guaranteed",
    para: "Security is guaranted. We always maintain privacy and mainting the quality of our products.",
  },
  {
    heading: "Best exchange rates",
    para: "Security is guaranted. We always maintain privacy and mainting the quality of our products.",
  },
  {
    heading: "Fastest transactions",
    para: "Security is guaranted. We always maintain privacy and mainting the quality of our products.",
  },
];
const useStyles = makeStyles({
  container: {
    display: "flex",
    alignItems: "center",
    width: "100%",
    "@media (max-width:1215px)": {
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
    },
  },
  left: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "45%",
    "@media (max-width:1215px)": {
      height: "20vh",
      width: "90%",
    },
  },
  grad: {
    backgroundImage: " linear-gradient(to bottom right,#f8f8f8,#0f0f0f)",
    "-webkit-background-clip": "text",
    "-webkit-text-fill-color": "transparent",
    fontSize: "3rem !important",
    "@media (max-width:500px)": {
      fontSize: "2rem !important",
    },
  },
  text: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    "@media (max-width:400px)": {
      alignItems: "flex-start",
    },
  },
  right: {
    width: "55%",
    justifyContent: "center",
    display: "flex",
    flexDirection: "column",
    margin: "50px 30px",
    alignItems: "center",
    "@media (max-width:1215px)": {
      width: "90%",
    },
    "@media (max-width:400px)": {
      width:'100%',
      padding:'0px'
    },
  },
  
});


function Services() {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <div className={classes.left}>
        <div className={classes.text}>
          <Typography className={classes.grad}>
            Services that we <br />
            continue to improve
          </Typography>
        </div>
      </div>
      <div className={classes.right}>
        {services.map(({ heading, para }) => {
          return <ServiceItem key={heading} head={heading} paragraph={para} />;
        })}
      </div>
    </div>
  );
}

export default Services;
