import { ChakraProvider } from "@chakra-ui/react";
import React from "react";
import ReactDom from 'react-dom'
import Dashboard from "./Dashboard";

const App = () => {
  return (
      <ChakraProvider>
        <Dashboard />
      </ChakraProvider>
  );
};

export default App;
