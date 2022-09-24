import { View, Text, StyleSheet } from "react-native";
import { Ionicons } from '@expo/vector-icons';
import { scale } from "../../../../../shared/styles/scaling_units";

export function ItemValidation( props ) {
    return (
        <View style={styles.itemValidationView}>
          <View>
            <Text style={styles.itemValidationTitle}>Validação:</Text>
            <View style={styles.itemValidationIconText}>
              <Ionicons name="shield-checkmark-outline" color={'green'} size={20}/>
              <Text style={{marginLeft: scale(5)}}>{props.safetyCategory}</Text>
            </View>
            <Text style={styles.itemValidationLink} 
                onPress={() => {props.navigationProp.navigate("LaudoPage")}}>Laudo</Text>
            <Text>Categoria: {props.productCategory}</Text>
            <Text style={styles.itemValidationLink}>Entenda nossa avaliação</Text>
          </View>
        </View>
    );
}

const styles = StyleSheet.create({
  itemValidationTitle: {
    fontSize: scale(16),
    fontWeight: 'bold',
  },
  itemValidationLink: {
    color: 'green',
    textDecorationLine: 'underline'
  },
  itemValidationIconText: {
    flexDirection: 'row',
  },
  itemValidationView: {
    backgroundColor: 'white',
  }
})
  