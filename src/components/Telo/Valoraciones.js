import React from 'react'
import { Text, ScrollView, StyleSheet, View, TouchableOpacity } from "react-native";

const Valoraciones = () => {
    return (
        <View style={{ marginTop: 20 }}>
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

                </View>
            </TouchableOpacity>
        </View>
    )
}

export default Valoraciones

const styles = StyleSheet.create({
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
})