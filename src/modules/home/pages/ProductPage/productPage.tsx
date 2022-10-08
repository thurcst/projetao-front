import { useFocusEffect } from "@react-navigation/native";
import React, { useState } from "react";
import { Text, View, Image, StyleSheet, ActivityIndicator, ScrollView, Dimensions } from "react-native";
import { ShowAlert } from "../../../../shared/pages/showAlert";
import { scale, verticalScale } from "../../../../shared/styles/scaling_units";
import { ItemCommunity } from "../../components/ItemDescription/itemCommunity/itemCommunity";
import { ItemIngredients } from "../../components/ItemDescription/itemIngredients/itemIngredients";
import { ItemName } from "../../components/ItemDescription/ItemName/itemName";
import { ItemNutritionalValue } from "../../components/ItemDescription/itemNutritionalValue/itemNutritionalValue";
import { ItemPrice } from "../../components/ItemDescription/itemPrice/itemPrice";
import { ItemValidation } from "../../components/ItemDescription/ItemValidation/itemValidation";
import { ItemRecipes } from "../../components/ItemRecipes/itemRecipes";
import { ItemSimilars } from "../../components/ItemSimilars/itemSimilars";
import { getProduct } from "../../services/product.service";
import { ProductResponse } from "../../types/responseInterfaces";

const { width, height } = Dimensions.get('window');
export function ProductPage( props ) {
  const { navigation, route } = props;
  const { typeItem, itemId} = route.params;
  let [item, setItem] = useState<ProductResponse>(null);
  let [isLoading, setIsLoading] = useState<boolean>(true);
  let [isError, setIsError] = useState<boolean>(false);

  let isActive = true;
  useFocusEffect(
    React.useCallback(() => {
      isActive = true;      
      const fetchData = async () => {
        setIsLoading(true);
        try {
          const response = await getProduct(itemId);
          if (isActive) {
            setItem(response);
          }
          setTimeout(() => {
            setIsLoading(false);
          }, 100);
        } catch (error) {
          console.log(error);
          setIsError(true);
          setTimeout(() => {
            setIsLoading(false);
          }, 100);
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
    } else if (isError || !item) {
        ShowAlert("O produto não foi encontrado.");
        return <View></View>;
    } else {
      return (
        <View style={styles.container}>

          {/* Image */}
          <View style={styles.imageView}>
            <Image
              source= {{uri: item.picturePath}}
              style={styles.image}
            />
          </View>

          {/* Name */}
          <View style={styles.itemName}>
            <ItemName productName={item.productName}/>
          </View>

          <ScrollView style={styles.itemDescriptionView}>
            
            <View style={styles.itemDescriptionFieldsContainer}>
              {/* Price */}
              <View style={{ width: '100%', marginBottom: scale(10) }}>
                <ItemPrice/>
              </View>

              <View style={styles.column}>
                {/* Nutritional value */}
                <View style={styles.itemDescriptionField}>
                  <ItemNutritionalValue/>
                </View>

                {/* Ingredients */}
                <View style={styles.itemDescriptionField}>
                  <ItemIngredients ingredients={item.productIngredients}/>
                </View>
              </View>


              <View style={styles.column}>
                {/* Validation */}
                <View style={styles.itemDescriptionField}>
                  <ItemValidation
                    navigationProp={navigation}
                    safetyCategory={item && item.safetyCategory}
                    productCategory={item && item.productCategory}
                  />
                </View>

                {/* Community */}
                <View style={styles.itemDescriptionField}>
                  <ItemCommunity/>
                </View>
              </View>
            </View>

            {/* Similars */}
            <View style={{marginBottom: verticalScale(15)}}>
              <ItemSimilars/>
            </View>

            {/* Recipes */}
            <View style={{marginBottom: verticalScale(25)}}>
              <ItemRecipes/>
            </View>

          </ScrollView>

        </View>
      );
    }  
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
  itemName: {
    position: 'absolute',
    elevation: 2,
    zIndex: 2,
    top: scale(185),
    left: scale(25)
  },
  itemDescriptionView: {
    backgroundColor: 'white',
    borderTopLeftRadius: scale(25),
    borderTopRightRadius: scale(25),
    flex: 1,
    paddingVertical: 8,
    paddingHorizontal: 8
  },
  itemDescriptionFieldsContainer: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'flex-start',
    marginTop: scale(33),
    marginRight: scale(10),
    marginLeft: scale(18)
  },
  column: {
    width: '50%'
  },
  itemDescriptionField: {
    marginBottom: scale(20)
  },
  activityIndicator: {
    marginTop: width / 2,
  }
})