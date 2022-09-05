import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import About from "../../pages/AboutPage/aboutPage";
import { HomeStackNavigator } from "../stack.routes";

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="HomeNavigator" component={HomeStackNavigator} />
      <Drawer.Screen name="About" component={About} />	
    </Drawer.Navigator>
  );
}

export default DrawerNavigator;