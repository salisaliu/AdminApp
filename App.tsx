import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import StockScreen from "./screens/StockScreen";
import LowStockScreen from "./screens/LowStockScreen";
import TopSellingScreen from "./screens/TopSellingScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Stock">
        <Stack.Screen name="Stock" component={StockScreen} />
        <Stack.Screen name="LowStock" component={LowStockScreen} />
        <Stack.Screen name="TopSelling" component={TopSellingScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
