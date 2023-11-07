import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Ionicons, MaterialIcons, MaterialCommunityIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const HabitacionesPrecios = () => {

    const navigation = useNavigation();


    return (
        <View>
            <View style={styles.contenedorOpcion}>
                <TouchableOpacity>
                    <View style={styles.opcion}>
                        <MaterialIcons name="king-bed" size={50} color="#f48aa0" />
                        <Text>Habitación Premium</Text>
                        <Text style={{ fontWeight: 'bold' }}>$9999 x 2hs</Text>
                    </View>

                </TouchableOpacity>
            </View>
            <View style={styles.contenedorOpcion}>
                <TouchableOpacity>
                    <View style={styles.opcion}>
                        <MaterialCommunityIcons name="bed-queen" size={50} color="#f48aa0" />
                        <Text>Habitación Semi Premium</Text>
                        <Text style={{ fontWeight: 'bold' }}>$9999 x 2hs</Text>
                    </View>
                </TouchableOpacity>
            </View>
            <View style={styles.contenedorOpcion}>
                <TouchableOpacity>
                    <View style={styles.opcion}>
                        <MaterialCommunityIcons name="bed-single" size={50} color="#f48aa0" />
                        <Text>Habitación Común</Text>
                        <Text style={{ fontWeight: 'bold' }}>$9999 x 2hs</Text>
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
