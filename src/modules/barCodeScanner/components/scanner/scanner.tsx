import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';
import { stackRouteNames } from '../../../home/types/stackRouteNames';

export default function Scanner({navigation}) {
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);

  useEffect(() => {
    const getBarCodeScannerPermissions = async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    };

    getBarCodeScannerPermissions();
  }, []);
  
  const handleBarCodeScanned = ({ type, data }) => {
    if (type === 32){
      setScanned(true)
    }
  };
  

  if (hasPermission === null) {
    return <Text></Text>;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  const parar = ({ type, data }) =>{
    {navigation.navigate(stackRouteNames.ProductPage, {item: data})}
  };

  return (
    
    <View style={styles.container}>
      
      <BarCodeScanner
       onBarCodeScanned={scanned ? parar : handleBarCodeScanned}
        style={StyleSheet.absoluteFillObject}
      />
    </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingStart: 20,
    paddingTop : 100,
  }
}); 