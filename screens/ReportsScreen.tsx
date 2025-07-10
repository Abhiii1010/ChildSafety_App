import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const reportsData = [
  { id: '1', title: 'Call Log Report', icon: 'call-outline', date: '2025-06-30' },
  { id: '2', title: 'SMS Log Report', icon: 'chatbox-ellipses-outline', date: '2025-06-29' },
  { id: '3', title: 'Social Media Activity', icon: 'logo-facebook', date: '2025-06-28' },
  { id: '4', title: 'Location History', icon: 'location-outline', date: '2025-06-27' },
  { id: '5', title: 'App Usage Report', icon: 'apps-outline', date: '2025-06-26' },
];

type ReportItemProps = {
  title: string;
  icon: string;
  date: string;
};

const ReportItem: React.FC<ReportItemProps> = ({ title, icon, date }) => (
  <View style={styles.item}>
    <Ionicons name={icon} size={24} color="#4B7BEC" style={styles.icon} />
    <View style={styles.textContainer}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.date}>Date: {date}</Text>
    </View>
  </View>
);

const ReportsScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Reports</Text>
      <FlatList
        data={reportsData}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <ReportItem title={item.title} icon={item.icon} date={item.date} />
        )}
        contentContainerStyle={styles.list}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9FAFB',
  },
  header: {
    fontSize: 22,
    fontWeight: 'bold',
    paddingVertical: 20,
    paddingHorizontal: 16,
    textAlign: 'center',
    color: '#333',
  },
  list: {
    paddingHorizontal: 16,
  },
  item: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    padding: 14,
    marginBottom: 12,
    borderRadius: 10,
    alignItems: 'center',
    elevation: 2,
    shadowColor: '#000',
    shadowOpacity: 0.08,
    shadowOffset: { width: 0, height: 1 },
    shadowRadius: 2,
  },
  icon: {
    marginRight: 16,
  },
  textContainer: {
    flex: 1,
  },
  title: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
  },
  date: {
    fontSize: 14,
    color: '#666',
    marginTop: 4,
  },
});

export default ReportsScreen;
