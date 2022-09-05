import React from "react";
import { Text, View, Button, StyleSheet } from "react-native";
import { MainItems } from "../../components/MainItems/mainItems";
import SearchBar from "../../components/SearchBar/searchbar";

export function MainPage({ navigation }) {
  return (
    <View style={styles.container}>
      <SearchBar />
      <View style={styles.content}>
        <Text>SemGlú!</Text>
        <Button title="Go to about screen" 
          onPress={() => navigation.navigate('About')} 
        />
      </View>
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

