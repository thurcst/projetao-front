import React from "react";
import { View, Text, StyleSheet, Image, ScrollView } from "react-native";
import { scale, verticalScale } from "../../../../shared/styles/scaling_units";

export function ItemRecipes( props ) {
  return (
      <View style={styles.container}>  
        <Text style={styles.title}>Receitas:</Text>
        <ScrollView horizontal={true} style={styles.imagesContainer}>
          <View style={styles.imageContainer}>
            <Image
              source= {{uri: 'https://cdn.discordapp.com/attachments/1014314736126545941/1016454312349683844/darkbckg.png'}}
              style={styles.image}
            />
          </View>
          <View style={styles.imageContainer}>
            <Image
              source= {{uri: 'https://cdn.discordapp.com/attachments/1014314736126545941/1016454312349683844/darkbckg.png'}}
              style={styles.image}
            />
          </View>
          <View style={styles.imageContainer}>
            <Image
              source= {{uri: 'https://cdn.discordapp.com/attachments/1014314736126545941/1016454312349683844/darkbckg.png'}}
              style={styles.image}
            />
          </View>
          <View style={styles.imageContainer}>
            <Image
              source= {{uri: 'https://cdn.discordapp.com/attachments/1014314736126545941/1016454312349683844/darkbckg.png'}}
              style={styles.image}
            />
          </View>
          <View style={styles.imageContainer}>
            <Image
              source= {{uri: 'https://cdn.discordapp.com/attachments/1014314736126545941/1016454312349683844/darkbckg.png'}}
              style={styles.image}
            />
          </View>

        </ScrollView>
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
    fontSize: scale(20),
    fontWeight: 'bold',
    marginBottom: scale(5)
  },
  imagesContainer: {
    flexDirection: 'row'
  },
  imageContainer: {
    marginRight: scale(20)
  },
  image: {
    aspectRatio: 1.5,
    width: 85
  }
})
  