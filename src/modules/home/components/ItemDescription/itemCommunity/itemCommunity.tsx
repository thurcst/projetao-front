import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { scale, verticalScale } from "../../../../../shared/styles/scaling_units";
import { Ionicons } from '@expo/vector-icons';
import { ItemReviewStars } from "./itemReviewStars";
import { ItemReview } from "./itemReview";

export function ItemCommunity( props ) {
  return (
      <View style={styles.container}>  
        <Text style={styles.title}>Comunidade:</Text>
        <ItemReviewStars size={1}/>
        <View style={styles.itemReviewContainer}>
          <View style={styles.itemReview}>
            <ItemReview/>
          </View>
          <View style={styles.itemReview}>
            <ItemReview/>
          </View>
          <View style={styles.itemReview}>
            <ItemReview/>
          </View>
        </View>
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flexWrap: 'wrap',
  },
  title: {
    fontSize: scale(18),
    fontWeight: 'bold',
    marginBottom: scale(5)
  },
  itemReviewContainer: {
    marginTop: verticalScale(15),
  },
  itemReview: {
    marginBottom: verticalScale(3)
  }
});
  