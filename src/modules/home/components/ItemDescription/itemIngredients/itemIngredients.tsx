import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { scale, verticalScale } from "../../../../../shared/styles/scaling_units";

export function ItemIngredients( { ingredients } ) {
  return (
      <View style={styles.container}>  
        <Text style={styles.title}>Ingredientes</Text>
        <Text>{ingredients}</Text>
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
  },
  title: {
    fontSize: scale(18),
    fontWeight: 'bold',
    marginBottom: scale(5)
  }
})
  