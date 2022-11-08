import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { scale, verticalScale } from "../../../../../shared/styles/scaling_units";

export function ItemNutritionalValue( props ) {
  return (
      <View style={styles.container}>  
        <Text style={styles.title}>Valor nutricional:</Text>
        <Image
          source= {{uri: 'https://cdn.discordapp.com/attachments/1014314736126545941/1016454312349683844/darkbckg.png'}}
          style={styles.image}
        />
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flexDirection: 'column',
    flexWrap: 'wrap',
  },
  title: {
    fontSize: scale(18),
    fontWeight: 'bold',
    marginBottom: scale(5)
  },
  image: {
    aspectRatio: 1,
    width: '90%',
    resizeMode: 'contain'
  }
})
  