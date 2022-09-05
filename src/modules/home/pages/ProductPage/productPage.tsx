import React from "react";
import { Text, View } from "react-native";
import SearchBar from "../../components/SearchBar/searchbar";

export function ProductPage( {route} ) {
  const {productName} = route.params;
  return (
    <View>
      <SearchBar />
      <Text>Página do produto</Text>
      <Text>Nome do produto: {productName}</Text>
    </View>
  );
}