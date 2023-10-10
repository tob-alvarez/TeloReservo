import React, { useState } from "react";
// import Constants from "expo-constants";
import { useNavigation } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
  TextInput,
  Text,
  View,
  Image,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import Navbar from "./Navbar";

const Layout = ({ children }) => {
  const navigation = useNavigation();
  const [buscador, setBuscador] = useState("");
  const handleSearch = () => {
    console.log("Texto de búsqueda:", buscador);
  };

  const [changeIcon, setChangeIcon] = useState("Habitaciones");
  const handleChangeIcon = (nombreIcono) => {
    setChangeIcon(nombreIcono);
    switch (nombreIcono) {
      case "Habitaciones":
        navigation.navigate("Habitaciones");
        break;
      case "Favoritos":
        navigation.navigate("Favoritos");
        break;
      case "Configuracion":
        navigation.navigate("Configuracion");
        break;
      default:
        break;
    }
  };

  return (
    <View style={styles.container}>
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
        >
          <Image
            style={styles.logo}
            source={require("../../assets/LogoTeloReservo.png")}
          />
        </View>
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
        <View>{children}</View>
      </ScrollView>
      <View style={styles.footer}>
        <Navbar></Navbar>
        {/* <TouchableOpacity
          style={styles.nav}
          value={changeIcon}
          onPress={() => handleChangeIcon("Habitaciones")}
        >
          {changeIcon !== "Habitaciones" ? (
            <Ionicons name="ios-bed-outline" size={24} color="black" />
          ) : (
            <Ionicons name="ios-bed" size={24} color="black" />
          )}
          <Text>Habitaciones</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.nav}
          value={changeIcon}
          onPress={() => handleChangeIcon("Favoritos")}
        >
          {changeIcon !== "Favoritos" ? (
            <Ionicons name="ios-heart-outline" size={24} color="black" />
          ) : (
            <Ionicons name="ios-heart-sharp" size={24} color="black" />
          )}
          <Text>Favoritos</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.nav}
          value={changeIcon}
          onPress={() => handleChangeIcon("Configuracion")}
        >
          {changeIcon !== "Configuracion" ? (
            <Ionicons name="ios-settings-outline" size={24} color="black" />
          ) : (
            <Ionicons name="ios-settings" size={24} color="black" />
          )}
          <Text>Configuración</Text>
        </TouchableOpacity> */}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  logo: {
    width: 70,
    height: 70,
    resizeMode: "contain",
    paddingTop: 40,
    paddingBottom: 40,
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
  footer: {
    backgroundColor: "#fafafa",
    padding: 10,
    alignItems: "top",
    justifyContent: "space-around",
    height: 100,
    flexDirection: "row",
  },
  nav: {
    alignItems: "center",
  },
});

export default Layout;
