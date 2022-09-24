import { useFocusEffect } from "@react-navigation/native";
import React, { useState } from "react";
import { Text, View, Image, StyleSheet, ActivityIndicator, ScrollView, Dimensions } from "react-native";
import { scale } from "../../../../shared/styles/scaling_units";
import { ItemName } from "../../components/ItemDescription/ItemName/itemName";
import { ItemValidation } from "../../components/ItemDescription/ItemValidation/itemValidation";
import SearchBar from "../../components/SearchBar/searchbar";
import { getProduct } from "../../services/product.service";

const { width, height } = Dimensions.get('window');
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
      return <ActivityIndicator size="large" style={styles.activityIndicator}/>;
    }    
    return (
      <View style={styles.container}>
        <View style={styles.imageView}>
          <Image
                  source= {{uri: item.picturePath}}
                  style={styles.image}
            />
        </View>
        <ScrollView style={styles.itemDescriptionView}>
        <ItemName productName={item.productName}/>
        <View style={styles.itemDescriptionFields}>
          <ItemValidation navigationProp={navigation} safetyCategory={item && item.safetyCategory} productCategory={item && item.productCategory}/>
        </View>
        <Text>Codigo de barras: Tipo = {typeItem}, Data = {itemId}</Text>
        </ScrollView>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      {getContent()}
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#DADADA',
  },
  imageView: {
    flex: 0.6,
    width: '100%',
    height: '100%',
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'center'
  },
  itemDescriptionView: {
    backgroundColor: 'white',
    borderTopLeftRadius: scale(25),
    borderTopRightRadius: scale(25),
    flex: 1,
    paddingVertical: 8,
    paddingHorizontal: 8
  },
  itemDescriptionFields: {
    flex: 1,
    alignItems: 'flex-end'
  },
  activityIndicator: {
    marginTop: width / 2,
  }
})