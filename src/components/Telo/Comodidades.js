import React, { useState } from "react";
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Ionicons, FontAwesome5, MaterialIcons, MaterialCommunityIcons } from '@expo/vector-icons';

const Comodidades = () => {

    return (
        <ScrollView>
            <View style={{ flexDirection: 'row', width: '100%', justifyContent: ' center', alignItems: 'center', }}>
                <View style={styles.contenedorOpcion}>
                    <TouchableOpacity>
                        <View style={styles.opcion}>
                            <Ionicons name="wifi" size={50} color="#f48aa0" />
                            <Text>Wi Fi</Text>
                        </View>
                    </TouchableOpacity>
                </View>
                <View style={styles.contenedorOpcion}>
                    <TouchableOpacity>
                        <View style={styles.opcion}>
                            <FontAwesome5 name="parking" size={50} color="#f48aa0" />
                            <Text>Estacionamiento</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={{ flexDirection: 'row', width: '100%', justifyContent: ' center', alignItems: 'center', }}>
                <View style={styles.contenedorOpcion}>
                    <TouchableOpacity>
                        <View style={styles.opcion}>
                            <Ionicons name="snow" size={50} color="#f48aa0" />
                            <Text>Pieza climatizada</Text>
                        </View>
                    </TouchableOpacity>
                </View>
                <View style={styles.contenedorOpcion}>
                    <TouchableOpacity>
                        <View style={styles.opcion}>
                            <MaterialIcons name="local-bar" size={50} color="#f48aa0" />
                            <Text>Bar Local</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={{ flexDirection: 'row', width: '100%', justifyContent: ' center', alignItems: 'center', }}>
                <View style={styles.contenedorOpcion}>
                    <TouchableOpacity>
                        <View style={styles.opcion}>
                            <MaterialCommunityIcons name="pool" size={50} color="#f48aa0" />
                            <Text>Jacuzzi</Text>
                        </View>
                    </TouchableOpacity>
                </View>
                <View style={styles.contenedorOpcion}>
                    <TouchableOpacity>
                        <View style={styles.opcion}>
                            <FontAwesome5 name="bluetooth" size={50} color="#f48aa0" />
                            <Text>Música</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={{ flexDirection: 'row', width: '100%', justifyContent: ' center', alignItems: 'center', }}>
                <View style={styles.contenedorOpcion}>
                    <TouchableOpacity>
                        <View style={styles.opcion}>
                            <FontAwesome5 name="tv" size={50} color="#f48aa0" />
                            <Text>TV</Text>
                        </View>
                    </TouchableOpacity>
                </View>
                <View style={styles.contenedorOpcion}>
                    <TouchableOpacity>
                        <View style={styles.opcion}>
                            <MaterialCommunityIcons name="hair-dryer" size={50} color="#f48aa0" />
                            <Text>Secador de Pelo</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        </ScrollView>

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
        borderBottomWidth: 1,
        borderColor: "#ccc",
        height: 180,
        borderRadius: 6,
        justifyContent: "center",
        alignItems: "center",
        width: '50%',
    },
    opcion: {
        height: 60,
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "center",
        gap: 10,
    },
});
