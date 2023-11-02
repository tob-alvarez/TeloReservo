import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const Comodidades = () => {

    const [selected, setSelected] = useState("NuestrasRecomendaciones");
    const navigation = useNavigation();

    const handleOptionSelect = (option) => {
        setSelected(option);
        // navigation.goBack(); // Navega a la página anterior
        //hay que hacer que tenga un delay minimo y hacer que quede en el contexto
    }

    return (
        <View>
            <View style={styles.contenedorOpcion}>
                <TouchableOpacity onPress={() => handleOptionSelect("NuestrasRecomendaciones")}>
                    <View style={styles.opcion}>
                        <Text>Nuestras recomendaciones</Text>
                        {selected === "NuestrasRecomendaciones" && <Ionicons name="checkmark" size={24} color="black" />}
                    </View>
                </TouchableOpacity>
            </View>
            <View style={styles.contenedorOpcion}>
                <TouchableOpacity onPress={() => handleOptionSelect("Rating")}>
                    <View style={styles.opcion}>
                        <Text>Rating</Text>
                        {selected === "Rating" && <Ionicons name="checkmark" size={24} color="black" />}
                    </View>
                </TouchableOpacity>
            </View>
            <View style={styles.contenedorOpcion}>
                <TouchableOpacity onPress={() => handleOptionSelect("Precio")}>
                    <View style={styles.opcion}>
                        <Text>Precio</Text>
                        {selected === "Precio" && <Ionicons name="checkmark" size={24} color="black" />}
                    </View>
                </TouchableOpacity>
            </View>
            <View style={styles.contenedorOpcion}>
                <TouchableOpacity onPress={() => handleOptionSelect("Distancia")}>
                    <View style={styles.opcion}>
                        <Text>Distancia</Text>
                        {selected === "Distancia" && <Ionicons name="checkmark" size={24} color="black" />}
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default Comodidades;


const styles = StyleSheet.create({
    titulo: {
        fontWeight: "bold",
        fontSize: 20,
        margin: 25,
    },
    contenedorOpcion: {
        fontSize: 25,
        marginHorizontal: 25,
        borderTopWidth: 1,
        borderColor: "#ccc",
        height: 80,
        borderRadius: 6,
        justifyContent: "center",
    },
    opcion: {
        height: 60,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
});
