import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import CallLogsScreen from '../screens/CallLogsScreen';
import SMSLogsScreen from '../screens/SMSLogsScreen';
import SocialMediaScreen from '../screens/SocialMediaScreen';
import LocationScreen from '../screens/LocationScreen';
import AppUsageScreen from '../screens/AppUsageScreen';
import WebFilterScreen from '../screens/WebFilterScreen';
import ScreenTimeScreen from '../screens/ScreenTimeScreen';
import AlertsScreen from '../screens/AlertsScreen';
import ReportsScreen from '../screens/ReportsScreen';
import LoginScreen from '../screens/LoginScreen';

const Stack = createNativeStackNavigator();

const AppNavigator = () => (
  <Stack.Navigator initialRouteName="Login">
    <Stack.Screen
      name="Login"
      component={LoginScreen}
      options={{ headerShown: false }}
    />
    <Stack.Screen name="Home" component={HomeScreen} 
     options={{ headerShown: false }}/>
    <Stack.Screen name="Call Logs" component={CallLogsScreen} />
    <Stack.Screen name="SMS Logs" component={SMSLogsScreen} />
    <Stack.Screen name="Social Media" component={SocialMediaScreen} />
    <Stack.Screen name="Location" component={LocationScreen} options={{ headerShown: false }} />
    <Stack.Screen name="App Usage" component={AppUsageScreen} />
    <Stack.Screen name="Web Filtering" component={WebFilterScreen} />
    <Stack.Screen name="Screen Time" component={ScreenTimeScreen} />
    <Stack.Screen name="Alerts" component={AlertsScreen} />
    <Stack.Screen name="Reports" component={ReportsScreen} />
  </Stack.Navigator>
);

export default AppNavigator;
