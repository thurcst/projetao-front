import { Ionicons } from "@expo/vector-icons";
import { View, Text, StyleSheet } from "react-native";
import { scale } from "../../../shared/styles/scaling_units";

function getIconSafetyCategory(safetyCategory: string) {
    if (parseInt(safetyCategory) == 0) {
        return <Ionicons name="shield-outline" color={'red'} size={20}/>
    } else if (parseInt(safetyCategory) == 1) {
        return <Ionicons name="shield-outline" color={'orange'} size={20}/>
    } else if (parseInt(safetyCategory) == 2) {
        return <Ionicons name="shield-outline" color={'yellow'} size={20}/>
    } else if (parseInt(safetyCategory) == 3) {
        return <Ionicons name="shield-outline" color={'yellow'} size={20}/>
    } else if (parseInt(safetyCategory) == 4) {
        return <Ionicons name="shield-outline" color={'green'} size={20}/>
    } else if (parseInt(safetyCategory) == 5) {
        return <Ionicons name="shield-outline" color={'green'} size={20}/>
    } else {
        return <Ionicons name="shield-checkmark-outline" color={'green'} size={20}/>
    }
}

export function SetSafetyCategory(safetyCategory: string) {

    return (
        <View style={styles.itemValidationIconText}>
            {getIconSafetyCategory(safetyCategory)}
            <Text style={styles.text}>{safetyCategory}</Text>
          </View>
    );
}

const styles = StyleSheet.create({
    itemValidationIconText: {
      flexDirection: 'row',
    },
    text: {
        marginLeft: scale(5),
        fontSize: scale(20)
    }
  })