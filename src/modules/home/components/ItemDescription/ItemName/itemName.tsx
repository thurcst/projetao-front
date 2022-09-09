import { View, Text, StyleSheet } from "react-native";

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
        paddingVertical: 8,
        paddingHorizontal: 25,
        borderRadius: 50
      },
      itemNameTitle: {
        fontSize: 18,
        fontWeight: 'bold'
      }
})