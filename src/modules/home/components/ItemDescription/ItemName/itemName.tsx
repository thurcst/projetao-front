import { View, Text, StyleSheet } from "react-native";
import { scale, verticalScale } from "../../../../../shared/styles/scaling_units";

interface ItemNameProps {
  productName: String
}

export function ItemName( props: ItemNameProps ) {
    return (
      <View style={styles.itemNameCard}>
        <Text style={styles.itemNameTitle}>{props.productName}</Text>
      </View>
    );
}

const styles = StyleSheet.create({
    itemNameCard: {
        backgroundColor: '#44bb6e',
        paddingVertical: verticalScale(8),
        paddingHorizontal: scale(20),
        borderRadius: scale(50),
        alignSelf: 'baseline'
      },
      itemNameTitle: {
        fontSize: scale(24),
        color: 'white',
        fontWeight: 'bold',
        paddingBottom: scale(5)
      }
})