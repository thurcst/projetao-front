import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import { MainPage } from '../../../modules/home/pages/MainPage/mainPage';
import { ProductPage } from '../../../modules/home/pages/ProductPage/productPage';

import { MainStackNavigator, ProductStackNavigator } from '../../../modules/home/routes/navigation/StackNavigator';

export function TabBar() {
  return (
      <Tab.Navigator screenOptions={{ headerShown: false }}>
        <Tab.Screen 
            name="Main Page" 
            component={MainStackNavigator} 
            options={{
                tabBarLabel: 'Home',
                tabBarIcon: ({ color, size }) => (<Ionicons name="home" color={color} size={size} />),}}
        />
        <Tab.Screen 
            name="ProductPage" 
            component={ProductStackNavigator} 
            options={{
                tabBarLabel: 'User',
                tabBarIcon: ({ color, size }) => (<Ionicons name="person" color={color} size={size} />),}}
            />
      </Tab.Navigator>
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
