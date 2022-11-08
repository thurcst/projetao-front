import React from "react";
import { StyleSheet } from 'react-native';
import { createStackNavigator } from "@react-navigation/stack";
import { MainPage } from "../pages/MainPage/mainPage";
import About from "../pages/AboutPage/aboutPage";
import { ProductPage } from "../pages/ProductPage/productPage";
import { LaudoPage } from "../pages/LaudoPage/laudoPage";
import CategoryPage from "../pages/categoryPage/categoryPage";
import { stackRouteNames } from "../types/stackRouteNames";
import { SearchBarResultsPage } from "../pages/SearchBarResultsPage/serchBarResultsPage";
import { CriteriaPage } from "../pages/CriteriaPage/criteriaPage";

const Stack = createStackNavigator();

const HomeStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: true }}>
      <Stack.Screen name={stackRouteNames.MainPage}     options={{headerShown: false}}  component={MainPage} />
      <Stack.Screen name={stackRouteNames.About}                                        component={About} />
      <Stack.Screen name={stackRouteNames.ProductPage}  options={productHeaderOptions}  component={ProductPage} />
      <Stack.Screen name={stackRouteNames.LaudoPage}                                    component={LaudoPage} />
      <Stack.Screen name={stackRouteNames.CategoryPage} options={categoryHeaderOptions} component={CategoryPage} />
      <Stack.Screen name={stackRouteNames.SearchBarResultsPage} component={SearchBarResultsPage}/>
      <Stack.Screen name={stackRouteNames.CriteriaPage} component={CriteriaPage}/>
    </Stack.Navigator>
  );
}


const styles = StyleSheet.create({
  hideShadowHeader: {
    elevation: 0,
    shadowOpacity: 0,
    borderBottomWidth: 0,
  }
})

const categoryHeaderOptions = {
  headerStyle: styles.hideShadowHeader
}

const productHeaderOptions = {
  headerStyle: styles.hideShadowHeader
}


export { HomeStackNavigator };