import React from "react";
import { Text, View, Image, StyleSheet } from "react-native";
import { ItemName } from "../../components/ItemDescription/ItemName/itemName";
import { ItemValidation } from "../../components/ItemDescription/ItemValidation/itemValidation";
import SearchBar from "../../components/SearchBar/searchbar";

export function ProductPage( {route, navigation} ) {
  const {productName} = route.params;
  return (
    <View style={styles.container}>
      <SearchBar />
      <View style={styles.imageView}>
      <Image
              source= {{uri:'https://cdn.discordapp.com/attachments/1014314736126545941/1016454312349683844/darkbckg.png'}}
              style={styles.image}
       />
      </View>
       <View style={styles.itemDescriptionView}>
        <ItemName productName={productName}/>
        <ItemValidation navigationProp={navigation}/>
       </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  imageView: {
    flex: 0.6,
    backgroundColor: '#DADADA',
    width: '100%',
    height: '100%',
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'center'
  },
  itemDescriptionView: {
    flex: 1,
    paddingVertical: 8,
    paddingHorizontal: 8
  },
  itemValidationTitle: {
    fontSize: 18,
    fontWeight: 'bold'
  },
  itemValidationLaudoLink: {
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
