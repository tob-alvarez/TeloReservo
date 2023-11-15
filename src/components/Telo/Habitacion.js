import { ScrollView, StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import Slider from '../Slider/Slider';

const Habitacion = ({ route }) => {

    const { tipo, precio } = route.params;
    const [selectedValue, setSelectedValue] = useState(null);

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
            <View style={styles.contenedorPrecio}>
                <Text style={styles.precio}>Subtotal : ${precio * selectedValue}</Text>
            </View>
        </ScrollView>
    )
}

export default Habitacion

const styles = StyleSheet.create({
    contenedorTitulo: {
        justifyContent: 'center',
        alignItems: 'center',
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
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center'
    },
    titulo: {
        fontSize: 20,
        fontWeight: 'bold',
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