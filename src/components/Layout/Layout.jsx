import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import Home from "./src/components/Home/Home";
import Favoritos from "./src/components/Favoritos/Favoritos";
import Configuracion from "./src/components/Configuracion/Configuracion";

const Tab = createBottomTabNavigator();

export default function App() {
  return (
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
          // options={{ tabBarBadge: 3 }}
          // esta opcion es para poner notificaciones
        />
        <Tab.Screen name="Favoritos" component={Favoritos} />
        <Tab.Screen name="Configuración" component={Configuracion} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
