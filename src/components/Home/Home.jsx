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
import { Ionicons } from "@expo/vector-icons";

const Home = () => {
  // const [buscador, setBuscador] = useState("");
  // const handleSearch = () => {
  //   console.log("Texto de búsqueda:", buscador);
  // };
  return (
    <ScrollView
      style={{
        // marginTop: Constants.statusBarHeight,
        backgroundColor: "#f0f0f0",
      }}
      contentContainerStyle={{ flexGrow: 1 }}
    >
      <View
        style={{
          backgroundColor: "#tranparent",
          alignItems: "center",
        }}
      >
        <Image
          source={require("../../../assets/LogoTeloReservo.png")}
          style={styles.logoTeloReservo}
        />
      </View>
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.input}
          placeholder="Buscar..."
          // value={buscador}
          // onChangeText={setBuscador}
        />
      </View>
    </ScrollView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  searchContainer: {
    flexDirection: "row",
    alignItems: "start",
    elevation: 10,
    shadowOffset: 10,
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    borderColor: "transparent",
    backgroundColor: "#fff",
    margin: 10,
    height: "25%",
  },
  input: {
    borderWidth: 1,
    borderRadius: 25,
    paddingStart: 10,
    borderColor: "#ccc",
    backgroundColor: "#f0f0f0",
    flex: 1,
    height: 50,
  },
  logoTeloReservo: {
    height: 70,
    objectFit: "contain",
    margin: 15,
  },
});
