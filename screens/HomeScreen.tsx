import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  StatusBar,
} from 'react-native';

import TopSellingScreen from './TopSellingScreen';

export default function HomeScreen({ navigation }: any) {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#fff" />

      <Text style={styles.title}>Coffee Manager</Text>
      <Text style={styles.subtitle}>Manage your café like a pro ☕</Text>

      <View style={styles.topSellingContainer}>
        <TopSellingScreen />
      </View>

      {/* Bottom button container */}
      <View style={styles.bottomButtons}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Home')}
        >
          <Text style={styles.buttonText}>🏠 Main</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('TopSelling')}
        >
          <Text style={styles.buttonText}>🔥 Top Selling</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('StockScreen')}
        >
          <Text style={styles.buttonText}>📦 Stock</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fffef9',
    alignItems: 'center',
    paddingTop: 40,
    paddingHorizontal: 20,
    justifyContent: 'space-between', // Push buttons to bottom
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#6f4e37',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    color: '#8b6f47',
    marginBottom: 20,
  },
  topSellingContainer: {
    width: '100%',
    height: 250,
    marginBottom: 20,
  },
  bottomButtons: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    paddingVertical: 20,
    borderTopWidth: 1,
    borderTopColor: '#ddd',
    backgroundColor: '#fffef9',
  },
  button: {
    backgroundColor: '#6f4e37',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 10,
    alignItems: 'center',
    flex: 1,
    marginHorizontal: 5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: '600',
  },
});
