import React from "react";
import { View, Text, StyleSheet } from "react-native";
import eventsInstance from "../../../../../shared/services/analytics";
import { scale, verticalScale } from "../../../../../shared/styles/scaling_units";

export function ItemIngredients( { ingredients } ) {
  return (
      <View style={styles.container}>  
        <Text style={styles.title} onPress={eventsInstance.sendEvent("Tocou no título 'Ingredientes'")}>Ingredientes</Text>
        <Text onPress={eventsInstance.sendEvent("Tocou na lista de ingredientes")}>{ingredients ? ingredients : "Não foi possível encontrar ingredientes para este produto."}</Text>
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
  