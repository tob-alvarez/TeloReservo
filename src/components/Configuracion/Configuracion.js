import React, { useContext, useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View, Switch } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import Constants from "expo-constants";

const Configuracion = () => {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);

  // const { navigate } = useNavigation();

  return (
    <View style={{
      marginTop: Constants.statusBarHeight,
    }}>
      <Text style={styles.titulo}>Alerta precios</Text>
      <View style={styles.contenedorOpcion}>
        <TouchableOpacity>
          <View style={styles.opcion}>
            <Text>Administrar alertas de precios</Text>
            <MaterialIcons name="arrow-forward-ios" size={18} color="black" />
          </View>
        </TouchableOpacity>
      </View>
      <Text style={styles.titulo}>Preferencias</Text>
      <View style={styles.contenedorOpcion}>
        <TouchableOpacity style={styles.opcion}>
          <Text>Provincia</Text>
          <View style={{ flexDirection: "row" }}>
            <Text>Tucumán </Text>
            <MaterialIcons name="arrow-forward-ios" size={18} color="black" />
          </View>
        </TouchableOpacity>
      </View>
      <View style={styles.contenedorOpcion}>
        <View style={styles.opcion}>
          <Text>Notificaciones push</Text>
          <View style={{ flexDirection: "row" }}>
            <Switch
              trackColor={{ false: "#767577", true: "#f48aa0" }}
              thumbColor={isEnabled ? "#ffffff" : "#ffffff"}
              ios_backgroundColor="#3e3e3e"
              onValueChange={toggleSwitch}
              value={isEnabled}
            />
          </View>
        </View>
      </View>
      <Text style={styles.titulo}>About</Text>
      <View style={styles.contenedorOpcion}>
        <TouchableOpacity style={styles.opcion}>
          <Text>Version</Text>
          <View style={{ flexDirection: "row" }}>
            <Text>0.1 (alpha)</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Configuracion;

const styles = StyleSheet.create({
  titulo: {
    fontWeight: "bold",
    fontSize: 20,
    margin: 25,
  },
  contenedorOpcion: {
    fontSize: 20,
    marginHorizontal: 25,
    borderTopWidth: 1,
    borderColor: "#ccc",
    height: 60,
    borderRadius: 6,
    justifyContent: "center",
  },
  opcion: {
    height: 60,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  BotonRosita: {
    backgroundColor: "#f48aa0",
    width: "90%",
    marginHorizontal: 25,
    paddingVertical: 10,
    borderRadius: 2,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
  },
  contenedorBoton: {
    alignItems: "center",
  },
});
