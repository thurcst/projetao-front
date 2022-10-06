import React, { useEffect, useState } from "react";
import { Text, View, Button, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { MainItems } from "../../components/MainItems/mainItems";
import MainSection from "../../components/MainSection/mainSection";
import SearchBar from "../../components/SearchBar/searchbar";

export function MainPage({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <SearchBar navigation={navigation}/>
      <MainSection navigation={navigation}/>
      <MainItems navigationProp={navigation}/>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    paddingTop: 10,
    flex: 1,
  }
});

