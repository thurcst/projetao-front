import React from "react";
import { View, StyleSheet, Text } from "react-native";


export function CriteriaPage() {
    return (
        <View style={styles.container}>
            <Text>StarGold -{">"} Mandou o laudo com teste ELISA para esse lote e tem linha de produção exclusiva e ratreia fornecedor ou possui verificação da ACELPAR</Text>
            <Text>5 -{">"} Mandou laudo com teste ELISA para esse lote e tem linha de produção exclusiva</Text>
            <Text>4 -{">"} Teste ELISA</Text>
            <Text>3 -{">"} Teste ELISA para lotes passados</Text>
            <Text>2 -{">"} Teste não ELISA</Text>
            <Text>1 -{">"} Rótulo sem glúten, mas sem teste</Text>
            <Text>0 -{">"} Rótulo com glúten ou pode conter glúten</Text>
        </View>
    );
  }
  
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});