import React from 'react'
import Swiper from 'react-native-swiper';
import { CardRecientes } from '../Cards/CardRecientes';
import { StyleSheet, Dimensions } from 'react-native';
import { View } from 'react-native';

export const CarouselMave = () => {

    const data = [
        {
            id: 'id',
            heading: 'Telo 1',
            imageUri: 'URL_DE_LA_IMAGEN_1',
            title: 'titulo',
            label: 'Etiqueta 1',
            description: 'Descripción del primer elemento del carrusel.',
            footer: 'Pie de página 1',
        },
        {
            id: 'id',
            title: 'Telo 2',
            imageUri: 'URL_DE_LA_IMAGEN_2',
            title: 'titulo',
            label: 'Etiqueta 2',
            description: 'Descripción del segundo elemento del carrusel.',
            footer: 'Pie de página 2',
        },
        {
            id: 'id',
            title: 'Telo 3',
            imageUri: 'URL_DE_LA_IMAGEN_3',
            title: 'titulo',
            label: 'Etiqueta 3',
            description: 'Descripción del tercer elemento del carrusel.',
            footer: 'Pie de página 3',
        },
        // Agrega más objetos para más elementos del carrusel
    ];
    return (
        <Swiper style={styles.wrapper}>
            {data.map((card) => (
                <View key={card.id} style={styles.slide}>

                    <CardRecientes />
                </View>
            ))}
        </Swiper>
    )
}

const styles = StyleSheet.create({
    wrapper: {
    },
    slide: {
        // Estilos para cada tarjeta
    },
    
});