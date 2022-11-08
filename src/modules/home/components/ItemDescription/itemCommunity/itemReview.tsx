import React from "react";
import { View, Text, StyleSheet, Image, SafeAreaView } from "react-native";
import { scale, verticalScale } from "../../../../../shared/styles/scaling_units";
import { ItemReviewStars } from "./itemReviewStars";
import { Ionicons } from '@expo/vector-icons';
import { Review } from "../../../types/responseInterfaces";

const clamp = (num, min, max) => Math.min(Math.max(num, min), max);
const clampGrade = grade => clamp(grade, 1, 5);

export function ItemReview( { review } ) {
  return (
    <View style={styles.container}>
      
      {/* Profile picture */}
      <View style={styles.imageContainer}>
        <Ionicons name='person-circle' size={60} color='green'/>
      </View>

      {/* Review info */}
      <View style={styles.info}>

        {/* Header */}
        <View style={styles.headerContainer}>
          {/* Reviewer name */}
          <View style={styles.reviewerNameContainer}>
            <Text style={styles.reviewerName}>{review.user}</Text>
          </View>
          {/* Rating */}
          <View style={styles.reviewerRatingContainer}>
            <ItemReviewStars size={0.525} numStars={clampGrade(Math.round(review.grade))}/>
          </View>
        </View>
        
        {/* Message */}
        <View style={styles.reviewerMessageContainer}>
          <Text style={styles.reviewerMessage}>
            {review.text}
          </Text>
        </View>

      </View>

    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flex: 1,
  },
  imageContainer: {
    marginRight: scale(10),
    flex: 0.2,
  },
  info: {
    flexDirection: 'column',
    flexWrap: 'wrap',
    flex: 0.8,
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    flex: 1,
  },
  reviewerNameContainer: {
    alignItems: 'flex-start',
    flex: 1,
  },
  reviewerName: {
    fontWeight: 'bold',
    fontSize: scale(12),
    //flex: 1,
  },
  reviewerRatingContainer: {
    alignItems: 'flex-end',
    flex: 1,
  },
  reviewerMessageContainer: {
    flexDirection: 'row',
    flex:1
  },
  reviewerMessage: {
    fontSize: scale(12),
    flex: 1
  }
});
