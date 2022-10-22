import { useFocusEffect } from "@react-navigation/native";
import React, { Component, useState } from "react";
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

interface ProductPageState {
  itemNameCardHeight: number
}

const { width, height } = Dimensions.get('window');
export class ProductPage extends Component<{}, ProductPageState> {
  navigation;
  route;
  item: ProductResponse;

  constructor(props) {
    super(props);
    this.navigation = props.navigation;
    this.route = props.route;
    this.state = { itemNameCardHeight: 0 };
    this.item = this.route.params.item;
  }

  onLayout(event) {
    this.setState({ itemNameCardHeight: event.nativeEvent.layout.height });
  } 

  render() { return (
    <View style={styles.container}>
      {/* Image */}
      <View style={styles.imageView}>
        <Image
          source= {{uri: this.item.picturePath}}
          style={styles.image}
        />
      </View>

      {/* Name */}
      <View style={styles.itemName} onLayout={(event) => this.onLayout(event)}>
        <ItemName productName={this.item.productName}/>
      </View>

      <ScrollView style={styles.itemDescriptionView}>
        
        {/* Margin for the item name */}
        <View style={{marginTop: Math.max(0, this.state.itemNameCardHeight-verticalScale(35))}}>
          <View style={styles.itemDescriptionFieldsContainer}>

            <View style={styles.column}>

              {/* Validation */}
              <View style={styles.itemDescriptionField}>
                <ItemValidation
                  navigationProp={this.navigation}
                  safetyCategory={this.item && this.item.category}
                />
              </View>

              <View style={styles.lineStyle} />

              {/* Ingredients */}
              <View style={styles.itemDescriptionField}>
                <ItemIngredients ingredients={this.item.productIngredients}/>
              </View>

              <View style={styles.lineStyle} />

              {/* Community */}
              <View style={styles.itemDescriptionField}>
                <ItemCommunity/>
              </View>

            </View>

          </View>
        </View>

        {/*
        Similars
        <View style={{marginBottom: verticalScale(15)}}>
          <ItemSimilars/>
        </View>
        */}

      </ScrollView>
    </View>
  );}
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
    top: scale(170),
    paddingHorizontal: scale(25)
  },
  itemDescriptionView: {
    backgroundColor: 'white',
    borderTopLeftRadius: scale(25),
    borderTopRightRadius: scale(25),
    flex: 1,
    paddingVertical: verticalScale(8),
    paddingHorizontal: scale(8)
  },
  itemDescriptionFieldsContainer: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'flex-start',
    marginRight: scale(10),
    marginLeft: scale(18)
  },
  column: {
    width: '100%'
  },
  itemDescriptionField: {
    marginBottom: scale(20)
  },
  activityIndicator: {
    marginTop: width / 2,
  },
  lineStyle:{
    borderWidth: 0.25,
    borderColor: 'rgba(0, 0, 0, 0.1)',
    marginBottom: verticalScale(15),
  }
})