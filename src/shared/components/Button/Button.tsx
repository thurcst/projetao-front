import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { scale, verticalScale } from "../../styles/scaling_units";
export type ButtonProps = {
  title: string;
  onPress: () => void;
};
export const Button = ({ title, onPress }: ButtonProps) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  button: {
    backgroundColor: "blue",
    marginTop: verticalScale(15),
    paddingVertical: verticalScale(15),
    borderRadius: 25,
    width: "100%",
    alignItems: "center",
    justifyContent: 'center',
  },
  text: {
    color: "white",
    fontWeight: "700",
    fontSize: scale(18),
  },
});