import React, { useState } from 'react';
import { View, Text, FlatList, StyleSheet, Switch } from 'react-native';

const mockAppData = [
  { id: '1', name: 'YouTube', usage: '1h 20m', blocked: false },
  { id: '2', name: 'Instagram', usage: '45m', blocked: true },
  { id: '3', name: 'WhatsApp', usage: '30m', blocked: false },
  { id: '4', name: 'TikTok', usage: '1h 5m', blocked: true },
  { id: '5', name: 'Chrome', usage: '50m', blocked: false },
];

const AppUsageScreen = () => {
  const [apps, setApps] = useState(mockAppData);

  const toggleBlock = (id) => {
    const updated = apps.map((app) =>
      app.id === id ? { ...app, blocked: !app.blocked } : app
    );
    setApps(updated);
  };

  const renderItem = ({ item }) => (
    <View style={styles.appRow}>
      <View>
        <Text style={styles.appName}>{item.name}</Text>
        <Text style={styles.usage}>Usage: {item.usage}</Text>
      </View>
      <View style={styles.blockControl}>
        <Text style={styles.blockLabel}>{item.blocked ? 'Blocked' : 'Allowed'}</Text>
        <Switch
          value={item.blocked}
          onValueChange={() => toggleBlock(item.id)}
          thumbColor={item.blocked ? '#f54242' : '#4B7BEC'}
        />
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>App Monitoring</Text>
      <FlatList
        data={apps}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        contentContainerStyle={styles.list}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 16,
    paddingTop: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  list: {
    paddingBottom: 20,
  },
  appRow: {
    backgroundColor: '#F2F4F8',
    padding: 16,
    borderRadius: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  appName: {
    fontSize: 16,
    fontWeight: '600',
  },
  usage: {
    fontSize: 14,
    color: '#666',
    marginTop: 4,
  },
  blockControl: {
    alignItems: 'center',
  },
  blockLabel: {
    fontSize: 12,
    color: '#333',
    marginBottom: 4,
  },
});

export default AppUsageScreen;
