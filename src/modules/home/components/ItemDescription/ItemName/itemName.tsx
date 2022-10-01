import { View, Text, StyleSheet } from "react-native";
import { scale, verticalScale } from "../../../../../shared/styles/scaling_units";

export function ItemName( props ) {
    return (
        <View style={styles.itemNameCard}>
          <Text style={styles.itemNameTitle}>{props.productName}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    itemNameCard: {
        backgroundColor: '#DADADA',
        paddingVertical: verticalScale(8),
        paddingHorizontal: scale(25),
        borderRadius: scale(50)
      },
      itemNameTitle: {
        fontSize: scale(18),
        fontWeight: 'bold'
      }
})