import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';

interface Platform {
  id: string;
  name: string;
  status: string;
  icon: string;
}

const platforms: Platform[] = [
  { id: '1', name: 'WhatsApp', status: 'Monitored', icon: 'whatsapp' },
  { id: '2', name: 'Facebook', status: 'Monitored', icon: 'facebook' },
  { id: '3', name: 'Instagram', status: 'Not Monitored', icon: 'instagram' },
  { id: '4', name: 'Snapchat', status: 'Not Monitored', icon: 'snapchat' },
  { id: '5', name: 'Telegram', status: 'Monitored', icon: 'telegram' },
];

const SocialMediaScreen = () => {
  const renderItem = ({ item }: { item: Platform }) => (
    <View style={styles.card}>
      <FontAwesome5 name={item.icon} size={26} color="#4B7BEC" style={styles.icon} />
      <View style={styles.textContainer}>
        <Text style={styles.platform}>{item.name}</Text>
        <Text style={[styles.status, item.status === 'Monitored' ? styles.monitored : styles.notMonitored]}>
          {item.status}
        </Text>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Social Media Monitoring</Text>
      <FlatList
        data={platforms}
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
    flexDirection: 'row',
    backgroundColor: '#fff',
    padding: 14,
    marginBottom: 12,
    borderRadius: 10,
    alignItems: 'center',
    elevation: 2,
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowOffset: { width: 0, height: 1 },
    shadowRadius: 2,
  },
  icon: {
    marginRight: 16,
    width: 30,
  },
  textContainer: {
    flex: 1,
  },
  platform: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
  },
  status: {
    marginTop: 4,
    fontSize: 14,
  },
  monitored: {
    color: '#27AE60',
  },
  notMonitored: {
    color: '#E74C3C',
  },
});

export default SocialMediaScreen;
