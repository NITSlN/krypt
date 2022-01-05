import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { makeStyles } from "@mui/styles";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import { useState } from "react";
import Drawer from "./Drawer";

const useStyles = makeStyles({
  navbarElements: {
    display: "flex",
    flexGrow: 0.6,
    justifyContent: "space-around",
    marginRight: "20px",
    "@media (max-width:600px)": {
      display: "none",
    },
  },
  item: {
    cursor: "pointer",
    color: "white",
    margin: "0 12px !important",
    transition: "0.2s",
    "&:hover": {
      color: "rgb(0 118 255)",
    },
  },
  toolbar: {
    width: "70%",
    "@media (max-width:800px)": {
      width: "100%",
      justifyContent: "center",
    },
    "@media (max-width:600px)": {
      width: "100%",
      justifyContent: "space-between",
    },
  },
  Drawer: {
    "@media (min-width:600px)": {
      display: "none",
    },
  },
});

function Navbar() {
  const classes = useStyles();

  return (
    <Box>
      <AppBar
        color="transparent"
        sx={{ flexDirection: "row", justifyContent: "center" }}
        position="sticky"
      >
        <Toolbar className={classes.toolbar}>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: "0.5", color: "white", cursor: "pointer" }}
          >
            KRYPT
          </Typography>
          <div className={classes.navbarElements}>
            <Typography className={classes.item}>Market</Typography>
            <Typography className={classes.item}>Exchange</Typography>
            <Typography className={classes.item}>Tutorials</Typography>
            <Typography className={classes.item}>Wallets</Typography>
          </div>
          <Button
            variant="contained"
            sx={{
              bgcolor: "black",
              "&:hover": {
                bgcolor: "white",
                color: "black",
              },
              "@media (max-width:600px)": { display: "none" },
            }}
          >
            {" "}
            Login
          </Button>
          <div className={classes.Drawer}>
            <Drawer />
          </div>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Navbar;
