import { StyleSheet } from 'react-native';
import React from 'react';
import { AppRoutes } from './src/shared/routes';

export default function App() {
  return (
    <AppRoutes/>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingStart: 20,
    paddingTop : 100,
  }
})