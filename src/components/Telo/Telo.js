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
      <CarouselTelo />
      <View style={styles.contenedorNombreTelo}>
        <Text style={styles.tituloTelo}>Nombre Telo</Text>
        <View style={styles.contenedorEstrellas}>
          <Ionicons name="star" size={16} color="black" />
          <Ionicons name="star" size={16} color="black" />
          <Ionicons name="star" size={16} color="black" />
          <Ionicons name="star" size={16} color="black" />
          <Ionicons name="star" size={16} color="black" />
        </View>
      </View>
      <View style={styles.contenedorReservar}>
        <TouchableOpacity style={styles.BotonReservar}>
          <Text style={{ color: 'white' }}>RESERVÁ AHORA</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.contenedorBotones}>
        <TouchableOpacity
          style={{ backgroundColor: "#f48aa0", width: '40%', margin: 20, borderRadius: 6, }}
          onPress={() => {
            navigate("Precios");
          }}>
          <View >
            <Text style={styles.botonesModal}>HABITACIONES</Text>
            <View style={styles.comodidades}>
              <MaterialCommunityIcons name="bed-king" size={50} color="white" />
            </View>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={{ backgroundColor: "#f48aa0", width: '40%', margin: 20, borderRadius: 6, }}
          onPress={() => {
            navigate("Comodidades");
          }}>
          <View >
            <Text style={styles.botonesModal}>COMODIDADES</Text>
            <View style={styles.comodidades}>
              <Ionicons name="wifi" size={30} color="white" />
              <FontAwesome5 name="parking" size={30} color="white" />
              <Ionicons name="snow" size={30} color="white" />
            </View>
          </View>
        </TouchableOpacity>
      </View>
      <View style={styles.contenedorBotones}>
        <TouchableOpacity
          style={{ backgroundColor: "#f48aa0", width: '40%', margin: 20, borderRadius: 6, }}
          onPress={() => {
            navigate("Valoraciones");
          }}>
          <View >
            <Text style={styles.botonesModal}>VALORACIÓN</Text>
            <View style={styles.comodidades}>
              <Text style={{ fontSize: 30, color: 'white' }}>7.8</Text>
            </View>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={{ backgroundColor: "#f48aa0", width: '40%', margin: 20, borderRadius: 6, }}
          onPress={() => {
            navigate("ContactoTelo");
          }}>
          <View >
            <Text style={styles.botonesModal}>CONTACTO</Text>
            <View style={styles.comodidades}>
              <Feather name="map-pin" size={30} color="white" />
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
  },
  tituloTelo: {
    fontWeight: "bold",
    fontSize: 24,
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
    color: "white",
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
  },
})