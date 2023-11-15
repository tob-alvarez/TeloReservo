import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Ionicons, MaterialIcons, MaterialCommunityIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import Habitacion from "./Habitacion";

const HabitacionesPrecios = () => {

    const { navigate } = useNavigation();


    return (
        <View>
            <View style={styles.contenedorOpcion}>
                <TouchableOpacity
                    onPress={() => {
                        navigate("Habitacion", { tipo: "Premium", precio: 4999 });
                    }}>
                    <View style={styles.opcion}>
                        <MaterialIcons name="king-bed" size={50} color="#f48aa0" />
                        <Text>Habitación Premium</Text>
                        <Text style={{ fontWeight: 'bold' }}>$4999 x hs</Text>
                    </View>

                </TouchableOpacity>
            </View>
            <View style={styles.contenedorOpcion}>
                <TouchableOpacity onPress={() => {
                    navigate("Habitacion", { tipo: "Semi Premium", precio: 3999 });
                }}>
                    <View style={styles.opcion}>
                        <MaterialCommunityIcons name="bed-queen" size={50} color="#f48aa0" />
                        <Text>Habitación Semi Premium</Text>
                        <Text style={{ fontWeight: 'bold' }}>$3999 x hs</Text>
                    </View>
                </TouchableOpacity>
            </View>
            <View style={styles.contenedorOpcion}>
                <TouchableOpacity onPress={() => {
                    navigate("Habitacion", { tipo: "Común", precio: 2999 });
                }}>
                    <View style={styles.opcion}>
                        <MaterialCommunityIcons name="bed-single" size={50} color="#f48aa0" />
                        <Text>Habitación Común</Text>
                        <Text style={{ fontWeight: 'bold' }}>$2999 x hs</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default HabitacionesPrecios;


const styles = StyleSheet.create({
    titulo: {
        fontWeight: "bold",
        fontSize: 20,
        margin: 25,
    },
    contenedorOpcion: {
        fontSize: 25,
        marginHorizontal: 25,
        borderBottomWidth: 1,
        borderColor: "#ccc",
        height: 200,
        borderRadius: 6,
        justifyContent: "center",
    },
    opcion: {
        height: '100%',
        justifyContent: "center",
        gap: 5,
        alignItems: "center",
    },
});
