import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import HomeScreen from "./screens/HomeScreen";
import TopSellingScreen from "./screens/TopSellingScreen";
import StockScreen from "./screens/StockScreen";
import LowStockScreen from "./screens/LowStockScreen";
import ProductsScreen from "./screens/ProductsScreen";
import LoginScreen from "./screens/LoginScreen";

export type RootStackParamList = {
  Login: undefined;
  Home: undefined;
  TopSelling: undefined;
  StockScreen: undefined;
  LowStock: undefined;
  ProductScreen: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();

export default function App() {
  const [role, setRole] = useState<string | null>(null);

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="AdminHome" component={HomeScreen} />
        <Stack.Screen name="EmployeeHome" component={ProductsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
