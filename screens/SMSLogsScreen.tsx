import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

type SMSItem = {
  id: string;
  sender: string;
  message: string;
  time: string;
};

const mockSMS: SMSItem[] = [
  { id: '1', sender: '+91 9876543210', message: 'Hey, what’s up?', time: '10:30 AM' },
  { id: '2', sender: 'Bank', message: 'Your OTP is 123456', time: '09:45 AM' },
  { id: '3', sender: 'Mom', message: 'Where are you?', time: '08:10 AM' },
  { id: '4', sender: '+91 9998887776', message: 'Meeting postponed to 2 PM.', time: 'Yesterday' },
];

const SMSLogsScreen = () => {
  const renderItem = ({ item }: { item: SMSItem }) => (
    <View style={styles.smsItem}>
      <Ionicons name="chatbubble-outline" size={24} color="#4B7BEC" style={styles.icon} />
      <View style={styles.textContainer}>
        <Text style={styles.sender}>{item.sender}</Text>
        <Text style={styles.message}>{item.message}</Text>
        <Text style={styles.time}>{item.time}</Text>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.header}>SMS Logs</Text>
      <FlatList
        data={mockSMS}
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
  smsItem: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    padding: 14,
    borderRadius: 10,
    marginBottom: 12,
    alignItems: 'flex-start',
    elevation: 2,
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowOffset: { width: 0, height: 1 },
    shadowRadius: 2,
  },
  icon: {
    marginRight: 12,
    marginTop: 4,
  },
  textContainer: {
    flex: 1,
  },
  sender: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
  },
  message: {
    fontSize: 14,
    color: '#666',
    marginTop: 4,
  },
  time: {
    fontSize: 12,
    color: '#999',
    marginTop: 4,
  },
});

export default SMSLogsScreen;
