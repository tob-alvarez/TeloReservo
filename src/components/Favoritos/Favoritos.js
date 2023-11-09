import React, { useState } from "react";
import Constants from "expo-constants";
import { ScrollView, Text, TouchableOpacity } from "react-native";
import ContentBeforeLoginFavoritos from "./ContentBeforeLoginFavoritos";
import CardFav from "../Cards/CardFav";
import { useNavigation } from "@react-navigation/native";

const Favoritos = () => {
  const navigation = useNavigation();

  const [isLoggedIn, setIsLoggedIn] = useState(false);
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
      {isLoggedIn ? (<>
        <TouchableOpacity onPress={() => navigation.navigate("Telo")}>
          <CardFav></CardFav>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("Telo")}>
          <CardFav></CardFav>
        </TouchableOpacity>
      </>
      )
        :
        <ContentBeforeLoginFavoritos />}
      <TouchableOpacity onPress={handleChange}><Text>Cambiar</Text></TouchableOpacity>
    </ScrollView>
  );
};

export default Favoritos;
