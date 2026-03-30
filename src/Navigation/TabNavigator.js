import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import StackNavigator from './StackNavigator';

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return ( // <--- CRÍTICO: Debe estar aquí
    <Tab.Navigator>
      <Tab.Screen 
        name="CatalogTab" 
        component={StackNavigator} 
        options={{ 
          title: 'Catálogo',
          headerShown: false 
        }} 
      />
    </Tab.Navigator>
  );
};

export default TabNavigator;