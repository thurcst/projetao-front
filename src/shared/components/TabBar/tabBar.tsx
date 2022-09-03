import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import { MainPage } from '../../../modules/home/pages/MainPage/mainPage';
import { ProductPage } from '../../../modules/home/pages/ProductPage/productPage';

export function TabBar() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="MainPage" component={MainPage}  />
        <Tab.Screen name="ProductPage" component={ProductPage} />
      </Tab.Navigator>
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
