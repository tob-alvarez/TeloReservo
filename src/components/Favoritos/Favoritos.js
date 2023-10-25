import React, { useState } from "react";
import Constants from "expo-constants";
import { ScrollView, TouchableOpacity } from "react-native";
import ContentBeforeLoginFavoritos from "./ContentBeforeLoginFavoritos";
import CardFav from "../Cards/CardFav";
import { useNavigation } from "@react-navigation/native";

const Favoritos = () => {
  const navigation = useNavigation();

  return (
    <ScrollView
      style={{
        // marginTop: Constants.statusBarHeight,
        backgroundColor: "#f0f0f0",
      }}
      contentContainerStyle={{ flexGrow: 1 }}
    >
      {/* <ContentBeforeLoginFavoritos /> */}
      <TouchableOpacity onPress={() => navigation.navigate("Telo")}>
        <CardFav></CardFav>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default Favoritos;
