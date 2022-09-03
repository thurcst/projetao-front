import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import { MainPage } from '../../../modules/home/pages/MainPage/mainPage';
import { ProductPage } from '../../../modules/home/pages/ProductPage/productPage';

export function TabBar() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen 
            name="MainPage" 
            component={MainPage} 
            options={{
                tabBarLabel: 'Home',
                tabBarIcon: ({ color, size }) => (<Ionicons name="home" color={color} size={size} />),}}
        />
        <Tab.Screen 
            name="ProductPage" 
            component={ProductPage} 
            options={{
                tabBarLabel: 'User',
                tabBarIcon: ({ color, size }) => (<Ionicons name="person" color={color} size={size} />),}}
            />
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
