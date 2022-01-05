import { useState } from "react";
import DragHandleIcon from "@mui/icons-material/DragHandle";
import CloseIcon from "@mui/icons-material/Close";
import { makeStyles } from "@mui/styles";
import {
  Box,
  Divider,
  IconButton,
  List,
  ListItem,
  ListItemText,
  SwipeableDrawer,
} from "@mui/material";

const useStyles = makeStyles({
  list: {
    width: 250,
    height: "100%",
    backgroundColor: "#000713f0",
    color: "#0081ff",
  },
});

export default function Drawer() {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  return (
    <div>
      <IconButton
        color="primary"
        aria-label="open drawer"
        onClick={() => setOpen(true)}
      >
        <DragHandleIcon />
      </IconButton>
      <SwipeableDrawer
        anchor="right"
        open={open}
        onClose={() => setOpen(false)}
      >
        <div className={classes.list}>
          <Box textAlign="end" p={2}>
            <CloseIcon cursor={"pointer"} onClick={() => setOpen(false)} />
          </Box>
          <Divider />
          <List>
            {["Market", "Exchange", "Tutorials", "Wallets", "Login"].map(
              (item) => {
                return (
                  <ListItem button>
                    <ListItemText primary={item} />
                  </ListItem>
                );
              }
            )}

          </List>
        </div>
      </SwipeableDrawer>
    </div>
  );
}
