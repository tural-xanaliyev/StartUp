import { ChakraProvider, ColorModeScript } from "@chakra-ui/react";
import React from "react";
import them from "../them";
import Dashboard from "./Dashboard";

const App = () => {
  return (
    <>
      <ChakraProvider>
      <ColorModeScript initialColorMode={them.config.initialColorMode} />
      <Dashboard />
      </ChakraProvider>
    </>
  );
};

export default App;
