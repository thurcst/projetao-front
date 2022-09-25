import React, { useEffect, useState } from "react";
import { Text, View, Button, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { MainItems } from "../../components/MainItems/mainItems";
import MainSection from "../../components/MainSection/mainSection";
import SearchBar from "../../components/SearchBar/searchbar";

export function MainPage({ navigation }) {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    fetchData("https://randomuser.me/api/?results=20");
  }, []);

  const fetchData = async (url) => {
    try {
      const response = await fetch(url);
      const json = await response.json();
      setData(json.results);
      setFilteredData(json.results);
      console.log(json.results);
    } catch (error) {
      console.log(error);
    }
  };

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

