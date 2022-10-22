import React from "react";
import { View, StyleSheet, Text, ScrollView } from "react-native";
import { scale, verticalScale } from "../../../../shared/styles/scaling_units";
import { getIconSafetyCategory } from "../../types/setSafetyCategory";


export function CriteriaPage() {
    return (
        <ScrollView style={styles.container}>
          <View style={styles.textView}>
            <View style={styles.classificationAndIcon}>
                {getIconSafetyCategory("6")}
              <Text style={styles.classificationText}>StarGold: </Text>
            </View>
              <Text style={styles.text}>A empresa apresentou laudo com teste ELISA para esse lote, tem linha de produção exclusiva e ratreia fornecedores; ou a empresa possui verificação da ACELPAR.</Text>
          </View>
          <View style={styles.textView}>
            <View style={styles.classificationAndIcon}>
              {getIconSafetyCategory("5")}
              <Text style={styles.classificationText}>5: </Text>
            </View>
              <Text style={styles.text}>A empresa apresentou laudo com teste ELISA para esse lote e tem linha de produção exclusiva.</Text>
          </View>
          <View style={styles.textView}>
            <View style={styles.classificationAndIcon}>
              {getIconSafetyCategory("4")}
              <Text style={styles.classificationText}>4: </Text>
            </View>
              <Text style={styles.text}>A empresa apresentou laudo com teste ELISA para esse lote.</Text>
          </View>
          <View style={styles.textView}>
            <View style={styles.classificationAndIcon}>
              {getIconSafetyCategory("3")}
              <Text style={styles.classificationText}>3: </Text>
            </View>
              <Text style={styles.text}>A empresa apresentou laudo com teste ELISA para lotes passados.</Text>
          </View>
          <View style={styles.textView}>
            <View style={styles.classificationAndIcon}>
              {getIconSafetyCategory("2")}
              <Text style={styles.classificationText}>2: </Text>
            </View>
              <Text style={styles.text}>A empresa apresentou laudo com teste não ELISA.</Text>
          </View>
          <View style={styles.textView}>
            <View style={styles.classificationAndIcon}>
              {getIconSafetyCategory("1")}
              <Text style={styles.classificationText}>1: </Text>
            </View>
              <Text style={styles.text}>Consta "não contém glúten" no rótulo do alimento, mas a empresa não apresentou laudo.</Text>
          </View>
          <View style={styles.textView}>
            <View style={styles.classificationAndIcon}>
              {getIconSafetyCategory("0")}
              <Text style={styles.classificationText}>0: </Text>
            </View>
              <Text style={styles.text}>Não consta "não contém glúten" no rótulo do alimento.</Text>
          </View>
        </ScrollView>
    );
  }
  
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: scale(10),
    marginTop: verticalScale(8),
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