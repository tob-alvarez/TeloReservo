import { Entypo, Ionicons } from '@expo/vector-icons';
import React, { useState } from 'react'
import { TouchableOpacity } from 'react-native';
import { View, Text, StyleSheet, Image } from "react-native";

const CardTeloBusqueda = () => {
  const [fav, setFav] = useState(true);

  handleFav = () => {
    setFav(!fav);
  };

  return (
    <View style={styles.card}>
      <TouchableOpacity>
        <View>
          <Image source={{ uri: 'https://elcomercio.pe/resizer/SgYtnAzluKyPeVdqdW-pWI1_4n4=/580x330/smart/filters:format(jpeg):quality(75)/arc-anglerfish-arc2-prod-elcomercio.s3.amazonaws.com/public/KH4UYLZFOBFTTCGJBWADDJ4VEI.jpg' }}
            style={styles.cardImage}>
          </Image>
          <View style={styles.botonFav}>
            <TouchableOpacity style={styles.corazon} onPress={handleFav}>
              <Ionicons
                name={fav ? "ios-heart-sharp" : "ios-heart-outline"}
                size={30}
                color={fav ? "#f48aa0" : "white"}
              />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.cardBody}>
          <Text style={styles.cardTitle}>Telo 1</Text>
          <View style={styles.cardfooter}>
            <View style={styles.cardCalificacionCont}>
              <Text style={styles.cardCalificacion}> 5,2 ⭐</Text>
            </View>
            <Text style={styles.cardUbicacion}> <Ionicons name="location-sharp" size={15} color="#f48aa0" /> A 1,2 km de distancia</Text>
          </View>
          <Text style={styles.separador}></Text>
          <View style={{ flexDirection: "row" }}>
            <Text style={styles.cardPrecio}> $4.800 </Text>
            <Text style={{ fontSize: 15, top: 15, color: "#f48aa0" }}> ARS </Text>
          </View>
          <Text style={styles.cardVerMas}> Ver más...</Text>
        </View>
      </TouchableOpacity>
    </View>
  )
};

const styles = StyleSheet.create({
  card: {
    width: "90%",
    borderRadius: 10,
    marginVertical: 12,
    marginHorizontal: 20,
    backgroundColor: '#fffffff',
    elevation: 3,
    shadowOffset: {
      width: 1,
      height: 1,
    }
  },

  cardImage: {
    width: "100%",
    height: 120,
    objectFit: "cover",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,

  },
  corazon: {
    width: 45,
    height: 45,
    position: "absolute",
    bottom: 68,
    left: "85%",
    backgroundColor: "rgba(0, 10, 0, 0.7)",
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center"

  },
  cardBody: {
    height: 130,
    backgroundColor: "white",
    paddingLeft: 10,
    borderBottomRightRadius: 10,
    borderBottomLeftRadius: 10,
  },

  cardTitle: {
    color: "#000000",
    fontSize: 20,
    fontWeight: "bold",
  },

  cardfooter: {
    flexDirection: "row",
    alignItems: "center",
    paddingTop: 5,
  },
  cardUbicacion: {
    color: "#000000",
    fontSize: 12,
  },

  cardCalificacion: {
    color: "#ffffff",
    fontSize: 13,
    paddingHorizontal: 5,
  },

  cardCalificacionCont: {
    borderRadius: 8,
    backgroundColor: "green",
    height: 22,
    justifyContent: "center",
    marginEnd: 5,
  },
  separador: {
    marginTop: 10,
    borderTopWidth: 1,
    borderColor: "#ccc",
    width: "95%",
    height: 1,
  },
  cardPrecio: {
    paddingTop: 5,
    fontSize: 25,
    color: "#f48aa0",
  },
  cardVerMas: {
    left: "80%",
    color: "#000000",
    fontSize: 12,
  },
})


export default CardTeloBusqueda;
