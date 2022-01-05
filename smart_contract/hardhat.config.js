require("@nomiclabs/hardhat-waffle");

const privateKey='your private key'
task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

module.exports = {
  solidity: "0.8.0",
  networks:{
    ropsten:{
      url:'https://eth-ropsten.alchemyapi.io/v2/_qCU1gDlIn7I8whMC8OB_NrcdFpCEeMO',
      accounts:[privateKey]

    }
  }
};
