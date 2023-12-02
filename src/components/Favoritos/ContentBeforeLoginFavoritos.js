import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

const ContentBeforeLoginFavoritos = () => {
  return (
    <View style={styles.container}>
      <View style={styles.container2}>
        <Text style={styles.tituloFavoritos}>Agregá tus favoritos !</Text>
        <View style={styles.itemContainer}>
          <Text style={styles.bullet}>•</Text>
          <Text>Agregá para tener a mano tus favoritos</Text>
        </View>
        <View style={styles.itemContainer}>
          <Text style={styles.bullet}>•</Text>
          <Text>Compará tus favoritos aqui</Text>
        </View>
        <View style={styles.itemContainer}>
          <Text style={styles.bullet}>•</Text>
          <Text>Ingresá para poder verlos !</Text>
        </View>
      </View>
      <View>
        <View style={styles.contenedorBoton}>
          <TouchableOpacity style={styles.BotonRosita}>
            <Text style={{ color: 'white' }}>Buscar</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default ContentBeforeLoginFavoritos;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-around",
  },
  container2: {
    alignItems: "center",
  },
  tituloFavoritos: {
    margin: 40,
    fontSize: 20,
    fontWeight: "bold",
  },
  itemContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 5,
  },
  bullet: {
    marginRight: 5,
    fontSize: 20,
  },
  BotonRosita: {
    backgroundColor: "#f48aa0",
    width: 300,
    paddingVertical: 10,
    borderRadius: 5,
    alignItems: "center",
  },
  contenedorBoton: {
    alignItems: "center",
    marginTop: 20,
    width: '100%',
    gap: 20,
  },
});
