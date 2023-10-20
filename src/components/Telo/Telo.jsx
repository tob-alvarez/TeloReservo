import React from "react";
import { Text, ScrollView } from "react-native";
import Constants from "expo-constants";

const Telo = () => {
  return (
    <ScrollView
      style={{
        marginTop: Constants.statusBarHeight,
        backgroundColor: "#f0f0f0",
      }}
      contentContainerStyle={{ flexGrow: 1 }}
    >
      <Text>Hola</Text>
    </ScrollView>
  );
};

export default Telo;
