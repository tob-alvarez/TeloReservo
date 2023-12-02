import React, { useContext, useRef, useState } from "react";
import { TouchableOpacity, Text, View, Image, StyleSheet, TextInput, ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import axios from "../../../config/axios";
import TeloContext from "../../../context/TeloContext";

const Login = () => {
    const { navigate } = useNavigation();
    const { setAuthenticated, setUser } = useContext(TeloContext);

    const formDataRef = useRef({
        nombreUsuario: '',
        contraseña: '',
    })

    const handleChange = (name, value) => {
        formDataRef.current = {
            ...formDataRef.current,
            [name]: value
        };
    };
    const loginBack = async () => {
        try {
            const { data } = await axios.post("/users/login", formDataRef.current);
            formDataRef.current = {
                nombreUsuario: '',
                contraseña: '',
            }
            setAuthenticated(!!data.user)
            setUser(data.user);
            axios.defaults.headers.common["Authorization"] = data.token;
            navigate('Configuracion')
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
                <Text style={styles.titulo}>Login</Text>
            </View>
            <View style={styles.contenedorForm}>
                <View>
                    <Text style={styles.label}>Usuario</Text>
                    <TextInput
                        placeholder="Pepito15"
                        style={styles.input}
                        defaultValue={formDataRef.current.nombreUsuario}
                        onChangeText={(value) => handleChange("nombreUsuario", value)}
                    ></TextInput>
                </View>
                <View>
                    <Text style={styles.label}>Contraseña</Text>
                    <TextInput
                        placeholder="***********"
                        style={styles.input}
                        defaultValue={formDataRef.current.contraseña}
                        onChangeText={(value) => handleChange("contraseña", value)}
                    ></TextInput>
                </View>
                <TouchableOpacity style={styles.boton} onPress={loginBack}>
                    <Text style={{ color: 'white' }}>
                        Ingresar
                    </Text>
                </TouchableOpacity>
            </View>
            <View style={styles.contenedorRedireccion}>
                <Text>No tienes cuenta?</Text><TouchableOpacity onPress={() => navigate("Registro")}><Text style={{ color: '#f48aa0' }}>Registrarse</Text></TouchableOpacity>
            </View>
        </ScrollView>
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
        width: 250,
        justifyContent: "center",
    },
    boton: {
        width: 250,
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
        height: 150,
        paddingTop: 10,
        backgroundColor: '#f0f0f0',
        alignItems: 'start',
        flexDirection: 'row',
        justifyContent: 'center',
        gap: 5
    }
});