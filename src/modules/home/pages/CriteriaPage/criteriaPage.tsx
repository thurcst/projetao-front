import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { scale } from "../../../../shared/styles/scaling_units";
import { getIconSafetyCategory } from "../../types/setSafetyCategory";


export function CriteriaPage() {
    return (
        <View style={styles.container}>
          <View style={styles.textView}>
            <View style={styles.classificationAndIcon}>
                {getIconSafetyCategory("6")}
              <Text style={styles.classificationText}>StarGold: </Text>
            </View>
              <Text style={styles.text}>Mandou o laudo com teste ELISA para esse lote e tem linha de produção exclusiva e ratreia fornecedor ou possui verificação da ACELPAR</Text>
          </View>
          <View style={styles.textView}>
            <View style={styles.classificationAndIcon}>
              {getIconSafetyCategory("5")}
              <Text style={styles.classificationText}>5: </Text>
            </View>
              <Text style={styles.text}>Mandou laudo com teste ELISA para esse lote e tem linha de produção exclusiva</Text>
          </View>
          <View style={styles.textView}>
            <View style={styles.classificationAndIcon}>
              {getIconSafetyCategory("4")}
              <Text style={styles.classificationText}>4: </Text>
            </View>
              <Text style={styles.text}>Teste ELISA</Text>
          </View>
          <View style={styles.textView}>
            <View style={styles.classificationAndIcon}>
              {getIconSafetyCategory("3")}
              <Text style={styles.classificationText}>3: </Text>
            </View>
              <Text style={styles.text}>Teste ELISA para lotes passados</Text>
          </View>
          <View style={styles.textView}>
            <View style={styles.classificationAndIcon}>
              {getIconSafetyCategory("2")}
              <Text style={styles.classificationText}>2: </Text>
            </View>
              <Text style={styles.text}>Teste não ELISA</Text>
          </View>
          <View style={styles.textView}>
            <View style={styles.classificationAndIcon}>
              {getIconSafetyCategory("1")}
              <Text style={styles.classificationText}>1: </Text>
            </View>
              <Text style={styles.text}>Rótulo sem glúten, mas sem teste</Text>
          </View>
          <View style={styles.textView}>
            <View style={styles.classificationAndIcon}>
              {getIconSafetyCategory("0")}
              <Text style={styles.classificationText}>0: </Text>
            </View>
              <Text style={styles.text}>Rótulo com glúten ou pode conter glúten</Text>
          </View>
        </View>
    );
  }
  
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  text: {
    padding: scale(5),
    fontSize: scale(14)
  },
  textView: {
    flexDirection: 'column',
    paddingHorizontal: scale(5)
  },
  classificationText: {
    paddingHorizontal: scale(5),
    fontSize: scale(20),
    fontWeight: '400'
  },
  classificationAndIcon: {
    flexDirection: 'row',
  }
});