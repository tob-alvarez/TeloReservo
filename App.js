import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Card from './src/components/Card';
import Card2 from './src/components/Card2';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Habitaciones" component={Card} />
        <Stack.Screen name="Favoritos" component={Card2} />
        <Stack.Screen name="Configuracion" component={Card} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

