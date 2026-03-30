import React from "react";
import {NavigationContainer} from '@react-navigation/native';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from 'react-native-vector-icons/Ionicons';

import StackNavigator from "./StackNavigator";
import AddGameScreen from "../Screens/AddGameScreen";
import GamingNewsScreen from "../Screens/GamingNewsScreen";

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
    return(
        <Tab.Navigator
            screenOptions={({route})=>({
                tabBarIcon:({focused,size,color})=>{
                    let iconName;
                    if(route.name === 'CatalogTab'){
                    iconName = focused ? 'game-controller' : 'game-controller-outline';
                    }else if(route.name === 'AddGame'){
                    iconName = focused ? 'add-circle' : 'add-circle-outline';
                    }else if(route.name === 'GamingNews'){
                    iconName = focused ? 'newspaper' : 'newspaper-outline';
                    }
                    return <Ionicons name={iconName} size={size} color={color} />;
                },
                tabBarActiveTintColor: '#ff4784',
                tabBarInactiveTintColor: 'gray',
                headerTintColor: '#ff4784',
            })}
        >

               
            <Tab.Screen 
                name="CatalogTab" 
                component={StackNavigator} 
                options={{ 
                title: 'Catálogo',
                headerShown: false 
                }} 
            />
            <Tab.Screen 
                name="AddGame" 
                component={AddGameScreen} 
                options={{title:'Agregar juego'}}
            />
            <Tab.Screen 
                name="GamingNews" 
                component={GamingNewsScreen}
                options={{title:'Noticias'}}
             />

        </Tab.Navigator>
    )
}

export default TabNavigator;