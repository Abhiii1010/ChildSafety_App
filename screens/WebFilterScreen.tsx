import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList, Switch, TextInput, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const initialWebsites = [
  { id: '1', url: 'example.com', blocked: true },
  { id: '2', url: 'socialmedia.com', blocked: false },
  { id: '3', url: 'gamesite.com', blocked: true },
];

const WebFilterScreen = () => {
  const [websites, setWebsites] = useState(initialWebsites);
  const [newUrl, setNewUrl] = useState('');

  const toggleBlock = (id) => {
    const updated = websites.map((site) =>
      site.id === id ? { ...site, blocked: !site.blocked } : site
    );
    setWebsites(updated);
  };

  const addWebsite = () => {
    if (!newUrl.trim()) return;
    const newSite = {
      id: Date.now().toString(),
      url: newUrl.trim(),
      blocked: true,
    };
    setWebsites([...websites, newSite]);
    setNewUrl('');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Web Filtering</Text>

      <View style={styles.inputRow}>
        <TextInput
          style={styles.input}
          placeholder="Add website to block"
          value={newUrl}
          onChangeText={setNewUrl}
        />
        <TouchableOpacity onPress={addWebsite} style={styles.addButton}>
          <Ionicons name="add-circle-outline" size={28} color="#4B7BEC" />
        </TouchableOpacity>
      </View>

      <FlatList
        data={websites}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.siteItem}>
            <Text style={styles.siteText}>{item.url}</Text>
            <View style={styles.switchRow}>
              <Text style={{ marginRight: 8, color: item.blocked ? '#E74C3C' : '#27AE60' }}>
                {item.blocked ? 'Blocked' : 'Allowed'}
              </Text>
              <Switch
                value={item.blocked}
                onValueChange={() => toggleBlock(item.id)}
                trackColor={{ false: '#ccc', true: '#4B7BEC' }}
              />
            </View>
          </View>
        )}
        ListEmptyComponent={<Text style={styles.emptyText}>No websites listed.</Text>}
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
    marginBottom: 12,
    textAlign: 'center',
    color: '#333',
  },
  inputRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 10,
    paddingHorizontal: 12,
    height: 44,
    backgroundColor: '#fff',
  },
  addButton: {
    marginLeft: 8,
  },
  siteItem: {
    backgroundColor: '#fff',
    padding: 14,
    marginBottom: 10,
    borderRadius: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    elevation: 2,
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowOffset: { width: 0, height: 1 },
    shadowRadius: 2,
  },
  siteText: {
    fontSize: 16,
    color: '#333',
  },
  switchRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  emptyText: {
    textAlign: 'center',
    marginTop: 40,
    fontSize: 16,
    color: '#888',
  },
});

export default WebFilterScreen;
