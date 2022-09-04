import React from "react";
import { Text, View } from "react-native";
import SearchBar from "../../components/SearchBar/searchbar";

export function ProductPage() {
  return (
    <View>
      <SearchBar />
      <Text>SemGlus!</Text>
    </View>
  );
}