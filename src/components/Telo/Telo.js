import * as React from "react";
import { Text, ScrollView, StyleSheet, View, TouchableOpacity } from "react-native";
import CarouselTelo from "../Carousel/CarouselTelo";
import { Ionicons, FontAwesome5, MaterialCommunityIcons, Feather } from "@expo/vector-icons";

import { useNavigation } from "@react-navigation/native";

const Telo = () => {


  const { navigate } = useNavigation();


  return (
    <ScrollView
      style={{
        // marginTop: Constants.statusBarHeight,
        backgroundColor: "#f0f0f0",
      }}
    >
      {/* <CarouselTelo /> */}
      <View style={styles.contenedorNombreTelo}>
        <Text style={styles.tituloTelo}>Nombre Telo</Text>
        <View style={styles.contenedorEstrellas}>
          <Ionicons name="star" size={20} color="#f48aa0" />
          <Ionicons name="star" size={20} color="#f48aa0" />
          <Ionicons name="star" size={20} color="#f48aa0" />
          <Ionicons name="star" size={20} color="#f48aa0" />
          <Ionicons name="star" size={20} color="#f48aa0" />
        </View>
      </View>
      <View style={styles.contenedorReservar}>
        <TouchableOpacity style={styles.BotonReservar}>
          <Text style={{ color: 'black', fontSize: 20 }}>RESERVÁ AHORA</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.contenedorBotones}>
        <TouchableOpacity
          style={styles.touchableElevado}
          onPress={() => {
            navigate("Precios");
          }}>
          <View >
            <Text style={styles.botonesModal}>HABITACIONES</Text>
            <View style={styles.comodidades}>
              <MaterialCommunityIcons name="bed-king" size={50} color="#f48aa0" />
            </View>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.touchableElevado}
          onPress={() => {
            navigate("Comodidades");
          }}>
          <View >
            <Text style={styles.botonesModal}>COMODIDADES</Text>
            <View style={styles.comodidades}>
              <Ionicons name="wifi" size={30} color="#f48aa0" />
              <FontAwesome5 name="parking" size={30} color="#f48aa0" />
              <Ionicons name="snow" size={30} color="#f48aa0" />
            </View>
          </View>
        </TouchableOpacity>
      </View>
      <View style={styles.contenedorBotones}>
        <TouchableOpacity
          style={styles.touchableElevado}
          onPress={() => {
            navigate("Valoraciones");
          }}>
          <View >
            <Text style={styles.botonesModal}>VALORACIÓN</Text>
            <View style={styles.comodidades}>
              <Text style={{ fontSize: 30, color: '#f48aa0' }}>7.8</Text>
            </View>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.touchableElevado}
          onPress={() => {
            navigate("ContactoTelo");
          }}>
          <View >
            <Text style={styles.botonesModal}>UBICACIÓN</Text>
            <View style={styles.comodidades}>
              <Feather name="map-pin" size={30} color="#f48aa0" />
            </View>
          </View>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default Telo;


const styles = StyleSheet.create({
  contenedorNombreTelo: {
    paddingVertical: 50,
    paddingHorizontal: 20,
    flexDirection: "row",
    width: '100%',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  contenedorEstrellas: {
    flexDirection: "row",
    gap: 5,
  },
  tituloTelo: {
    fontSize: 26,
    color: 'black'
  },
  contenedorBotones: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',

  },
  botonesModal: {
    marginHorizontal: 10,
    textAlign: "center",
    marginVertical: 15,
    fontSize: 16,
    color: "black",
  },
  touchableElevado: {
    backgroundColor: "#ffffff",
    width: '40%',
    margin: 20,
    borderRadius: 6,
    elevation: 5,
    shadowOffset: {
      width: 1,
      height: 1,
    },

  },
  subtitlos: {
    marginStart: 20,
    marginVertical: 20,
    fontSize: 16,
    color: "#454545",
  },
  comodidades: {
    flexDirection: "row",
    height: 60,
    justifyContent: "center",
    alignItems: "center",
    gap: 15,
    marginVertical: 10,
    marginHorizontal: 20,
  },
  comodidadesIconos: {
    justifyContent: "center",
    alignItems: "center",
    width: '33%'
  },
  contenedorReservar: {
    alignItems: "center",
  },
  BotonReservar: {
    backgroundColor: "#f48aa0",
    width: "90%",
    paddingVertical: 10,
    borderRadius: 6,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    elevation: 5,
    shadowOffset: {
      width: 1,
      height: 1,
    },
  },
})