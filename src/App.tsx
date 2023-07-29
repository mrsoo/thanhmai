import React from "react";
import logo from "./logo.svg";
import "./App.css";
import chakraTheme from "@chakra-ui/theme";
import { ChakraBaseProvider, extendBaseTheme } from "@chakra-ui/react";

const { Button } = chakraTheme.components;

const theme = extendBaseTheme({
  components: {
    Button,
  },
});

function App() {
  return (
    <ChakraBaseProvider theme={theme}>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            <code>https://www.facebook.com/sootra.tran</code>
          </p>
          <a
            className="App-link"
            href="https://www.facebook.com/sootra.tran"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React + Chakra UI + Vite
          </a>
        </header>
      </div>
    </ChakraBaseProvider>
  );
}

export default App;
