import React, { useState } from "react";
import Constants from "expo-constants";
import { useNavigation } from "@react-navigation/native";
import {
  Text,
  View,
  ScrollView,
  StyleSheet,
  Image,
  Pressable,
  RefreshControl,
  SafeAreaView,
} from "react-native";

const Home = () => {
  const { navigate } = useNavigation();
  const [refreshing, setRefreshing] = React.useState(false);

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 2000);
  }, []);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView
        style={{
          marginTop: Constants.statusBarHeight,
          backgroundColor: "#f0f0f0",
        }}
        contentContainerStyle={{ flexGrow: 1 }}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
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
          <Pressable
            style={styles.input}
            placeholder="Buscar..."
            onPress={() => {
              navigate("Prueba");
            }}
          >
            <Text style={{ color: "grey" }}>Ej: San Miguel de Tucumán</Text>
          </Pressable>
          <Text style={styles.separador}></Text>
          <Pressable style={styles.BotonRosita} placeholder="Buscar...">
            <Text>Buscar</Text>
          </Pressable>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  searchContainer: {
    flexDirection: "column",
    justifyContent: "space-around",
    alignItems: "start",
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    borderColor: "transparent",
    backgroundColor: "#fff",
    margin: 10,
    height: "25%",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  input: {
    borderRadius: 25,
    paddingStart: 10,
    borderColor: "#ccc",
    backgroundColor: "#f0f0f0",
    height: 40,
    width: "100%",
    justifyContent: "center",
  },
  BotonRosita: {
    backgroundColor: "#FFDDE2",
    width: "100%",
    paddingVertical: 10,
    borderRadius: 5,
    alignItems: "center",
  },
  logoTeloReservo: {
    height: 70,
    objectFit: "contain",
    margin: 15,
  },
  centeredView: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "flex-end",
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 10,
    width: "95%",
    height: "90%",
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
  separador: {
    borderTopWidth: 1,
    borderColor: "#ccc",
    width: "100%",
    height: 1,
  },
});
