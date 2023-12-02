import React, { useState } from "react";
import { ScrollView, Text, TouchableOpacity } from "react-native";
import ContentBeforeLoginFavoritos from "./ContentBeforeLoginFavoritos";
import CardFav from "../Cards/CardFav";
import { useNavigation } from "@react-navigation/native";
import TeloContext from "../../../context/TeloContext";

const Favoritos = () => {
  const navigation = useNavigation();

  const handleChange = () => {
    setIsLoggedIn(!isLoggedIn);
  }

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
      <TouchableOpacity onPress={() => navigation.navigate("Telo")}>
        <CardFav></CardFav>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default Favoritos;
