import * as React from "react";
import * as Location from 'expo-location'
import MapView, { Marker } from "react-native-maps"
import { Text, StyleSheet, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const Maps = () => {

    const mapRef = React.useRef(null); // Ref para acceder al mapa

    const [origin, setOrigin] = React.useState({
        latitude: -26.840411,
        longitude: -65.219853,
    })

    React.useEffect(() => {
        getLocationPermission();
    }, [])

    async function getLocationPermission() {
        let { status } = await Location.requestForegroundPermissionsAsync();
        if (status !== 'granted') {
            alert('Permission denied');
            return
        }
        let location = await Location.getCurrentPositionAsync({});
        const current = {
            latitude: location.coords.latitude,
            longitude: location.coords.longitude
        }
        setOrigin(current);

        // Centrar el mapa en las coordenadas actuales
        mapRef.current.animateToRegion({
            latitude: current.latitude,
            longitude: current.longitude,
            latitudeDelta: 0.09,
            longitudeDelta: 0.04
        });
    }

    return (
        <View style={styles.container}>
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
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    map: {
        width: '100%',
        height: '100%',
    },
});

export default Maps;
