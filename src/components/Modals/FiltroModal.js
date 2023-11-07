import React, { useState } from 'react'
import { ScrollView } from 'react-native';
import { View, Text, StyleSheet, TouchableOpacity, Switch } from 'react-native'
import Slider from "react-native-a11y-slider";

const FiltroModal = () => {

    const [selected, setSelected] = useState("NuestrasRecomendaciones");
    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled((previousState) => !previousState);

    const handleOptionSelect = (option) => {
        setSelected(option);
        // navigation.goBack(); // Navega a la página anterior
        //hay que hacer que tenga un delay minimo y hacer que quede en el contexto
    }

    return (
        <View>
            <ScrollView>
                <View style={styles.contenedorOpcion}>
                    <View>
                        <View style={styles.opcion}>
                            <Text style={styles.subtitulo}>PUNTUACIÓN</Text>
                            <View style={styles.contenedorBotonesPuntuacion}>
                                <TouchableOpacity style={styles.botonPuntuacionRojo} onPress={() => handleOptionSelect("")}>
                                    <Text style={{ fontWeight: 'bold', color: 'white' }}>0</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.botonPuntuacionAmarillo} onPress={() => handleOptionSelect("7+")}>
                                    <Text style={{ fontWeight: 'bold', color: 'white' }}>7+</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.botonPuntuacionVerdeClaro} onPress={() => handleOptionSelect("7.5+")}>
                                    <Text style={{ fontWeight: 'bold', color: 'white' }}>7.5+</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.botonPuntuacionVerdeOscuro} onPress={() => handleOptionSelect("8+")}>
                                    <Text style={{ fontWeight: 'bold', color: 'white' }}>8+</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.botonPuntuacionVerdeOscuro2} onPress={() => handleOptionSelect("8.5+")}>
                                    <Text style={{ fontWeight: 'bold', color: 'white' }}>8.5+</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </View>
                <View style={styles.contenedorOpcion}>
                    <View style={styles.opcion}>
                        <Text style={styles.subtitulo}>PRECIO POR NOCHE</Text>
                        <View style={styles.opcion}>
                            <Slider min={1500} max={10000} values={[1500, 10000]} increment={100} markerColor='#f48aa0' />
                        </View>
                    </View>
                </View>
                <View style={styles.contenedorOpcionFinal}>
                    <View style={styles.opcion}>
                        <Text style={styles.subtitulo}>MAS FILTROS</Text>
                    </View>
                    <View style={styles.opcionFiltro}>
                        <Text>ESTACIONAMIENTO</Text>
                        <Switch
                            trackColor={{ false: "#767577", true: "#f48aa0" }}
                            thumbColor={isEnabled ? "#ffffff" : "#ffffff"}
                            ios_backgroundColor="#3e3e3e"
                            onValueChange={toggleSwitch}
                            value={isEnabled}
                        />
                    </View>
                    <View style={styles.opcionFiltro}>
                        <Text>AIRE ACONDICIONADO</Text>
                        <Switch
                            trackColor={{ false: "#767577", true: "#f48aa0" }}
                            thumbColor={isEnabled ? "#ffffff" : "#ffffff"}
                            ios_backgroundColor="#3e3e3e"
                            onValueChange={toggleSwitch}
                            value={isEnabled}
                        />
                    </View>
                    <View style={styles.opcionFiltro}>
                        <Text>WI-FI</Text>
                        <Switch
                            trackColor={{ false: "#767577", true: "#f48aa0" }}
                            thumbColor={isEnabled ? "#ffffff" : "#ffffff"}
                            ios_backgroundColor="#3e3e3e"
                            onValueChange={toggleSwitch}
                            value={isEnabled}
                        />
                    </View>
                    <View style={styles.opcionFiltro}>
                        <Text>JACUZZI</Text>
                        <Switch
                            trackColor={{ false: "#767577", true: "#f48aa0" }}
                            thumbColor={isEnabled ? "#ffffff" : "#ffffff"}
                            ios_backgroundColor="#3e3e3e"
                            onValueChange={toggleSwitch}
                            value={isEnabled}
                        />
                    </View>
                    <View style={styles.opcionFiltro}>
                        <Text>BAR</Text>
                        <Switch
                            trackColor={{ false: "#767577", true: "#f48aa0" }}
                            thumbColor={isEnabled ? "#ffffff" : "#ffffff"}
                            ios_backgroundColor="#3e3e3e"
                            onValueChange={toggleSwitch}
                            value={isEnabled}
                        />
                    </View>
                    <View style={styles.opcionFiltro}>
                        <Text>MEJORES OFERTAS</Text>
                        <Switch
                            trackColor={{ false: "#767577", true: "#f48aa0" }}
                            thumbColor={isEnabled ? "#ffffff" : "#ffffff"}
                            ios_backgroundColor="#3e3e3e"
                            onValueChange={toggleSwitch}
                            value={isEnabled}
                        />
                    </View>
                </View>
            </ScrollView>
            <View style={{ position: 'absolute', bottom: 0, alignItems: 'center', justifyContent: 'center', width: '100%' }}>
                <TouchableOpacity style={styles.contenedorBotonVerResultados}>
                    <Text style={styles.botonVerResultados}>Ver resultados</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default FiltroModal



const styles = StyleSheet.create({
    subtitulo: {
        fontWeight: "bold",
    },
    botonVerResultados: {
    },
    contenedorBotonVerResultados: {
        gap: 20,
        justifyContent: "center",
        alignItems: "center",
        paddingVertical: 10,
        marginVertical: 20,
        backgroundColor: '#f48aa0',
        width: '90%',
        borderRadius: 10,
    },
    contenedorOpcion: {
        fontSize: 25,
        marginHorizontal: 25,
        borderBottomWidth: 1,
        borderColor: "#ccc",
        flexGrow: 1,
        borderRadius: 6,
        justifyContent: "center",
    },
    contenedorOpcionFinal: {
        fontSize: 25,
        marginHorizontal: 25,
        paddingBottom: 80,
        borderColor: "#ccc",
        flexGrow: 1,
        borderRadius: 6,
        justifyContent: "center",
    },
    opcion: {
        gap: 20,
        justifyContent: "space-around",
        alignItems: "start",
        paddingVertical: 30,
    },
    opcionFiltro: {
        justifyContent: "space-between",
        alignItems: "center",
        flexDirection: "row",
        height: 60,
    },
    contenedorBotonesPuntuacion: {
        flexDirection: 'row',
        alignItems: "center",
        gap: 20,
        justifyContent: "center",
    },
    botonPuntuacionRojo: {
        width: '15%',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 50,
        backgroundColor: '#b22222'
    },
    botonPuntuacionVerdeClaro: {
        width: '15%',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 50,
        backgroundColor: '#00cc66'
    },
    botonPuntuacionVerdeOscuro: {
        width: '15%',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 50,
        backgroundColor: '#008040'
    },
    botonPuntuacionVerdeOscuro2: {
        width: '15%',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 50,
        backgroundColor: '#00331a'
    },
    botonPuntuacionAmarillo: {
        width: '15%',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 50,
        backgroundColor: '#cccc00'
    },
});