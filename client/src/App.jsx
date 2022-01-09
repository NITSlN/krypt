import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Services from "./components/Services";
import Welcome from "./components/Welcome";
import Transactions from "./components/Transactions";
import Loader from "./components/Navbar";

import { createTheme } from "@mui/material/styles";
import { ThemeProvider } from "@mui/system";
import { Typography } from "@mui/material";
import "./App.css";

function App() {
  const theme = createTheme({
    typography: {
      fontFamily: `"Roboto","Helvetica","cursive"`,
    },
  });

  return (
    <ThemeProvider theme={theme} className="App">
      <div className="gradient">
        <Navbar />
        <Welcome />
      </div>

      <div className="gradient2">
        <Services />
        <Transactions />
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
