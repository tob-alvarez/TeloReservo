import React, { useState } from "react";
import { Text, StyleSheet, View, TouchableOpacity, Image } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const CardFav = () => {
  const [fav, setFav] = useState(true);

  handleFav = () => {
    setFav(!fav);
  };

  return (
    <View style={styles.padre}>
      <View style={[styles.card, styles.cardElevated]}>
        <View style={styles.cardBody}>
          <View>
            <Text style={styles.cardTitle}>Gregorio</Text>
            <Text style={styles.cardlabel}>SAN MIGUEL DE TUCUMÁN</Text>

            <View style={styles.estrellas}>
              <Ionicons name="star" size={12} color="black" />
              <Ionicons name="star" size={12} color="black" />
              <Ionicons name="star" size={12} color="black" />
            </View>
            <View style={styles.puntuacion}>
              <Text style={styles.puntuaje}>7.8</Text>
              <View>
                <Text style={{ fontSize: 12 }}>Good</Text>
                <Text style={{ fontSize: 10, color: "#cccbbb" }}>
                  120 REVIEWS
                </Text>
              </View>
            </View>
            <View style={styles.botonFav}>
              <TouchableOpacity onPress={handleFav} style={{ width: 40 }}>
                <Ionicons
                  name={fav ? "ios-heart-sharp" : "ios-heart-outline"}
                  size={30}
                  color={"red"}
                />
              </TouchableOpacity>
            </View>
          </View>
          <Image
            source={require("../../../assets/gregorioTelo.png")}
            style={styles.cardImage}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  padre: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  card: {
    width: "90%",
    height: 200,
    borderRadius: 6,
    marginVertical: 12,
    marginHorizontal: 16,
    borderWidth: 1,
    borderColor: "#ccccc",
    justifyContent: "center",
    alignItems: "start",
  },
  cardElevated: {
    backgroundColor: "#fff",
    elevation: 3,
    shadowOffset: {
      width: 1,
      height: 1,
    },
  },
  cardImage: {
    height: "100%",
    borderTopRightRadius: 5,
    borderBottomRightRadius: 5,
    width: "40%",
  },
  cardBody: {
    borderRadius: 6,
    flexDirection: "row",
    width: "100%",
    height: "100%",
    justifyContent: "space-between",
  },
  cardTitle: {
    paddingHorizontal: 12,
    color: "#000000",
    paddingTop: 8,
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 4,
    width: 170,
  },
  cardlabel: {
    paddingHorizontal: 12,
    color: "#000000",
    fontSize: 10,
    marginBottom: 6,
    width: 170,
  },
  estrellas: {
    paddingHorizontal: 12,
    flexDirection: "row",
    width: 170,
  },
  puntuacion: {
    paddingHorizontal: 12,
    paddingTop: 30,
    gap: 5,
  },
  puntuaje: {
    backgroundColor: "green",
    borderWidth: 1,
    width: 30,
    textAlign: "center",
    borderColor: "transparent",
    borderRadius: 6,
  },
  botonFav: {
    paddingHorizontal: 12,
    width: 170,
    paddingTop: 10,
  },
});

export default CardFav;
