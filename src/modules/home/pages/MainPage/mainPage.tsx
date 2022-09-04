import React from "react";
import { Text, View, Button, StyleSheet } from "react-native";
import SearchBar from "../../components/SearchBar/searchbar";

export function MainPage({ navigation }) {
  return (
    <View style={styles.container}>
      <SearchBar />
      <View style={styles.content}>
        <Text>SemGlus!</Text>
        <Button title="Go to about screen" 
          onPress={() => navigation.navigate("About")} 
        />
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
});

