
import React from 'react';
import { View, Text, StyleSheet, Dimensions, image } from 'react-native';
import Carousel from 'react-native-snap-carousel';
import { CardRecientes } from '../Cards/CardRecientes';

const MyCarousel = () => {

  const data = [
    {
      heading: 'Telo 1',
      imageUri: 'URL_DE_LA_IMAGEN_1',
      title: 'titulo',
      label: 'Etiqueta 1',
      description: 'Descripción del primer elemento del carrusel.',
      footer: 'Pie de página 1',
    },
    {
      title: 'Telo 2',
      imageUri: 'URL_DE_LA_IMAGEN_2',
      title: 'titulo',
      label: 'Etiqueta 2',
      description: 'Descripción del segundo elemento del carrusel.',
      footer: 'Pie de página 2',
    },
    {
      title: 'Telo 3',
      imageUri: 'URL_DE_LA_IMAGEN_3',
      title: 'titulo',
      label: 'Etiqueta 3',
      description: 'Descripción del tercer elemento del carrusel.',
      footer: 'Pie de página 3',
    },
    // Agrega más objetos para más elementos del carrusel
  ];

  const renderItem = ({ item, index }) => {
    return (
      <View style={styles.slide}>
        <CardRecientes
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
      loop={true}
      layout={'default'}
      sliderWidth={Dimensions.get('window').width}
      itemWidth={340}
    />
  );
};

const styles = StyleSheet.create({
  item: {
    backgroundColor: 'lightblue',
    borderRadius: 5,
    height: 200,
    padding: 10,
    marginLeft: 25,
    marginRight: 25,
  },
  slide: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default MyCarousel;

