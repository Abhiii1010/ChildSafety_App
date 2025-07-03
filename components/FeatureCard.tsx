import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const FeatureCard = ({ title, iconName, onPress }) => (
  <TouchableOpacity style={styles.card} onPress={onPress}>
    <Ionicons name={iconName} size={24} color="#fff" />
    <Text style={styles.text}>{title}</Text>
  </TouchableOpacity>
);


const styles = StyleSheet.create({
  card: {
    width: '48%',
    height: 100,
    backgroundColor: '#4B7BEC',
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 16,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    elevation: 4,
  },
  text: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
});

export default FeatureCard;