import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { scale, verticalScale } from "../../../../../shared/styles/scaling_units";

export function ItemPrice( props ) {
  return (
      <View style={styles.container}>  
        <Text style={styles.price}>R$17,00-R$23,00</Text>
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
  },
  price: {
    fontSize: scale(19),
    fontWeight: 'bold',
    color: '#44bb6e'
  }
})
  