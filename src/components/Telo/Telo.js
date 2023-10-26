import React from "react";
import { Text, ScrollView, StyleSheet } from "react-native";
import Constants from "expo-constants";
import CarouselTelo from "../Carousel/CarouselTelo";

const Telo = () => {
  return (
    <ScrollView
      style={{
        // marginTop: Constants.statusBarHeight,
        backgroundColor: "#f0f0f0",
      }}
    >
      <CarouselTelo />
    </ScrollView>
  );
};

export default Telo;


const styles = StyleSheet.create({

})