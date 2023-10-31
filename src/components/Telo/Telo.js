import * as React from "react";
import { Text, ScrollView, StyleSheet, View, TouchableOpacity } from "react-native";
import Constants from "expo-constants";
import CarouselTelo from "../Carousel/CarouselTelo";
import { Ionicons } from "@expo/vector-icons";
import { FontAwesome5 } from '@expo/vector-icons';
import MapView, { Marker } from "react-native-maps"

const Telo = () => {

  const mapRef = React.useRef(null);

  const [origin, setOrigin] = React.useState({
    latitude: -26.840411,
    longitude: -65.219853,
  })



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
        <View style={styles.estrellas}>
          <Ionicons name="star" size={12} color="black" />
          <Ionicons name="star" size={12} color="black" />
          <Ionicons name="star" size={12} color="black" />
        </View>
      </View>
      <View style={styles.contenedorPestañas}>
        <TouchableOpacity style={styles.botonPestaña}>
          <Text>Información</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.botonPestaña}>
          <Text>Habitaciones</Text>
        </TouchableOpacity>
      </View>
      <View>
        <Text style={styles.subtitlos}>COMODIDADES</Text>
        <TouchableOpacity>
          <View style={styles.comodidades}>
            <View style={styles.comodidadesIconos}>
              <Ionicons name="wifi" size={40} color="black" />
              <Text>WiFi</Text>
            </View>
            <View style={styles.comodidadesIconos}>
              <FontAwesome5 name="parking" size={40} color="black" />
              <Text>Estacionamiento</Text>
            </View>
            <View style={styles.comodidadesIconos}>
              <Ionicons name="snow" size={40} color="black" />
              <Text >Aire</Text>
            </View>
          </View>
          <View style={styles.verMas}>
            <Text styles={styles.textoRosa}>Ver más...</Text>
          </View>
        </TouchableOpacity>
      </View>
      <View>
        <Text style={styles.subtitlos}>VALORACIONES</Text>
        <Text style={{ marginStart: 20, fontSize: 15, marginBottom: 10, fontWeight: 'bold' }}>PUNTUACIÓN</Text>
        <TouchableOpacity>
          <View>
            <View style={styles.puntuacion}>
              <Text style={styles.puntuaje}>7.8</Text>
              <Text style={{ fontWeight: 'bold' }}>BUENO</Text>
            </View>
            <View style={styles.contenedorPuntuaje}>
              <View style={styles.puntajeDetalle}>
                <Text>Confort</Text>
                <Text>8.0</Text>
              </View>
              <View style={styles.puntajeDetalle}>
                <Text>Edificio</Text>
                <Text>7.0</Text>
              </View>
            </View>
            <View style={styles.contenedorPuntuaje}>
              <View style={styles.puntajeDetalle}>
                <Text>Servicio</Text>
                <Text>8.0</Text>
              </View>
              <View style={styles.puntajeDetalle}>
                <Text>Habitaciones</Text>
                <Text>8.0</Text>
              </View>
            </View>
            <Text style={{
              marginStart: 20,
              fontSize: 15,
              marginBottom: 20,
              fontWeight: 'bold',
              marginTop: 20
            }}
            >
              OPINIONES
            </Text>
            <Text style={{
              marginStart: 20,
              fontSize: 13,
              marginBottom: 20,
              fontWeight: 'bold',
              marginTop: 10
            }}
            >
              El wifi anda muy bien cerca de la entrada pero en la habitacion no.
            </Text>


            <View style={styles.verMas}>
              <Text styles={styles.textoRosa}>Ver más...</Text>
            </View>

          </View>
        </TouchableOpacity>
      </View>
      <View>
        <Text style={styles.subtitlos}>CONTACTO</Text>
        <Text style={{ marginStart: 20, fontSize: 15, marginBottom: 10, }}>Crisostomo Alvarez 000</Text>
        <Text style={{ marginStart: 20, fontSize: 15, marginBottom: 10, }}>San Miguel de Tucumán</Text>
        <Text style={{ marginStart: 20, fontSize: 15, marginBottom: 10, }}>+54(381)1234569</Text>
      </View>
      <View style={styles.containerMap}>
        <MapView
          ref={mapRef}
          style={styles.map}
          initialRegion={{
            latitude: origin.latitude,
            longitude: origin.longitude,
            latitudeDelta: 0.09,
            longitudeDelta: 0.04
          }}
        >
          <Marker coordinate={origin} />
        </MapView>
      </View>
    </ScrollView>
  );
};

export default Telo;


const styles = StyleSheet.create({
  contenedorNombreTelo: {
    alignItems: "left",
    paddingTop: 20,
  },
  tituloTelo: {
    fontWeight: "bold",
    paddingLeft: 20,
    fontSize: 24,
  },
  estrellas: {
    paddingTop: 10,
    paddingLeft: 20,
    paddingHorizontal: 12,
    flexDirection: "row",
    width: 170,
  },
  contenedorPestañas: {
    width: '100%',
    height: 40,
    borderBottomWidth: 1,
    borderColor: "#ccc",
    marginVertical: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  botonPestaña: {
    alignItems: "center",
    width: '50%',
  },
  subtitlos: {
    marginStart: 20,
    marginVertical: 20,
    fontSize: 18,
    color: "#454545",
  },
  comodidades: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    gap: 15,
    marginVertical: 10,
    marginHorizontal: 20,
  },
  comodidadesIconos: {
    justifyContent: "center",
    alignItems: "center",
    width: '33%'
  },
  verMas: {
    flexDirection: "row",
    justifyContent: "flex-end",
    width: '100%',
    marginVertical: 10,
    paddingEnd: 20,
    paddingBottom: 15,
    borderBottomWidth: 1,
    borderColor: "#ccc",
  },
  textoRosa: {
    color: "#FFDDE2",
    fontSize: 10,
  },
  contenedorPuntuaje: {
    width: '100%',
    flexDirection: "row",
    marginVertical: 20,
  },
  puntuacion: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    marginVertical: 10,
    marginHorizontal: 20,
  },
  puntuaje: {
    backgroundColor: "green",
    borderWidth: 1,
    width: 60,
    paddingVertical: 15,
    textAlign: "center",
    borderColor: "transparent",
    borderRadius: 6,
    fontWeight: "bold",
    fontSize: 18,
  },
  puntajeDetalle: {
    width: '40%',
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 10,
    marginVertical: 10,
    marginHorizontal: 20,
  },
  containerMap: {
    height: 200,
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 10,
    shadowOffset: {
      width: 1,
      height: 1,
    },
  },
  map: {
    borderRadius: 10,
    width: '100%',
    height: '100%',
  },
})