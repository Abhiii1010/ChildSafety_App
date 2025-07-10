import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

const mockUsage = [
  { id: '1', app: 'YouTube', time: '2h 15m', percent: 45 },
  { id: '2', app: 'WhatsApp', time: '1h 30m', percent: 30 },
  { id: '3', app: 'Instagram', time: '45m', percent: 15 },
  { id: '4', app: 'Others', time: '30m', percent: 10 },
];

type ProgressBarProps = {
  percent: number;
};

const ProgressBar = ({ percent }: ProgressBarProps) => (
  <View style={styles.progressBar}>
    <View style={[styles.progressFill, { width: `${percent}%` }]} />
  </View>
);

const ScreenTimeScreen = () => {
  const renderItem = ({ item }: { item: { id: string; app: string; time: string; percent: number } }) => (
    <View style={styles.card}>
      <Text style={styles.appName}>{item.app}</Text>
      <Text style={styles.usage}>{item.time}</Text>
      <ProgressBar percent={item.percent} />
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Today's Screen Time</Text>
      <FlatList
        data={mockUsage}
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
    marginBottom: 16,
    textAlign: 'center',
    color: '#333',
  },
  card: {
    backgroundColor: '#fff',
    padding: 14,
    borderRadius: 10,
    marginBottom: 12,
    elevation: 2,
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowOffset: { width: 0, height: 1 },
    shadowRadius: 2,
  },
  appName: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
  },
  usage: {
    fontSize: 14,
    color: '#666',
    marginVertical: 4,
  },
  progressBar: {
    height: 10,
    width: '100%',
    backgroundColor: '#E0E0E0',
    borderRadius: 5,
  },
  progressFill: {
    height: '100%',
    backgroundColor: '#4B7BEC',
    borderRadius: 5,
  },
});

export default ScreenTimeScreen;
