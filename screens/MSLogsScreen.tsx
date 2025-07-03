import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const MSLogsScreen = () => (
  <View style={styles.container}>
    <Text style={styles.text}>MS logs.</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  text: {
    fontSize: 18,
    color: '#333',
  },
});

export default MSLogsScreen;