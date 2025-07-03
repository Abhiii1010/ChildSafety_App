import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const WebFilterScreen = () => (
  <View style={styles.container}>
    <Text style={styles.text}>Web filter will appear here.</Text>
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

export default WebFilterScreen;