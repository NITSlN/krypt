import React from "react";
import { Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";


const useStyles = makeStyles({
    item:{
        borderRadius:'20px',
        color:'white',
        padding:'25px',
        marginBottom:'20px',
        width:'80%',
        backgroundColor:'#ffffff0d',
        
    }
})
function ServiceItem({paragraph,head}) {

    const classes = useStyles()
  return (
    <div className={classes.item}>
      <Typography sx={{mb:1}} variant="h5">{head}</Typography>
      <Typography >
        {paragraph}
      </Typography>
    </div>
  );
}

export default ServiceItem;
