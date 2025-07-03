import React from 'react';
import { View, ScrollView, StyleSheet, Text } from 'react-native';
import FeatureCard from '../components/FeatureCard';

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
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
});

export default HomeScreen;
