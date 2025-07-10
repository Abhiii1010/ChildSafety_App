import React from 'react';
import { View, ScrollView, StyleSheet, Text, TouchableOpacity } from 'react-native';
import FeatureCard from '../components/FeatureCard';
import { Ionicons } from '@expo/vector-icons';

const HomeScreen = ({ navigation }) => {
  const features = [
    { title: 'Call Logs', screen: 'Call Logs', iconName: 'call-outline' },
    { title: 'SMS Logs', screen: 'SMS Logs', iconName: 'chatbox-ellipses-outline' },
    { title: 'Social Media', screen: 'Social Media', iconName: 'logo-instagram' },
    { title: 'Location Tracking', screen: 'Location', iconName: 'location-outline' },
    { title: 'App Monitoring', screen: 'App Usage', iconName: 'apps-outline' },
    { title: 'Web Filtering', screen: 'Web Filtering', iconName: 'globe-outline' },
    { title: 'Screen Time', screen: 'Screen Time', iconName: 'time-outline' },
    { title: 'Alerts', screen: 'Alerts', iconName: 'alert-circle-outline' },
    { title: 'Reports', screen: 'Reports', iconName: 'document-text-outline' },
  ];

  const handleLogout = () => {
    navigation.replace('Login');
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.header}>Dashboard</Text>

      <View style={styles.grid}>
        {features.map((f, i) => (
          <FeatureCard
            key={i}
            title={f.title}
            iconName={f.iconName}
            onPress={() => navigation.navigate(f.screen)}
          />
        ))}
      </View>

      <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
        <Ionicons name="log-out-outline" size={20} color="#fff" />
        <Text style={styles.logoutText}>Logout</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: '#F9FAFB',
    flexGrow: 1,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
    textAlign: 'center',
    color: '#333',
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginBottom: 24,
  },
  logoutButton: {
    backgroundColor: 'red',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 14,
    borderRadius: 10,
  },
  logoutText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
    marginLeft: 8,
  },
});

export default HomeScreen;
