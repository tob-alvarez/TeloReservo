import React, { useState } from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'

const FiltroModal = () => {

    const [selected, setSelected] = useState("NuestrasRecomendaciones");

    const handleOptionSelect = (option) => {
        setSelected(option);
        // navigation.goBack(); // Navega a la página anterior
        //hay que hacer que tenga un delay minimo y hacer que quede en el contexto
    }

    return (
        <View>
            <View style={styles.contenedorOpcion}>
                <View>
                    <View style={styles.opcion}>
                        <Text>PUNTUACIÓN</Text>
                        <View style={styles.contenedorBotonesPuntuacion}>
                            <TouchableOpacity style={styles.botonPuntuacion} onPress={() => handleOptionSelect("")}>
                                <Text>0</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.botonPuntuacion} onPress={() => handleOptionSelect("7+")}>
                                <Text>7+</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.botonPuntuacion} onPress={() => handleOptionSelect("7.5+")}>
                                <Text>7.5+</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.botonPuntuacion} onPress={() => handleOptionSelect("8+")}>
                                <Text>8+</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.botonPuntuacion} onPress={() => handleOptionSelect("8.5+")}>
                                <Text>8.5+</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </View>
            <View style={styles.contenedorOpcion}>
                <View style={styles.opcion}>
                    <Text>PRECIO POR NOCHE</Text>
                </View>
            </View>
            <View style={styles.contenedorOpcion}>
                <View style={styles.opcion}>
                    <Text>MAS FILTROS</Text>
                </View>

            </View>
        </View>
    )
}

export default FiltroModal



const styles = StyleSheet.create({
    contenedorOpcion: {
        fontSize: 25,
        marginHorizontal: 25,
        borderBottomWidth: 1,
        borderColor: "#ccc",
        height: 150,
        borderRadius: 6,
        justifyContent: "center",
    },
    opcion: {
        gap: 40,
        justifyContent: "space-around",
        alignItems: "start",
    },
    contenedorBotonesPuntuacion: {
        flexDirection: 'row',
        alignItems: "center",
        gap: 20,
        justifyContent: "center",
    },
    botonPuntuacion: {
        width: '15%',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1,
        borderRadius: 50,
    },
});