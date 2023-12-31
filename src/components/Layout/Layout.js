import React, { useState } from "react";
import { DarkTheme, NavigationContainer, useNavigation } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Ionicons } from "@expo/vector-icons";
import { View, StyleSheet, Pressable } from "react-native";
import { Entypo } from '@expo/vector-icons';

//screensHome
import Home from "../Home/Home";
import FiltroModal from "../Modals/FiltroModal";
import ListaTelos from "../Telo/ListaTelos";
import SortModal from "../Modals/SortModal";
import Maps from "../Maps/Maps";
//screenFavorites
import Favoritos from "../Favoritos/Favoritos";
import Telo from "../Telo/Telo";
import Comodidades from "../Telo/Comodidades";
//screenConfiguration
import Configuracion from "../Configuracion/Configuracion";
import HabitacionesPrecios from "../Telo/HabitacionesPrecios";
import Valoraciones from "../Telo/Valoraciones";
import ContactoTelo from "../Telo/ContactoTelo";

const FavoritosStackNav = createNativeStackNavigator();
const HomeStackNav = createNativeStackNavigator();

function StackHome() {

  const navigate = useNavigation();
  const handleBack = () => {
    navigate.goBack();
  }

  return (
    <HomeStackNav.Navigator initialRoute="HomeFeed">
      <HomeStackNav.Screen
        name="TabGroup"
        component={TabGroup}
        options={{
          headerShown: false,
        }}
      />
      <HomeStackNav.Screen
        name="Mapa"
        component={Maps}
        options={{
          presentation: "modal",
        }}
      />
      <HomeStackNav.Screen
        name="Lista Telos"
        component={ListaTelos}
        options={{
          presentation: "card",
          headerShown: false,
        }}
      />
      <HomeStackNav.Screen
        name="Ordenar por"
        component={SortModal}
        options={{
          presentation: "modal",
          headerRight: () => (
            <Pressable>
              <Entypo name="cross" size={26} color="black" onPress={handleBack} />
            </Pressable>
          ),
        }}
      />
      <HomeStackNav.Screen
        name="Filtrar por"
        component={FiltroModal}
        options={{
          presentation: "modal",
          headerRight: () => (
            <Pressable>
              <Entypo name="cross" size={26} color="black" onPress={handleBack} />
            </Pressable>
          ),
        }}
      />
    </HomeStackNav.Navigator>
  );
}

function StackFavoritos() {

  const navigate = useNavigation();
  const handleBack = () => {
    navigate.goBack();
  }

  return (
    <FavoritosStackNav.Navigator initialRoute="FavoritosHome">
      <FavoritosStackNav.Screen
        name="Tus favoritos"
        component={Favoritos}
        options={
          {
            // headerShown: false,
          }
        }
      />
      <FavoritosStackNav.Screen
        name="Telo"
        component={Telo}
        options={{
          // headerShown: false,
          headerTitle: "Nombre Telo",
          headerTitleAlign: "center",
        }}
      />
      <FavoritosStackNav.Screen
        name="Comodidades"
        component={Comodidades}
        options={{
          presentation: "modal",

        }}
      />
      <FavoritosStackNav.Screen
        name="Precios"
        component={HabitacionesPrecios}
        options={{
          presentation: "modal",

        }}
      />
      <FavoritosStackNav.Screen
        name="Valoraciones"
        component={Valoraciones}
        options={{
          presentation: "modal",

        }}
      />
      <FavoritosStackNav.Screen
        name="ContactoTelo"
        component={ContactoTelo}
        options={{
          presentation: "modal",
          headerTitle: "",
        }}
      />
    </FavoritosStackNav.Navigator>
  );
}

function TabGroup() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          if (route.name === "Home") {
            return (
              <Ionicons
                name={focused ? "ios-bed" : "ios-bed-outline"}
                size={size}
                color={focused ? '#f48aa0' : "gray"}
              />
            );
          } else if (route.name === "Configuración") {
            return (
              <Ionicons
                name={focused ? "ios-settings" : "ios-settings-outline"}
                size={size}
                color={focused ? '#f48aa0' : "gray"}
              />
            );
          } else if (route.name === "Favoritos") {
            return (
              <Ionicons
                name={focused ? "ios-heart-sharp" : "ios-heart-outline"}
                size={size}
                color={focused ? '#f48aa0' : "gray"}
              />
            );
          }
        },
        tabBarInactiveTintColor: "gray",
        tabBarActiveTintColor: "#f48aa0",
        tabBarStyle: { height: 65, paddingBottom: 10 }
      })}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false,
        }}
      // options={{ tabBarBadge: 3 }}
      // esta opcion es para poner notificaciones
      />
      <Tab.Screen
        name="Favoritos"
        component={StackFavoritos}
        options={{
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Configuración"
        component={Configuracion}
        options={{
          headerShown: false,
        }}
      />
    </Tab.Navigator>
  );
}

const Tab = createBottomTabNavigator();

const Layout = ({ children }) => {
  return (
    <View style={styles.container}>
      <View>{children}</View>
      <NavigationContainer
      // theme={DarkTheme}
      >
        <StackHome />
      </NavigationContainer>
    </View>
  );
};

export default Layout;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
