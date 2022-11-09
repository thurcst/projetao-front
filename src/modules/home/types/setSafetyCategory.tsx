import { Ionicons } from "@expo/vector-icons";
import { View, Text, StyleSheet } from "react-native";
import { scale, verticalScale } from "../../../shared/styles/scaling_units";

export function getIconSafetyCategory(safetyCategory: string) {
    if (parseInt(safetyCategory) == 0) {
        return <Ionicons name="shield-sharp" color={'red'} size={20}/>
    } else if (parseInt(safetyCategory) == 1) {
        return <Ionicons name="shield-sharp" color={'#FF4500'} size={20}/>
    } else if (parseInt(safetyCategory) == 2) {
        return <Ionicons name="shield-sharp" color={'#FFA500'} size={20}/>
    } else if (parseInt(safetyCategory) == 3) {
        return <Ionicons name="shield-sharp" color={'yellow'} size={20}/>
    } else if (parseInt(safetyCategory) == 4) {
        return <Ionicons name="shield-sharp" color={'#9ACD32'} size={20}/>
    } else if (parseInt(safetyCategory) == 5) {
        return <Ionicons name="shield-sharp" color={'#9ACD32'} size={20}/>
    } else {
        return <Ionicons name="shield-checkmark-sharp" color={'#008000'} size={20}/>
    }
}

export function SetSafetyCategory(safetyCategory: string) {
    let safetyCategoryMinus1 = (parseInt(safetyCategory) - 1).toString();

    function getSafetyLevel(safetyCategory: string) {
        if (safetyCategory === '6') {
            return 'Star Gold';
        } else {
            return safetyCategory;
        }
    }
    return (
        <View style={styles.itemValidationIconText}>
            {getIconSafetyCategory(safetyCategoryMinus1)}
            {/* gambiarra pra capitalizar a primeira letra */}     
            <Text style={styles.text}> Nível de segurança: {getSafetyLevel(safetyCategoryMinus1)} </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    itemValidationIconText: {
      flexDirection: 'row',
      marginBottom: verticalScale(5),
    },
    text: {
        marginLeft: scale(5),
        fontSize: scale(16)
    }
  })