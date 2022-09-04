import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { TabBar } from './src/shared/components/TabBar/tabBar';

import { MainPage } from './src/modules/home/pages/MainPage/mainPage';
import { ProductPage } from './src/modules/home/pages/ProductPage/productPage';
import React from 'react';
import { MainStackNavigator } from './src/modules/home/routes/navigation/StackNavigator';
import DrawerNavigator from './src/modules/home/routes/navigation/DrawerNavigator';

export default function App() {
  return (
    <NavigationContainer>
      <DrawerNavigator />
    </NavigationContainer>
  );
}

const Tab = createBottomTabNavigator();
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
