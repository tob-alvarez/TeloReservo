import React from 'react'
import { Text, ScrollView, StyleSheet, View, TouchableOpacity } from "react-native";
import MapView, { Marker } from "react-native-maps"

const ContactoTelo = () => {


    const mapRef = React.useRef(null);

    const [origin, setOrigin] = React.useState({
        latitude: -26.840411,
        longitude: -65.219853,
    })


    return (
        <View>
            <View>
                <Text style={styles.subtitlos}>CONTACTO</Text>
                <Text style={{ marginStart: 20, fontSize: 15, marginBottom: 10, }}>Crisostomo Alvarez 000</Text>
                <Text style={{ marginStart: 20, fontSize: 15, marginBottom: 10, }}>San Miguel de Tucumán</Text>
                <Text style={{ marginStart: 20, fontSize: 15, marginBottom: 10, }}>+54(381)1234569</Text>
            </View>
            <View style={styles.containerMap}>
                <MapView
                    ref={mapRef}
                    style={styles.map}
                    initialRegion={{
                        latitude: origin.latitude,
                        longitude: origin.longitude,
                        latitudeDelta: 0.09,
                        longitudeDelta: 0.04
                    }}
                >
                    <Marker coordinate={origin} />
                </MapView>
            </View>
        </View>
    )
}

export default ContactoTelo

const styles = StyleSheet.create({
    subtitlos: {
        marginStart: 20,
        marginVertical: 20,
        fontSize: 16,
        color: "#454545",
        fontWeight: "bold",
    },
    containerMap: {
        height: 300,
        padding: 20,
        alignItems: 'center',
        justifyContent: 'center',
        elevation: 10,
        shadowOffset: {
            width: 1,
            height: 1,
        },
    },
    map: {
        borderRadius: 10,
        width: '100%',
        height: '100%',
    },
})