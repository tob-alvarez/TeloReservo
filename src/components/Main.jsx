import React from "react";
import Constants from "expo-constants";
import { Text, View, Image } from "react-native";

const Main = () => {
  return (
    <View
      style={{
        marginTop: Constants.statusBarHeight,
        flexGrow: 1,
        backgroundColor: "#141414",
        alignItems: "center",
      }}
    >
      <Image
        style={{
          width: 200,
          height: 100,
          objectFit: "contain",
          marginTop: 20,
        }}
        source={require("../../assets/LogoTeloReservo.png")}
      ></Image>
      <Text style={{ color: "white" }}>Hola !</Text>
    </View>
  );
};

export default Main;
