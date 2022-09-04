import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import { MainPage } from "../../pages/MainPage/mainPage";
import About from "../../pages/AboutPage/aboutPage";
import { ProductPage } from "../../pages/ProductPage/productPage";

const Stack = createStackNavigator();

const MainStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Main Page" component={MainPage} />
      <Stack.Screen name="About" component={About} />
    </Stack.Navigator>
  );
}

const ProductStackNavigator = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Product Page" component={ProductPage} />
        </Stack.Navigator>
    );
}

export { MainStackNavigator, ProductStackNavigator };