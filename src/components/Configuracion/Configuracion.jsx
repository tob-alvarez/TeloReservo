import React, { useState } from "react";
import { ScrollView } from "react-native";
import ContentBeforeLoginConfig from "./ContentBeforeLoginConfig";

const Configuracion = () => {
  return (
    <ScrollView
      style={{
        // marginTop: Constants.statusBarHeight,
        backgroundColor: "#f0f0f0",
      }}
      contentContainerStyle={{ flexGrow: 1 }}
    >
      <ContentBeforeLoginConfig></ContentBeforeLoginConfig>
    </ScrollView>
  );
};

export default Configuracion;
