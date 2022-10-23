import React from "react";
import { View, Text, StyleSheet, Image, SafeAreaView } from "react-native";
import { scale } from "../../../../../shared/styles/scaling_units";
import { ItemReviewStars } from "./itemReviewStars";

export function ItemReview( props ) {
  return (
    <View style={styles.container}>
      
      {/* Profile picture */}
      <Image
        source={{uri: 'https://cdn.discordapp.com/attachments/1014314736126545941/1016454312349683844/darkbckg.png'}}
        style={styles.image}
      />

      {/* Review info */}
      <View style={styles.info}>

        {/* Header */}
        <View style={styles.header}>
          {/* Reviewer name */}
          <Text style={styles.reviewerName}>Cleybson</Text>
          {/* Rating */}
          <ItemReviewStars size={0.5} numStars={4}/>
        </View>

        {/* Message */}
        <View style={styles.reviewerMessageContainer}>
          <Text style={styles.reviewerMessage}>O sucessor moderno do pão. Adiciona forte suporte a orientação...</Text>
        </View>

      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flexDirection: 'row'
  },
  image: {
    aspectRatio: 1.3,
    width: '40%',
    borderRadius: 10,
    marginRight: scale(8)
  },
  info: {
    flexDirection: 'column',
    flexWrap: 'wrap'
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  reviewerName: {
    fontWeight: 'bold',
    fontSize: 10
  },
  reviewerMessageContainer: {
    flexGrow: 1,
    flexDirection: 'row'
  },
  reviewerMessage: {
    fontSize: 8,
    flex: 1
  }
});
