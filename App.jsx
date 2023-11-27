import React from "react";
import Layout from "./src/components/Layout/Layout.js";
import TeloContext from "./context/TeloContext.js";

export default function App() {
  return (
    <TeloContext>
      <Layout />
    </TeloContext>
  );
}

//rnfes para iniciar componente
