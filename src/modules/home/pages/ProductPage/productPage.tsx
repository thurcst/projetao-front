import { useFocusEffect } from "@react-navigation/native";
import React, { useState } from "react";
import { Text, View, Image, StyleSheet, ActivityIndicator } from "react-native";
import { ItemName } from "../../components/ItemDescription/ItemName/itemName";
import { ItemValidation } from "../../components/ItemDescription/ItemValidation/itemValidation";
import SearchBar from "../../components/SearchBar/searchbar";
import { getProduct } from "../../services/product.service";

export function ProductPage( props ) {
  const { navigation, route } = props;
  const { typeItem, itemId} = route.params;
  let [item, setItem] = useState(null);
  let [isLoading, setIsLoading] = useState(true);

  let isActive = true;
  useFocusEffect(
    React.useCallback(() => {
      isActive = true;      
      const fetchData = async () => {
        setIsLoading(true);
        const response = await getProduct(itemId);
        if (isActive) {
          setItem(response);
        }
        setTimeout(() => {
          setIsLoading(false);
        }, 100);
      };

      fetchData();

      return () => {
        isActive = false;
      }
    }, [itemId])
  );

  const getContent = () => {    
    if (isLoading) {      
      return <ActivityIndicator size="large"/>;
    }    
    return (
      <View style={styles.container}>
        <View style={styles.imageView}>
          <Image
                  source= {{uri:'https://cdn.discordapp.com/attachments/1014314736126545941/1016454312349683844/darkbckg.png'}}
                  style={styles.image}
            />
        </View>
        <View style={styles.itemDescriptionView}>
        <ItemName productName={item.productName}/>
        <ItemValidation navigationProp={navigation} safetyCategory={item && item.safetyCategory} productCategory={item && item.productCategory}/>
        <Text>Codigo de barras: Tipo = {typeItem}, Data = {itemId}</Text>
        </View>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <SearchBar />
      {getContent()}
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