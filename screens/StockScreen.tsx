// screens/StockScreen.tsx
import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Button,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function StockScreen() {
  const [products, setProducts] = useState([]);
  const navigation = useNavigation();

  useEffect(() => {
    fetch("http://172.20.10.4:8000/api/products/") // Replace with your local IP
      .then((res) => res.json())
      .then((data) => {
        const inStock = data.filter((p: any) => p.stock > 0);
        setProducts(inStock);
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("LowStock")}
      >
        <Text style={styles.buttonText}>View Low Stock (&lt; 50)</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("TopSelling")}
      >
        <Text style={styles.buttonText}>View Top 10 Sold</Text>
      </TouchableOpacity>
      <Text style={styles.header}>In-Stock Products</Text>
      {products.map((product: any) => (
        <View key={product.id} style={styles.card}>
          <Text>
            {product.name} - {product.stock} in stock
          </Text>
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { padding: 20 },
  header: { fontSize: 22, marginBottom: 10 },
  card: {
    padding: 10,
    marginVertical: 5,
    backgroundColor: "#eee",
    borderRadius: 6,
  },
  button: {
    backgroundColor: "#4CAF50",
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
    alignItems: "center",
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
  },
});
