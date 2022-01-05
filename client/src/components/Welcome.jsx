import React, { useContext } from "react";
import { makeStyles } from "@mui/styles";
import { Button, Typography } from "@mui/material";
import { FaEthereum } from "react-icons/fa";
import { FaInfoCircle } from "react-icons/fa";
import { shortenAddress } from "../utils/shortenAddress";
import { form } from "../utils/form";
import Loader from "./Loader";
import { TransactionContext } from "../context/TransactionContext";

const useStyles = makeStyles({
  container: {
    display: "flex",
    justifyContent: "center",
    width: "100%",
    alignItems: "center",
    boxSizing: "border-box",
  },
  outer: {
    display: "flex",
    color: "white",
    padding: "72px 60px",
    width: "80%",
    alignItems: "flex-start",
    "@media (max-width:1115px)": {
      flexDirection: "column",
      alignItems: "center",
    },
    "@media (max-width:660px)": {
      padding: "60px 10px",
      width: "100%",
    },
  },
  firstDiv: {
    height: "60vh",
    display: "flex",
    flex: "1",
    flexDirection: "column",
    alignContent: "flex-end",
    marginRight: "2.5rem",
    "@media (max-width:1115px)": {
      marginRight: "0px",
      width: "85%",
    },
    "@media (max-width:660px)": {
      width: "100%",
    },
  },
  secondDiv: {
    display: "flex",
    flex: "1",
    flexDirection: "column",
    alignItems: "center",
    "@media (max-width:500px)": {
      width: "100%",
    },
  },

  features: {
    display: "grid",
    width: "100%",
    gridTemplateColumns: "auto auto auto",
    gridTemplateRows: "auto auto",
    "@media (max-width:330px)": {
      display: "none",
    },
  },
  gridItem: {
    border: "0.5px solid white",
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    minWidth: "100px",
    minHeight: "70px",
  },
  form: {
    alignItems: "center",
    backgroundColor: "#191c2f",
    width: "24rem",
    display: "flex",
    padding: "0px",
    borderRadius: "17px",
    height: "20rem",
    alignItems: "center",
    flexDirection: "column",
    justifyContent: "space-evenly",
    "@media (max-width:500px)": {
      width: "100%",
    },
  },
  card: {
    backgroundImage: "linear-gradient(pink, rgb(61, 61, 224))",
    width: "260px",
    borderRadius: "15px",
    padding: "12px",
    height: "145px",
    margin: "35px 0",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    "@media (max-width:300px)": {
      width: "100%",
    },
  },
  grad: {
    backgroundImage: "linear-gradient(to bottom right, #f8f8f8, #0f0f0f)",
    "-webkit-backgroundClip": "text",
    "-webkit-text-fill-color": "transparent",
    "@media (max-width:530px)": {
      fontSize: "30px !important",
    },
  },
  formElement:{
    backgroundColor: '#1f2541',
    border: 'none',
    padding: '10px',
    width: '80%',
    marginBottom: '4px',
    fontFamily: "'Open Sans', 'Helvetica Neue', sans-serif",
    color: 'white',
  }
});
function Welcome() {
  const classes = useStyles();
  const {
    connectWallet,
    currentAccount,
    formData,
    setformData,
    isLoading,
    handleChange,
    sendTransaction,
  } = useContext(TransactionContext);

  const handleSubmit = () => {
    const { addressTo, amount, message, keyword } = formData;

    if (!addressTo || !amount || !message || !keyword) return;

    sendTransaction();
  };

  return (
    <div className={classes.container}>
      <div className={classes.outer}>
        <div className={classes.firstDiv}>
          <Typography className={classes.grad} variant="h3">
            Send Crypto <br /> across the world
          </Typography>
          <Typography sx={{ mt: 2, mb: 2, color: "#918b8b" }}>
            Explore the crypto world. Buy and sell <br /> cryptocurrencies
            easily on Krypto.
          </Typography>

          {!currentAccount && (
            <Button
              color="primary"
              variant="contained"
              onClick={connectWallet}
              sx={{
                width: "100%",
                display: "block",
                padding: "12.5px",
                mt: 2,
                mb: 5,
                borderRadius: "25px",
              }}
            >
              Connect Wallet
            </Button>
          )}

          <div className={classes.features}>
            <div
              className={classes.gridItem}
              style={{ borderRadius: "14px 0 0 0" }}
            >
              <Typography fontWeight={100} fontSize="0.9rem">
                Reliability
              </Typography>
            </div>
            <div className={classes.gridItem}>
              <Typography fontWeight={100} fontSize="0.9rem">
                Security
              </Typography>
            </div>
            <div
              className={classes.gridItem}
              style={{ borderRadius: "0 14px 0 0" }}
            >
              <Typography fontWeight={100} fontSize="0.9rem">
                Ethereum
              </Typography>
            </div>
            <div
              className={classes.gridItem}
              style={{ borderRadius: "0 0 0 14px" }}
            >
              <Typography fontWeight={100} fontSize="0.9rem">
                Web 3.0
              </Typography>
            </div>
            <div className={classes.gridItem}>
              <Typography fontWeight={100} fontSize="0.9rem">
                Low fees
              </Typography>
            </div>
            <div
              className={classes.gridItem}
              style={{ borderRadius: "0 0 14px 0" }}
            >
              <Typography fontWeight={100} fontSize="0.9rem">
                Blockchain
              </Typography>
            </div>
          </div>
        </div>

        <div className={classes.secondDiv}>
          <div className={classes.card}>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                width: "100%",
              }}
            >
              <div style={{ fontSize: "35px", color: "rgb(10 42 80)" }}>
                <FaEthereum />
              </div>
              <div>
                <FaInfoCircle />
              </div>
            </div>

            <div>
              <Typography>{shortenAddress(currentAccount)}</Typography>
              <Typography variant="h6">Ethereum</Typography>
            </div>
          </div>

          <div className={classes.form}>
            {form.map(({ type, placeholder,step, name }) => {
              return (
                <input
                  type={type}
                  placeholder={placeholder}
                  name={name}
                  step={step}
                  onChange={(e) => handleChange(e, e.target.name)}
                  className={classes.formElement}
                />
              );
            })}
           
            <hr style={{ width: "85%" }} />
            {isLoading ? (
              <Loader />
            ) : (
              <Button
                sx={{
                  bgcolor: "#191c2f",
                  color: "white",
                  borderRadius: "17px",
                  width: "86%",
                }}
                onClick={handleSubmit}
                variant="outlined"
              >
                SEND NOW
              </Button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Welcome;
