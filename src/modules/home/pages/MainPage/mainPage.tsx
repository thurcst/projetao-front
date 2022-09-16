import React from "react";
import { Text, View, Button, StyleSheet } from "react-native";
import { MainItems } from "../../components/MainItems/mainItems";
import MainSection from "../../components/MainSection/mainSection";
import SearchBar from "../../components/SearchBar/searchbar";

export function MainPage({ navigation }) {
  return (
    <View style={styles.container}>
      <SearchBar />
      <MainSection navigation={navigation}/>
      <View style={styles.mainItems}>
        <MainItems navigationProp={navigation}/>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
    backgroundColor: "green",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",  
  },
  mainItems: {
    flex: 2,
  }
});

