import React from "react";
import { View, StyleSheet } from "react-native";
import { scale } from "../../../../../shared/styles/scaling_units";
import { Ionicons } from '@expo/vector-icons';

export function ItemReviewStars({ size }) {
  return (
    <View style={styles.container}>
      <Ionicons name='star' style={[styles.star(size), styles.brightStar]}/>
      <Ionicons name='star' style={[styles.star(size), styles.brightStar]}/>
      <Ionicons name='star' style={[styles.star(size), styles.brightStar]}/>
      <Ionicons name='star' style={[styles.star(size), styles.brightStar]}/>
      <Ionicons name='star' style={[styles.star(size), styles.dullStar]}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'flex-start'
  },
  star: (size) => {
    return {
      fontSize: scale(16*size),
      marginHorizontal: scale(6)
    }
  },
  brightStar: {
      color: '#44bb6e',
  },
  dullStar: {
    color: 'rgb(170, 170, 170)',
  }
});
  