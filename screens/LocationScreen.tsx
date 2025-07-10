import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, ActivityIndicator, Alert, Dimensions, Platform } from 'react-native';
import * as Location from 'expo-location';

type LocationType = {
  coords: {
    latitude: number;
    longitude: number;
    [key: string]: any;
  };
  [key: string]: any;
};

type MapViewType = React.ComponentType<any>;
type MarkerType = React.ComponentType<any>;

const LocationScreen = () => {
  const [location, setLocation] = useState<LocationType | null>(null);
  const [MapView, setMapView] = useState<MapViewType | null>(null);
  const [Marker, setMarker] = useState<MarkerType | null>(null);

  useEffect(() => {
    const init = async () => {
      if (Platform.OS === 'web') return;

      const { default: MV, Marker: MK } = await import('react-native-maps');
      setMapView(() => MV);
      setMarker(() => MK);

      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
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

      return () => subscription.remove();
    };

    init();
  }, []);

  if (Platform.OS === 'web') {
    return (
      <View style={styles.centered}>
        <Text style={styles.warning}>🌐 Map is not supported on web. Use a mobile device or emulator.</Text>
      </View>
    );
  }

  if (!location || !MapView || !Marker) {
    return (
      <View style={styles.centered}>
        <ActivityIndicator size="large" color="#4B7BEC" />
        <Text>Loading map...</Text>
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
        showsMyLocationButton={true}
      >
        <Marker coordinate={{ latitude, longitude }} title="Child's Location" />
      </MapView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
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
// import { StyleSheet, Text, View } from 'react-native'
// import React from 'react'

// const LocationScreen = () => {
//   return (
//     <View>
//       <Text>LocationScreen</Text>
//     </View>
//   )
// }

// export default LocationScreen

// const styles = StyleSheet.create({})