import React from 'react';
import { View, Text, StyleSheet, Dimensions, image } from 'react-native';
import Carousel from 'react-native-snap-carousel';
import { Card2 } from "../Cards/Card2";

const MyCarousel = () => {

  const data = [
    {
      heading: 'Telo 1',
      imageUri: 'URL_DE_LA_IMAGEN_1',
      title:'titulo',
      label: 'Etiqueta 1',
      description: 'Descripción del primer elemento del carrusel.',
      footer: 'Pie de página 1',
    },
    {
      title: 'Telo 2',
      imageUri: 'URL_DE_LA_IMAGEN_2',
      title:'titulo',
      label: 'Etiqueta 2',
      description: 'Descripción del segundo elemento del carrusel.',
      footer: 'Pie de página 2',
    },
    {
      title: 'Telo 3',
      imageUri: 'URL_DE_LA_IMAGEN_3',
      title:'titulo',
      label: 'Etiqueta 3',
      description: 'Descripción del tercer elemento del carrusel.',
      footer: 'Pie de página 3',
    },
    // Agrega más objetos para más elementos del carrusel
  ];
  
  const renderItem = ({ item, index }) => {
    return (
      <View>
        <Card2
        heading={item.heading}
        imageUri={item.imageUri}
        title={item.title}
        label={item.label}
        description={item.description}
        footer={item.footer}
        />
      </View>
    );
  };

  return (

    <Carousel
      data={data}
      renderItem={renderItem}
      sliderWidth={300}
      itemWidth={200}
    />
  );
};

const styles = StyleSheet.create({
  item: {
    backgroundColor: 'lightblue',
    borderRadius: 5,
    height: 200,
    padding: 20,
    marginLeft: 25,
    marginRight: 25,
  },
});

export default MyCarousel;