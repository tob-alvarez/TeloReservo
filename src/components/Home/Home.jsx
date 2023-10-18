import React, { useState } from "react";
import {
  Text,
  View,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Image,
  Modal,
  Pressable,
  RefreshControl,
  SafeAreaView,
} from "react-native";

const Home = () => {
  const [refreshing, setRefreshing] = React.useState(false);

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 2000);
  }, []);

  const [modalVisible, setModalVisible] = useState(false);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView
        style={{
          // marginTop: Constants.statusBarHeight,
          backgroundColor: "#f0f0f0",
        }}
        contentContainerStyle={{ flexGrow: 1 }}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      >
        <View
          style={{
            backgroundColor: "#tranparent",
            alignItems: "center",
          }}
        >
          <Image
            source={require("../../../assets/LogoTeloReservo.png")}
            style={styles.logoTeloReservo}
          />
        </View>
        <View style={styles.searchContainer}>
          <Pressable
            style={styles.input}
            placeholder="Buscar..."
            onPress={() => setModalVisible(true)}
          >
            <Text style={{ color: "grey" }}>Ej: San Miguel de Tucumán</Text>
          </Pressable>
          <Text style={styles.separador}></Text>
          <Pressable style={styles.BotonRosita} placeholder="Buscar...">
            <Text>Buscar</Text>
          </Pressable>
        </View>
        <View style={styles.centeredView}>
          <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => {
              Alert.alert("Modal has been closed.");
              setModalVisible(!modalVisible);
            }}
          >
            <View style={styles.centeredView}>
              <View style={styles.modalView}>
                <Text style={styles.modalText}>Modal con ubicaciones</Text>
                <Pressable
                  style={[styles.button, styles.buttonClose]}
                  onPress={() => setModalVisible(!modalVisible)}
                >
                  <Text style={styles.textStyle}>Hide Modal</Text>
                </Pressable>
              </View>
            </View>
          </Modal>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;

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
  BotonRosita: {
    backgroundColor: "#FFDDE2",
    width: "100%",
    paddingVertical: 10,
    borderRadius: 5,
    alignItems: "center",
  },
  logoTeloReservo: {
    height: 70,
    objectFit: "contain",
    margin: 15,
  },
  centeredView: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "flex-end",
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 10,
    width: "95%",
    height: "90%",
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
  separador: {
    borderTopWidth: 1,
    borderColor: "#ccc",
    width: "100%",
    height: 1,
  },
});
