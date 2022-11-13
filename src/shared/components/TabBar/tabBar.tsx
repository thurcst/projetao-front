import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import { StyleSheet } from 'react-native';
import { ProfilePage } from '../../../modules/profile/pages/ProfilePage/profilePage';
import { HomePage } from '../../../modules/home/pages/HomePage/homePage';
import Scanner from '../../../modules/barCodeScanner/components/scanner/scanner';
import { scale, verticalScale } from "../../styles/scaling_units";

const Tab = createBottomTabNavigator();

export function TabBar() {
  return (
      <Tab.Navigator screenOptions={{headerShown:false, tabBarStyle:styles.navBar, tabBarShowLabel: false}}
       tabBarIcon={{size:400}}> 
        <Tab.Screen 
            name="Home" 
            component={HomePage}
            options={{
                tabBarLabel: 'Home',
                tabBarIcon: ({ color, size }) => (<Ionicons name="home" color={color} size={size*1.25} />)}}
        />
        <Tab.Screen 
            name="Scanner" 
            component={Scanner} 
            options={{
                tabBarLabel: 'Scanner',
                unmountOnBlur: true,
      
                tabBarIcon: ({ color, size }) => (<Ionicons name="scan-outline" color={color} size={size*1.25} />),}}
            />
{/*         <Tab.Screen 
            name="Profile" 
            component={ProfilePage} 
            options={{
                tabBarLabel: 'User',
                tabBarIcon: ({ color, size }) => (<Ionicons name="person" color={color} size={size*1.25} />),}}
            /> */}
      </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'green',
    alignItems: 'center',
    justifyContent: 'center',
  },
  navBar:{
    height: verticalScale(50)
  }

});
