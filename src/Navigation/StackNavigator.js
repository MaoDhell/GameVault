import React from "react";
import {NavigationContainer} from '@react-navigation/native';
import { createStackNavigator } from "@react-navigation/stack";

import GameListScreen from "../Screens/GameListScreen";
import GameDetailScreen from "../Screens/GameDetailScreen";

const Stack = createStackNavigator();

const StackNavigator = () => {
    return(
        <NavigationContainer>
            <Stack.Navigator 
                initialRouteName="Home"
            >
                <Stack.Screen
                    name = "Home"
                    component = {GameListScreen}
                    options={{title:'GameVault'}}
                />
                <Stack.Screen
                    name = "Details"
                    component = {GameDetailScreen}
                    options={{title:'Detalles del juego'}}
                />
                
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default StackNavigator;