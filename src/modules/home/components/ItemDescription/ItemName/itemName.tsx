import { View, Text, StyleSheet } from "react-native";
import eventsInstance from "../../../../../shared/services/analytics";
import { scale, verticalScale } from "../../../../../shared/styles/scaling_units";

interface ItemNameProps {
  productName: String
}

export function ItemName( props: ItemNameProps ) {
    return (
      <View style={styles.itemNameCard}>
        <Text style={styles.itemNameTitle} onPress={eventsInstance.sendEvent("Tocou no nome do produto na tela do produto")}>
          {props.productName.split(' ').map(word => word.charAt(0) + word.slice(1).toLowerCase()).join(' ').replace('\n', '')}
        </Text>
      </View>
    );
}

const styles = StyleSheet.create({
  itemNameCard: {
    backgroundColor: 'white',
    borderRadius: scale(50),
    alignSelf: 'baseline',
    elevation: 4,
  },
  itemNameTitle: {
    fontSize: scale(19),
    color: 'black',
    fontWeight: 'bold',
    paddingVertical: verticalScale(10),
    paddingHorizontal: scale(30),
  }
})