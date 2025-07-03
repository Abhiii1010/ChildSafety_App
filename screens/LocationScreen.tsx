import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, ActivityIndicator, Alert, Dimensions, Platform } from 'react-native';
import * as Location from 'expo-location';

let MapView, Marker;
if (Platform.OS !== 'web') {
  // Lazy import only on native platforms
  const Maps = require('react-native-maps');
  MapView = Maps.default;
  Marker = Maps.Marker;
}

const LocationScreen = () => {
  const [location, setLocation] = useState<Location.LocationObject | null>(null);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
        Alert.alert('Permission Denied', 'Please enable location permissions.');
        return;
      }

      const loc = await Location.getCurrentPositionAsync({});
      setLocation(loc);

      const subscription = await Location.watchPositionAsync(
        {
          accuracy: Location.Accuracy.High,
          timeInterval: 5000,
          distanceInterval: 5,
        },
        (newLoc) => setLocation(newLoc)
      );

      return () => subscription.remove(); // Cleanup on unmount
    })();
  }, []);

  if (Platform.OS === 'web') {
    return (
      <View style={styles.centered}>
        <Text style={styles.warning}>Map view is not supported on web. Please use a mobile device.</Text>
      </View>
    );
  }

  if (!location) {
    return (
      <View style={styles.centered}>
        <ActivityIndicator size="large" color="#4B7BEC" />
        <Text>Fetching location...</Text>
      </View>
    );
  }

  const { latitude, longitude } = location.coords;

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Child's Real-Time Location</Text>
      <MapView
        style={styles.map}
        region={{
          latitude,
          longitude,
          latitudeDelta: 0.005,
          longitudeDelta: 0.005,
        }}
        showsUserLocation={true}
      >
        <Marker coordinate={{ latitude, longitude }} title="Child's Location" />
      </MapView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    fontSize: 18,
    fontWeight: 'bold',
    padding: 16,
    textAlign: 'center',
    color: '#333',
  },
  map: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height - 100,
  },
  centered: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  warning: {
    fontSize: 16,
    color: 'red',
    textAlign: 'center',
  },
});

export default LocationScreen;
