import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import GameListScreen from '../Screens/GameListScreen';
import GameDetailScreen from '../Screens/GameDetailScreen';

const Stack = createStackNavigator();

const StackNavigator = () => {
  return ( 
    <Stack.Navigator initialRouteName="GameList">
      <Stack.Screen 
        name="GameList" 
        component={GameListScreen} 
        options={{ title: 'Lista de Videojuegos' }} 
      />
      <Stack.Screen 
        name="GameDetail" 
        component={GameDetailScreen} 
        options={{ title: 'Detalle del Videojuego' }} 
      />
    </Stack.Navigator>
  );
};

export default StackNavigator;