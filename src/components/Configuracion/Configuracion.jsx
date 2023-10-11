import React, { useState } from "react";
import {
  Text,
  View,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  TextInput,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import Card3 from "../Cards/Card3";

const Configuracion = () => {
  const [buscador, setBuscador] = useState("");
  const handleSearch = () => {
    console.log("Texto de búsqueda:", buscador);
  };
  return (
    <ScrollView
      style={{
        // marginTop: Constants.statusBarHeight,
        backgroundColor: "#ffffff",
      }}
      contentContainerStyle={{ flexGrow: 1 }}
    >
      <View
        style={{
          backgroundColor: "#fafafa",
          alignItems: "center",
        }}
      ></View>
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.input}
          placeholder="Buscar..."
          value={buscador}
          onChangeText={setBuscador}
        />
        <TouchableOpacity onPress={handleSearch}>
          <Ionicons name="search" size={24} color="black" />
        </TouchableOpacity>
      </View>
      <Card3></Card3>
    </ScrollView>
  );
};

export default Configuracion;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    borderColor: "#ccc",
    margin: 10,
  },
  input: {
    flex: 1,
    height: 50,
  },
});
