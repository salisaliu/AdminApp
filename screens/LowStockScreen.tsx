// screens/LowStockScreen.tsx
import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";

export default function LowStockScreen() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("http://172.20.10.4:8000/api/products/") // Replace with your local IP
      .then((res) => res.json())
      .then((data) => {
        const lowStock = data.filter((p: any) => p.stock < 50);
        setProducts(lowStock);
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.header}>Low Stock Products (&lt; 50)</Text>
      {products.length === 0 && <Text>No products found.</Text>}
      {products.map((product: any) => (
        <View key={product.id} style={styles.card}>
          <Text>
            {product.name} - {product.stock} left
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
    backgroundColor: "#ffe4e1",
    borderRadius: 6,
  },
});
