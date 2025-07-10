import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

const mockCallLogs = [
  { id: '1', name: 'Dad', number: '+91 9876543210', time: '10:30 AM', type: 'Incoming' },
  { id: '2', name: 'Mom', number: '+91 9123456780', time: '9:10 AM', type: 'Outgoing' },
  { id: '3', name: 'Unknown', number: '+91 9990000000', time: 'Yesterday', type: 'Missed' },
];

const getIconName = (type: string) => {
  switch (type) {
    case 'Incoming':
      return 'call-received';
    case 'Outgoing':
      return 'call-made';
    case 'Missed':
      return 'call-missed';
    default:
      return 'phone';
  }
};

const getIconColor = (type : string) => {
  switch (type) {
    case 'Incoming':
      return '#27AE60';
    case 'Outgoing':
      return '#3498DB';
    case 'Missed':
      return '#E74C3C';
    default:
      return '#000';
  }
};

type CallLog = {
  id: string;
  name: string;
  number: string;
  time: string;
  type: string;
};

const CallLogsScreen = () => {
  const renderItem = ({ item }: { item: CallLog }) => (
    <View style={styles.card}>
      <MaterialIcons
        name={getIconName(item.type)}
        size={28}
        color={getIconColor(item.type)}
        style={styles.icon}
      />
      <View style={styles.info}>
        <Text style={styles.name}>{item.name}</Text>
        <Text style={styles.number}>{item.number}</Text>
        <Text style={styles.time}>{item.time}</Text>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Call Logs</Text>
      <FlatList
        data={mockCallLogs}
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
  card: {
    flexDirection: 'row',
    alignItems: 'center',
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
  icon: {
    marginRight: 16,
  },
  info: {
    flex: 1,
  },
  name: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
  },
  number: {
    fontSize: 14,
    color: '#666',
  },
  time: {
    fontSize: 12,
    color: '#999',
    marginTop: 4,
  },
});

export default CallLogsScreen;
