import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Ionicons } from "@expo/vector-icons";
import { View, StyleSheet } from "react-native";

//screens
import Home from "../Home/Home";
import Favoritos from "../Favoritos/Favoritos";
import Configuracion from "../Configuracion/Configuracion";
import Telo from "../Telo/Telo";

const FavoritosStackNav = createNativeStackNavigator();

function StackFavoritos() {
  return (
    <FavoritosStackNav.Navigator initialRoute="FavoritosHome">
      <FavoritosStackNav.Screen
        name="FavoritosHome"
        component={Favoritos}
        options={{
          headerShown: false,
        }}
      />
      <FavoritosStackNav.Screen
        name="FavoritosTelo"
        component={Telo}
        options={{
          headerShown: false,
        }}
      />
    </FavoritosStackNav.Navigator>
  );
}

const Tab = createBottomTabNavigator();

const Layout = ({ children }) => {
  return (
    <View style={styles.container}>
      <View>{children}</View>
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              if (route.name === "Home") {
                return (
                  <Ionicons
                    name={focused ? "ios-bed" : "ios-bed-outline"}
                    size={size}
                    color={color}
                  />
                );
              } else if (route.name === "Configuración") {
                return (
                  <Ionicons
                    name={focused ? "ios-settings" : "ios-settings-outline"}
                    size={size}
                    color={color}
                  />
                );
              } else if (route.name === "Favoritos") {
                return (
                  <Ionicons
                    name={focused ? "ios-heart-sharp" : "ios-heart-outline"}
                    size={size}
                    color={color}
                  />
                );
              }
            },
            tabBarInactiveTintColor: "gray",
            tabBarActiveTintColor: "black",
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
