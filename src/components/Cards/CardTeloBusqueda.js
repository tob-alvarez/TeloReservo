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
    <View style={{backgroundColor:"red", height:"100%"}}> 

    <View style={[styles.card, styles.cardElevated]}>
      <View style={{ position: "relative" }}>

        <Image source={{ uri: 'https://elcomercio.pe/resizer/SgYtnAzluKyPeVdqdW-pWI1_4n4=/580x330/smart/filters:format(jpeg):quality(75)/arc-anglerfish-arc2-prod-elcomercio.s3.amazonaws.com/public/KH4UYLZFOBFTTCGJBWADDJ4VEI.jpg' }}
          style={styles.cardImage}></Image>
        <View style={styles.botonFav}>
          <TouchableOpacity style={styles.corazon} onPress={handleFav}>
            <Ionicons
              name={fav ? "ios-heart-sharp" : "ios-heart-outline"}
              size={30}
              color={fav ? "red" : "white"}
              />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.cardBody}>
        <Text style={styles.cardTitle}>Telo Pingo</Text>
        <View style={styles.cardfooter}>
          <View style={styles.cardCalificacionCont}>
            <Text style={styles.cardCalificacion}> 5,2 ⭐</Text>
          </View>
          <Text style={styles.cardUbicacion}> <Ionicons name="location-sharp" size={15} color="black" /> A 1,2 km de distancia</Text>
        </View>
        <Text style={styles.separador}></Text>
        <View style={{flexDirection:"row"}}>

          <Text style={styles.cardPrecio}> $4.800 </Text>
          <Text style={{fontSize:15, top:15, color: "rgba(60, 180, 0, 1)"}}> ARS </Text>
        </View>
        <Text style={styles.cardVerMas}> Ver más...</Text>

      </View>
    </View>
              </View>
  )
};

const styles = StyleSheet.create({


  card: {
    width: "90%",
    height: 120,
    borderRadius: 10,
    marginVertical: 12,
    marginHorizontal: 20,
  },

  cardElevated: {
    backgroundColor: '#fffffff',
    elevation: 3,
    shadowOffset: {
      width: 1,
      height: 1,
    }
  },

  cardImage: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,

  },
  corazon: {
    width: 45,
    height: 45,
    position: "absolute",
    bottom: 68,
    left: "86%",
    backgroundColor: "rgba(0, 10, 0, 0.7)",
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center"

  },
  cardBody: {
    height: "120%",
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
    fontSize: 13
  },

  cardCalificacionCont: {
    borderRadius: 8,
    backgroundColor: "rgba(60, 180, 0, 1)",
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
    color: "rgba(60, 180, 0, 1)",
  },
  cardVerMas: {
    position: "absolute",
    bottom: "10%",
    left: "80%",
    color: "#000000",
    fontSize: 12,
  },

  // cardContent: {
  //   marginHorizontal: 18,
  //   marginVertical: 10,
  // }
  // headingText: {
  //   fontSize: 24,
  //   fontWeight: 'bold',
  //   paddingHorizontal: 8,

  // },

  // cardDescription: {
  //   color: "#ffffff",
  //   fontSize: 12,
  // },



})


export default CardTeloBusqueda;
