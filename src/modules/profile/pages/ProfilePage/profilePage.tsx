import React from "react";
import { Text, View, StyleSheet } from "react-native";

export function ProfilePage() {
  return (
    <View style={styles.container}>
      <Text>Perfil do usuário</Text>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      paddingStart: 20,
      paddingTop : 100,
    }
  })