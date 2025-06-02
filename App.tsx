import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from './screens/HomeScreen';
import TopSellingScreen from './screens/TopSellingScreen';
import StockScreen from './screens/StockScreen';
import LowStockScreen from './screens/LowStockScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="TopSelling" component={TopSellingScreen} />
        <Stack.Screen name="StockScreen" component={StockScreen} />
        <Stack.Screen name="LowStock" component={LowStockScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
