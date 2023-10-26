import React from 'react'
import { View, Text, StyleSheet, Image } from "react-native";

export const CarouselFotosTelo = () => {
    return (
        <View style={[styles.card, styles.cardElevated]}>
            <Image source={{ uri: 'https://elcomercio.pe/resizer/SgYtnAzluKyPeVdqdW-pWI1_4n4=/580x330/smart/filters:format(jpeg):quality(75)/arc-anglerfish-arc2-prod-elcomercio.s3.amazonaws.com/public/KH4UYLZFOBFTTCGJBWADDJ4VEI.jpg' }}
                style={styles.cardImage}>
            </Image>
        </View>
    )
}

const styles = StyleSheet.create({


    card: {
        width: '100%',
        height: 200,
        borderRadius: 10,
        marginVertical: 12,
        position: "relative",
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
        // borderTopLeftRadius: 10,
        // borderTopRightRadius: 10,
        // borderBottomRightRadius: 10,
        // borderBottomLeftRadius: 10,

    },
    cardBody: {
        position: "absolute",
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: "rgba(0, 0, 0, 0.3)",
        padding: 10,
        borderBottomRightRadius: 10,
        borderBottomLeftRadius: 10,
    },

    cardTitle: {
        color: "#ffffff",
        fontSize: 15,
        fontWeight: "bold",
    },

    cardUbicacion: {
        color: "#ffffff",
        fontSize: 12,
    },


    cardCalificacion: {
        color: "#ffffff",
        fontSize: 13
    },

    cardCalificacionCont: {
        borderRadius: 8,
        backgroundColor: "rgba(0, 1000, 0, 0.6)", // Fondo semitransparente para el texto
        height: 22,
        justifyContent: "center",
        marginEnd: 5,
    },

    cardfooter: {
        flexDirection: "row",
        alignItems: "center",
    }
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


