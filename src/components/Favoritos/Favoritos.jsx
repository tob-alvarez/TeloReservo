import React, { useState } from "react";
import {
  Text,
  View,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Image,
} from "react-native";
import ContentBeforeLoginFavoritos from "./ContentBeforeLoginFavoritos";

const Favoritos = () => {
  return (
    <ScrollView
      style={{
        // marginTop: Constants.statusBarHeight,
        backgroundColor: "#f0f0f0",
      }}
      contentContainerStyle={{ flexGrow: 1 }}
    >
      <ContentBeforeLoginFavoritos />
    </ScrollView>
  );
};

export default Favoritos;
