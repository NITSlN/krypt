import React, { useContext } from "react";
import dummyData from "../utils/dummyData";
import {
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
  Button,
  Grid,
} from "@mui/material";
import { TransactionContext } from "../context/TransactionContext";
import { makeStyles } from "@mui/styles";
import { shortenAddress } from "../utils/shortenAddress";
import useFetch from "../hooks/useFetch";

const useStyles = makeStyles({
  container: {
    width: "100%",
    height: "auto",
    padding: "20px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  heading: {
    color: "white",
    width: "95%",
    textAlign: "center",
  },
  grid: {
    margin: "20px 0 0 0 ",
  },
  grad: {
    backgroundImage: "linear-gradient(to top left,#f8f8f8,#433b3b)",
    "-webkit-background-clip": "text",
    "-webkit-text-fill-color": "transparent",
    padding: "20px 0px",
    "@media (max-width:530px)": {
      fontSize: "30px !important",
    },
  },
  items: {},
});

const TransactionCard = ({ transaction }) => {
  const { addressTo, addressFrom, timestamp, message, keyword, amount } =
    transaction;
    const gifUrl = useFetch({ keyword });
  return (
    <Card sx={{ bgcolor: "transparent" }}>
      <CardMedia
        component="img"
        height="200"
        image={gifUrl || 'https://metro.co.uk/wp-content/uploads/2015/05/pokemon_crying.gif?quality=90&strip=all&zoom=1&resize=500%2C284' }
        alt="gif"
      />
      <CardContent sx={{ bgcolor: "#020317 !important" }}>
        <Typography
          sx={{ color: "white" }}
          gutterBottom
          variant="h6"
          component="div"
        >Message: {message} <br />
        </Typography>
        <Typography
          sx={{ color: "white" }}
          variant="body2"
          color="text.secondary"
        >
          Amount : {amount} ETH <br />
          From : {shortenAddress(addressFrom)} <br />
          To : {shortenAddress(addressTo)} <br />
        </Typography>
        <div
          style={{
            color: "white",
            border: "1px solid blue",
            borderRadius: "12px",
            display: "inline-block",
            padding: "8px",
            marginTop: "12px",
          }}
        >
          <Typography variant="body2">
            {timestamp}
          </Typography>
        </div>
      </CardContent>
    </Card>
  );
};

function Transactions() {
  const classes = useStyles();
  const { currentAccount,transactions } = useContext(TransactionContext);

  return (
    <div id="lt"className={classes.container}>
      <div className={classes.heading}>
        {currentAccount ? (
          <Typography className={classes.grad} variant="h4">
            Latest Transactions
          </Typography>
        ) : (
          <Typography className={classes.grad} variant="h4">
            Connect your account to see the latest transactions
          </Typography>
        )}
        <div className={classes.grid}>
          
          <Grid container spacing={{ xs: 2, sm: 2, md: 5 }}>
            {transactions.reverse().map((transaction) => {
              return (
                <Grid item xs={12} sm={6} md={4} style={{alignSelf: 'center'}}>
                  <TransactionCard
                    key={transaction.id}
                    transaction={transaction}
                  />
                </Grid>
              );
            })}
          </Grid>
        </div>
      </div>
    </div>
  );
}

export default Transactions;
