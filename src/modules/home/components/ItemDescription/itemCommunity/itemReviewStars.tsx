import React from "react";
import { View, StyleSheet } from "react-native";
import { scale } from "../../../../../shared/styles/scaling_units";
import { Ionicons } from '@expo/vector-icons';

export function ItemReviewStars({ size, numStars }) {
  const numBright = numStars;
  const numDull = 5 - numStars;
  return (
    <View style={styles.container}>
      {new Array(numBright).map( (value, i) =>
        <Ionicons key={i} name='star' style={[styles.star(size), styles.brightStar]}/>
      )}
      {new Array(numDull).map( (value, i) =>
        <Ionicons key={numBright+i} name='star' style={[styles.star(size), styles.dullStar]}/>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'flex-start'
  },
  star: (size: number) => {
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
  