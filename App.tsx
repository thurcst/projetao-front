import { StyleSheet, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import { AppRoutes } from './src/shared/routes';
import { StatusBar } from 'expo-status-bar';
import { Modal } from 'react-native';
import { getAuthorizationTokens } from './src/modules/home/services/product.service';

export default function App() {
  const [tokenRefresh, setTokenRefresh] = useState("");
  const [tokenAccess, setTokenAccess] = useState("");
  let [isLoading, setIsLoading] = useState(true);
  let [isError, setIsError] = useState(false);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    setIsLoading(true);
    try {
      const response = await getAuthorizationTokens();
      setTokenRefresh(response.refresh);
      setTokenAccess(response.access);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
      setIsError(true);
      setIsLoading(false);
    }
    setIsLoading(false);
  };

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