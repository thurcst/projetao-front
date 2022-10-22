import { Ionicons } from "@expo/vector-icons";
import { View, Text, StyleSheet } from "react-native";
import { scale, verticalScale } from "../../../shared/styles/scaling_units";

export function getIconSafetyCategory(safetyCategory: string) {
    if (parseInt(safetyCategory) == 0) {
        return <Ionicons name="shield-outline" color={'red'} size={20}/>
    } else if (parseInt(safetyCategory) == 1) {
        return <Ionicons name="shield-outline" color={'#FF4500'} size={20}/>
    } else if (parseInt(safetyCategory) == 2) {
        return <Ionicons name="shield-outline" color={'#FFA500'} size={20}/>
    } else if (parseInt(safetyCategory) == 3) {
        return <Ionicons name="shield-outline" color={'yellow'} size={20}/>
    } else if (parseInt(safetyCategory) == 4) {
        return <Ionicons name="shield-outline" color={'#9ACD32'} size={20}/>
    } else if (parseInt(safetyCategory) == 5) {
        return <Ionicons name="shield-outline" color={'#9ACD32'} size={20}/>
    } else {
        return <Ionicons name="shield-checkmark-outline" color={'#008000'} size={20}/>
    }
}

export function SetSafetyCategory(safetyCategory: string) {

    return (
        <View style={styles.itemValidationIconText}>
            {getIconSafetyCategory(safetyCategory)}
            {/* gambiarra pra capitalizar a primeira letra */}     
            <Text style={styles.text}> Nível de segurança: {safetyCategory.charAt(0) + safetyCategory.slice(1).toLowerCase() } </Text>
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