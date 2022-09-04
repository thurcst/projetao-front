import React from "react";

import { createDrawerNavigator } from "@react-navigation/drawer";

import { ProductStackNavigator } from "./StackNavigator";
import { TabBar } from "../../../../shared/components/TabBar/tabBar";
import About from "../../pages/AboutPage/aboutPage";

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Home" component={TabBar} />
      <Drawer.Screen name="Product" component={ProductStackNavigator} />
      <Drawer.Screen name="About" component={About} />	
    </Drawer.Navigator>
  );
}

export default DrawerNavigator;