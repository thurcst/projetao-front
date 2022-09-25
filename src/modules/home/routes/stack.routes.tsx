import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { MainPage } from "../pages/MainPage/mainPage";
import About from "../pages/AboutPage/aboutPage";
import { ProductPage } from "../pages/ProductPage/productPage";
import { LaudoPage } from "../pages/LaudoPage/laudoPage";
import CategoryPage from "../pages/categoryPage/categoryPage";
import { stackRouteNames } from "../types/stackRouteNames";

const Stack = createStackNavigator();

const HomeStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: true }}>
      <Stack.Screen name={stackRouteNames.MainPage} component={MainPage} />
      <Stack.Screen name={stackRouteNames.About} component={About} />
      <Stack.Screen name={stackRouteNames.ProductPage} component={ProductPage} />
      <Stack.Screen name={stackRouteNames.LaudoPage} component={LaudoPage} />
      <Stack.Screen name={stackRouteNames.CategoryPage} component={CategoryPage} />
    </Stack.Navigator>
  );
}

export { HomeStackNavigator };