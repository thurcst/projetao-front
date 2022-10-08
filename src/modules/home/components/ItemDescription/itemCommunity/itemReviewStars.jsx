import React from "react";
import { View, StyleSheet } from "react-native";
import { scale } from "../../../../../shared/styles/scaling_units";
import { Ionicons } from '@expo/vector-icons';

export function ItemReviewStars({ size }) {
  return (
    <View style={styles.starsContainer}>
      <Ionicons name='star' style={styles.brightStar(size)}/>
      <Ionicons name='star' style={styles.brightStar(size)}/>
      <Ionicons name='star' style={styles.brightStar(size)}/>
      <Ionicons name='star' style={styles.brightStar(size)}/>
      <Ionicons name='star' style={styles.dullStar(size)}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flexDirection: 'column',
  },
  starsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly'
  },
  brightStar: (size) => {
    return {
      color: '#44bb6e',
      fontSize: scale(16*size)
    }
  },
  dullStar: (size) => {
    return {
      color: 'rgb(170, 170, 170)',
      fontSize: scale(16*size)
    }
  }
});
  