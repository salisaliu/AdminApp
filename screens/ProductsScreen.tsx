import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  FlatList,
  Button,
  StyleSheet,
  ActivityIndicator,
  Alert,
} from "react-native";

type Product = {
  id: number;
  name: string;
  price: number;
  quantity: number;
};

const ProductsScreen: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("http://172.20.10.4:8000/api/products/");
        const data: Product[] = await response.json();
        setProducts(data);
      } catch (error) {
        Alert.alert("Error", "Failed to fetch products");
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const handleOrder = (product: Product) => {
    Alert.alert("Order Placed", `You ordered: ${product.name}`);
    // TODO: Send POST request to place the order
  };

  const renderProduct = ({ item }: { item: Product }) => (
    <View style={styles.card}>
      <Text style={styles.title}>{item.name}</Text>
      <Text style={styles.description}>Price: ${item.price}</Text>
      <Text style={styles.description}>In Stock: {item.quantity}</Text>
      <Button title="Order" onPress={() => handleOrder(item)} />
    </View>
  );

  if (loading) {
    return <ActivityIndicator size="large" style={styles.loading} />;
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={products}
        renderItem={renderProduct}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={styles.list}
      />
    </View>
  );
};

export default ProductsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
  },
  list: {
    padding: 16,
  },
  card: {
    backgroundColor: "#fff",
    padding: 16,
    marginBottom: 16,
    borderRadius: 12,
    elevation: 3,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
  },
  description: {
    marginVertical: 4,
    fontSize: 14,
    color: "#555",
  },
  loading: {
    flex: 1,
    justifyContent: "center",
  },
});
