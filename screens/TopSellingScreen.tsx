// screens/TopSellingScreen.tsx
import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";

export default function TopSellingScreen() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("http://172.20.10.4:8000/api/products/") // Replace with your local IP
      .then((res) => res.json())
      .then((data) => {
        const sorted = [...data].sort((a: any, b: any) => b.sold - a.sold);
        const top10 = sorted.slice(0, 10);
        setProducts(top10);
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.header}>Top 10 Sold Products</Text>
      {products.length === 0 && <Text>No data available.</Text>}
      {products.map((product: any, index: number) => (
        <View key={product.id} style={styles.card}>
          <Text>
            {index + 1}. {product.name} - Sold: {product.sold}
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
    backgroundColor: "#e0f7fa",
    borderRadius: 6,
  },
});
