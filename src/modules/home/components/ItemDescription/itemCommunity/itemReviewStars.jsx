import React, { useState } from "react";
import { View, StyleSheet, Pressable } from "react-native";
import { scale } from "../../../../../shared/styles/scaling_units";
import { Ionicons } from '@expo/vector-icons';
import eventsInstance from "../../../../../shared/services/analytics";

export function ItemReviewStars({ size, numStars }) {
  const [numBright, setNumBright] = useState(numStars);
  const [numDull, setNumDull] = useState(5 - numStars);
  return (
    <Pressable onPress={() => {eventsInstance.sendEvent("Tocou nas estrelas da comunidade")}}>
      <View style={styles.container}>
        {new Array(Math.floor(numBright)).fill(0).map( (value, i) =>
          <Ionicons key={i} name='star' style={[styles.star(size), styles.brightStar]}/>
        )}
        {new Array(Math.floor(numDull)).fill(0).map( (value, i) =>
          <Ionicons key={numBright+i} name='star' style={[styles.star(size), styles.dullStar]}/>
        )}
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  star: (size) => {
    return {
      fontSize: scale(16*size),
      marginHorizontal: scale(6*size)
    }
  },
  brightStar: {
      color: '#44bb6e',
  },
  dullStar: {
    color: 'rgb(170, 170, 170)',
  }
});
  