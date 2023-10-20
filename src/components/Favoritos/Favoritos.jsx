import React, { useState } from "react";
import { ScrollView } from "react-native";
import ContentBeforeLoginFavoritos from "./ContentBeforeLoginFavoritos";
import CardFav from "../Cards/CardFav";

const Favoritos = () => {
  return (
    <ScrollView
      style={{
        // marginTop: Constants.statusBarHeight,
        backgroundColor: "#f0f0f0",
      }}
      contentContainerStyle={{ flexGrow: 1 }}
    >
      {/* <ContentBeforeLoginFavoritos /> */}
      {/* <CardFavoritos></CardFavoritos> */}
      <CardFav></CardFav>
    </ScrollView>
  );
};

export default Favoritos;
