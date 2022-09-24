import { StyleSheet, View } from 'react-native';
import React from 'react';
import { AppRoutes } from './src/shared/routes';
import { StatusBar } from 'expo-status-bar';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style='dark'/>
      <AppRoutes/>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})