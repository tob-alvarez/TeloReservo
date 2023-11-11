import React, { useState } from "react";
import { TouchableOpacity, Text, View, Image, StyleSheet, TextInput } from "react-native";
import { useNavigation } from "@react-navigation/native";

const Login = () => {
    const { navigate } = useNavigation();

    return (
        <View
            style={{
                backgroundColor: "#f48aa0",
            }}
            contentContainerStyle={{ flexGrow: 1 }}
        >
            <View
                style={styles.contenedorLogo}
            >
                <Image
                    source={require("../../../assets/LogoTeloReservo.png")}
                    style={styles.logoTeloReservo}
                />
            </View>
            <View style={styles.contenedorTituloLogin}>
                <Text style={styles.titulo}>Login</Text>
            </View>
            <View style={styles.contenedorForm}>
                <View>
                    <Text style={styles.label}>Email o usuario</Text>
                    <TextInput
                        placeholder="ejemplo@gmail.com"
                        style={styles.input}
                    ></TextInput>
                </View>
                <View>
                    <Text style={styles.label}>Contraseña</Text>
                    <TextInput
                        placeholder="***********"
                        style={styles.input}
                    ></TextInput>
                </View>
                <TouchableOpacity style={styles.boton}>
                    <Text style={{ color: 'white' }}>
                        Ingresar
                    </Text>
                </TouchableOpacity>
            </View>
            <View style={styles.contenedorRedireccion}>
                <Text>No tienes cuenta?</Text><TouchableOpacity onPress={() => navigate("Registro")}><Text style={{ color: '#f48aa0' }}>Registrarse</Text></TouchableOpacity>
            </View>
        </View>
    );
};

export default Login;

const styles = StyleSheet.create({
    contenedorLogo: {
        height: 200,
        alignItems: 'center',
        justifyContent: 'center',
    },
    logoTeloReservo: {
        height: 100,
        objectFit: "contain",
        margin: 50,
    },
    contenedorTituloLogin: {
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f0f0f0',
        padding: 30,
        borderTopRightRadius: 50,
        borderTopLeftRadius: 50,
    },
    titulo: {
        fontSize: 40,
    },
    contenedorForm: {
        backgroundColor: '#f0f0f0',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        paddingVertical: 20,
    },
    label: {
        paddingStart: 10,
        color: 'gray',
        paddingVertical: 5,
    },
    input: {
        borderRadius: 5,
        paddingStart: 10,
        borderColor: "#ccc",
        backgroundColor: "#fff",
        height: 60,
        width: 220,
        justifyContent: "center",
    },
    boton: {
        width: 220,
        borderRadius: 5,
        marginVertical: 15,
        paddingVertical: 5,
        backgroundColor: "#f48aa0",
        height: 50,
        justifyContent: "center",
        alignItems: "center",
    },
    contenedorRedireccion: {
        width: '100%',
        paddingTop: 20,
        backgroundColor: '#f0f0f0',
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'center',
        gap: 5
    }
});