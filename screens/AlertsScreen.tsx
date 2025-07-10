import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

const mockAlerts = [
  { id: '1', type: 'Unknown Number Call', message: 'Incoming call from +91 9834567890', time: '10:05 AM' },
  { id: '2', type: 'Explicit SMS', message: 'Suspicious text detected: "You won a prize!"', time: 'Yesterday' },
  { id: '3', type: 'App Install', message: 'New app installed: TikTok', time: '2 days ago' },
];

const AlertsScreen = () => {
  const renderItem = ({ item }) => (
    <View style={styles.alertCard}>
      <MaterialIcons name="warning" size={28} color="#E74C3C" style={styles.icon} />
      <View style={styles.textContainer}>
        <Text style={styles.alertType}>{item.type}</Text>
        <Text style={styles.message}>{item.message}</Text>
        <Text style={styles.time}>{item.time}</Text>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Alert Logs</Text>
      <FlatList
        data={mockAlerts}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        contentContainerStyle={{ paddingBottom: 20 }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9FAFB',
    padding: 16,
  },
  header: {
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 16,
    color: '#333',
  },
  alertCard: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    padding: 14,
    borderRadius: 10,
    marginBottom: 12,
    alignItems: 'center',
    elevation: 2,
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowOffset: { width: 0, height: 1 },
    shadowRadius: 2,
  },
  icon: {
    marginRight: 16,
  },
  textContainer: {
    flex: 1,
  },
  alertType: {
    fontSize: 16,
    fontWeight: '600',
    color: '#E74C3C',
  },
  message: {
    fontSize: 14,
    color: '#555',
    marginTop: 4,
  },
  time: {
    fontSize: 12,
    color: '#999',
    marginTop: 4,
  },
});

export default AlertsScreen;
