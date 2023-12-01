import React, { useRef, useState } from "react";
import { TouchableOpacity, Text, View, Image, StyleSheet, TextInput, ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import axios from "../../../config/axios";

const Registro = () => {
    const formDataRef = useRef({
        user: '',
        email: '',
        password: '',
        repeatPassword: '',
    })

    const handleChange = (name, value) => {
        formDataRef.current = {
            ...formDataRef.current,
            [name]: value
        };
    };
    const navigation = useNavigation();
    const agregarUsuario = async () => {
        try {
            const respuesta = await axios.post("/users/alta", formDataRef.current);
            formDataRef.current = {
                userName: '',
                email: '',
                password: '',
                repeatPassword: '',
            }
            navigation.navigate('Configuracion')
        } catch (error) {
            console.log("Error al enviar los datos. Intente nuevamente más tarde.");
        }
    };


    return (
        <ScrollView
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
                <Text style={styles.titulo}>Bienvenido !</Text>
            </View>
            <View style={styles.contenedorForm}>
                <View>
                    <Text style={styles.label}>Usuario</Text>
                    <TextInput
                        placeholder="Pepito15"
                        style={styles.input}
                        defaultValue={formDataRef.current.user}
                        onChangeText={(value) => handleChange("userName", value)}
                    ></TextInput>
                </View>
                <View>
                    <Text style={styles.label}>Email</Text>
                    <TextInput
                        placeholder="ejemplo@gmail.com"
                        style={styles.input}
                        defaultValue={formDataRef.current.email}
                        onChangeText={(value) => handleChange("email", value)}
                    ></TextInput>
                </View>
                <View>
                    <Text style={styles.label}>Contraseña</Text>
                    <TextInput
                        placeholder="***********"
                        style={styles.input}
                        defaultValue={formDataRef.current.password}
                        onChangeText={(value) => handleChange("password", value)}
                    ></TextInput>
                </View>
                <View>
                    <Text style={styles.label}>Confirmar contraseña</Text>
                    <TextInput
                        placeholder="***********"
                        style={styles.input}
                        defaultValue={formDataRef.current.repeatPassword}
                        onChangeText={(value) => handleChange("repeatPassword", value)}
                    ></TextInput>
                </View>
                <TouchableOpacity style={styles.boton} onPress={agregarUsuario}>
                    <Text style={{ color: 'white' }}>
                        Registrarse
                    </Text>
                </TouchableOpacity>
            </View>

        </ScrollView>
    );
};

export default Registro;

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
        fontSize: 35,
    },
    contenedorForm: {
        backgroundColor: '#f0f0f0',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        paddingVertical: 10,
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