import React from "react";
import { View, StyleSheet, Text } from "react-native";

const About = ({route}) => {
  const {typeItem, dataItem} = route.params;
  return (
    <View style={styles.center}>
      <Text>This is the about screen {typeItem}, {dataItem}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  center: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
  },
});

export default About;