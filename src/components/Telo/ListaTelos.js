import React, { useState } from "react";
import Constants from "expo-constants";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import {
    Text,
    View,
    ScrollView,
    StyleSheet,
    Pressable,
    TouchableOpacity
} from "react-native";

const ListaTelos = () => {
    const navigate = useNavigation();


    return (
        <ScrollView
            style={{
                backgroundColor: "#f0f0f0",
                marginTop: Constants.statusBarHeight,
            }}
            contentContainerStyle={{ flexGrow: 1 }}
        >
            <View style={styles.searchContainer}>
                <Pressable
                    style={styles.input}
                    placeholder="Buscar..."
                >
                    <Text style={{ color: "grey" }}>Ej: San Miguel de Tucumán</Text>
                </Pressable>
                <Text style={styles.separador}></Text>
                <View style={styles.filters}>
                    <TouchableOpacity
                        style={styles.botonFiltro}
                        onPress={() => navigate.navigate("Filtrar por")}
                    >
                        <Ionicons name="ios-filter" size={24} color="black" />
                        <Text>Filtros</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.botonFiltro}
                        onPress={() => navigate.navigate("Ordenar por")}
                    >
                        <MaterialCommunityIcons name="sort" size={24} color="black" />
                        <Text>Ordenar por</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <View>
                <Text>Lista de Cards de Telos registrados aqui</Text>
            </View>
        </ScrollView>
    );
};

export default ListaTelos;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    searchContainer: {
        flexDirection: "column",
        justifyContent: "space-around",
        alignItems: "start",
        borderWidth: 1,
        borderRadius: 5,
        padding: 10,
        borderColor: "transparent",
        backgroundColor: "#fff",
        margin: 10,
        height: "25%",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
    input: {
        borderRadius: 25,
        paddingStart: 10,
        borderColor: "#ccc",
        backgroundColor: "#f0f0f0",
        height: 40,
        width: "100%",
        justifyContent: "center",
    },
    separador: {
        borderTopWidth: 1,
        borderColor: "#ccc",
        width: "100%",
        height: 1,
    },
    filters: {
        flexDirection: "row",
        width: "100%",
        justifyContent: "space-around",
    },
    botonFiltro: {
        justifyContent: "space-between",
        alignItems: "center",
        width: "30%"
    }
});
