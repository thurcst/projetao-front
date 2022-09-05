import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { MainPage } from "../pages/MainPage/mainPage";
import About from "../pages/AboutPage/aboutPage";
import { ProductPage } from "../pages/ProductPage/productPage";

const Stack = createStackNavigator();

const HomeStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="MainPage" component={MainPage} />
      <Stack.Screen name="About" component={About} />
      <Stack.Screen name="ProductPage" component={ProductPage} />
    </Stack.Navigator>
  );
}

export { HomeStackNavigator };