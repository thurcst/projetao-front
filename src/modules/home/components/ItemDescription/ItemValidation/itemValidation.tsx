import { View, Text, StyleSheet } from "react-native";
import { Ionicons } from '@expo/vector-icons';

export function ItemValidation( props ) {
    return (
        <View style={styles.itemValidationView}>
          <View>
            <Text style={styles.itemValidationTitle}>Validação:</Text>
            <View style={styles.itemValidationIconText}>
              <Ionicons name="shield-checkmark-outline" color={'green'} size={20}/>
              <Text>{props.classifGluten}</Text>
            </View>
            <Text style={styles.itemValidationLink} 
                onPress={() => {props.navigationProp.navigate("LaudoPage")}}>Laudo</Text>
            <Text>Segurança: {props.securityGrade}/10.0</Text>
            <Text style={styles.itemValidationLink}>Entenda nossa avaliação</Text>
          </View>
        </View>
    );
}

const styles = StyleSheet.create({
    itemValidationTitle: {
      fontSize: 18,
      fontWeight: 'bold'
    },
    itemValidationLink: {
      color: 'green',
      textDecorationLine: 'underline'
    },
    itemValidationIconText: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      width: '43%'
    },
    itemValidationView: {
      alignItems: 'flex-end'
  
    }
  })
  