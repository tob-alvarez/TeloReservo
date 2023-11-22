import { ScrollView, StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import Slider from '../Slider/Slider';
import { FontAwesome, MaterialIcons } from '@expo/vector-icons';

const Habitacion = ({ route }) => {

    const { tipo, precio } = route.params;
    const [selectedValue, setSelectedValue] = useState(2);

    const options = [2, 3, 4, 5];

    const renderOption = ({ item }) => (
        <TouchableOpacity
            style={[
                styles.option,
                selectedValue === item && styles.selectedOption
            ]}
            onPress={() => {
                setSelectedValue(item);
            }}
        >
            <Text style={{ color: selectedValue === item ? 'white' : 'black' }}>{item}</Text>
        </TouchableOpacity>
    );

    let totalPrecio = selectedValue * precio + 300

    return (
        <ScrollView>
            <Slider />
            <View style={styles.contenedorTitulo}>
                <Text style={styles.titulo}>Habitacion {tipo}</Text>
            </View>
            <View style={{ justifyContent: 'center', alignItems: 'center', gap: 10 }}>
                <Text>Elegi las horas</Text>
                <View style={styles.contenedorFlatList}>
                    <FlatList
                        horizontal
                        data={options}
                        renderItem={renderOption}
                        keyExtractor={(item, index) => index.toString()}
                    />
                </View>
            </View>
            {/* <View style={styles.contenedorPrecio}>
                <Text style={styles.precio}>Subtotal : ${precio * selectedValue}</Text>
            </View> */}
            <Text style={styles.titulo}>Medios de pago</Text>
            <View style={styles.contenedorResumen}>
                <View style={styles.contenedorItems}>
                    <View style={styles.item}>
                        <TouchableOpacity style={{ flexDirection: 'row', width: '100%', justifyContent: 'space-between' }}>
                            <Text>
                                <FontAwesome name="credit-card" size={24} color="black" />
                            </Text>
                            <Text>${precio * selectedValue}</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.item}>
                        <TouchableOpacity style={{ flexDirection: 'row', width: '100%', justifyContent: 'space-between' }}>
                            <Text>Agregar cupón</Text><Text>
                                <MaterialIcons name="arrow-forward-ios" size={18} color="black" />
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
            <Text style={styles.titulo}>Resumen</Text>
            <View style={styles.contenedorFinal}>
                <View style={styles.contenedorItems}>
                    <View style={styles.item}>
                        <Text>Habitación</Text><Text>${precio * selectedValue}</Text>
                    </View>
                    <View style={styles.item}>
                        <Text>Tarifa de servicio</Text><Text>$300</Text>
                    </View>
                    <View style={styles.item}>
                        <Text>Descuentos</Text><Text>$0</Text>
                    </View>
                </View>
            </View>
            <View style={styles.contenedorConfirmarPago}>
                <TouchableOpacity style={styles.botonConfirmarReserva}>
                    <Text>Reservalo YA</Text><Text style={{ fontWeight: 'bold' }}>${totalPrecio}</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    )
}

export default Habitacion

const styles = StyleSheet.create({
    contenedorTitulo: {
        justifyContent: 'center',
        alignItems: 'start',
        height: 70,
        marginVertical: 5,
    },
    contenedorPrecio: {
        justifyContent: 'center',
        width: '100%',
        alignItems: 'center',
        marginVertical: 15,
    },
    contenedorFlatList: {
        width: '90%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    contenedorResumen: {
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20,
    },
    contenedorFinal: {
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20,
        marginBottom: 100,
    },
    contenedorItems: {
        width: '90%',
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#ccc',
        padding: 20,
        gap: 30,
    },
    contenedorConfirmarPago: {
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        bottom: 0,
        width: '100%',
        marginBottom: 20,
    },
    botonConfirmarReserva: {
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        gap: 8,
        backgroundColor: '#f48aa0',
        width: '90%',
        padding: 20,
    },
    item: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
    },
    titulo: {
        fontSize: 20,
        fontWeight: 'bold',
        marginLeft: 20,
        paddingTop: 20,
    },
    precio: {
        fontSize: 20,
    },
    option: {
        padding: 20,
        margin: 20,
        backgroundColor: 'white',
        borderRadius: 5,
        marginHorizontal: 10,
    },
    selectedOption: {
        backgroundColor: '#f48aa0', // Cambia al color que desees para la opción seleccionada
    },
})