import React, { useState } from 'react'
import { useFocusEffect } from '@react-navigation/native'
import { getProduct } from '../../services/product.service'
import { ShowAlert } from '../../../../shared/pages/showAlert'
import { ProductResponse } from '../../types/responseInterfaces'
import { ItemName } from '../../components/ItemDescription/ItemName/itemName'
import { scale, verticalScale } from '../../../../shared/styles/scaling_units'
import { ItemValidation } from '../../components/ItemDescription/ItemValidation/itemValidation'
import { ItemIngredients } from '../../components/ItemDescription/itemIngredients/itemIngredients'
import { ItemCommunityPreview } from '../../components/ItemDescription/itemCommunity/itemCommunityPreview'

import {
  View,
  Image,
  StyleSheet,
  ActivityIndicator,
  ScrollView,
  Dimensions,
} from 'react-native'

interface ProductPageState {
  itemNameCardHeight: number
  isError: boolean
}

const { width, height } = Dimensions.get('window')

export function ProductPage(props) {
  let [item, setItem] = useState<ProductResponse>(null)
  let [found, setFound] = useState<boolean>(false)
  let [isLoading, setLoading] = useState<boolean>(true)
  let [isError, setError] = useState<boolean>(false);
  let [itemNameCardHeight, setItemNameCardHeight] = useState<number>(0);

  const { navigation, route } = props

  let state: ProductPageState = {
    itemNameCardHeight: 0,
    isError: false,
  }

  const fetchData = async (barCode: number) => {
    try {
      getProduct(route.params.item)
        .then((value) => {
          if (!value) {
            setError(true);
            // ShowAlert('Não foi possível encontrar produtos para esta categoria')
          } else {
            setItem(value)
            setFound(true)
            setLoading(false)
            setError(false)
          }
        })
        .catch((e) => {
          console.log(e)
          isLoading = false
          setError(true);
        })
    } catch (e) {
      console.log(e)
      setError(true);
    }
  }

  const onLayout = (event) => {
    setItemNameCardHeight(event.nativeEvent.layout.height)
  }

  useFocusEffect(
    React.useCallback(() => {
      if (typeof route.params.item == 'number') {
        fetchData(route.params.item)
        console.log(item + ' item')
      } else {
        item = route.params.item
        console.log(item)
        setItem(item)
        setFound(true)
        setLoading(false)
      }
    }, [route.params.item])
  )

  if (isError) {
    ShowAlert('Houve um erro na procura do item, tente novamente.')
  } else if (isLoading) {
    return (
      <View>
        <ActivityIndicator size="large" style={styles.activityIndicator} />
      </View>
    )
  } else if (found) {
    console.log('found: ', found)
    return (
      <View style={styles.container}>
        {/* Image */}
        <View style={styles.imageView}>
          <Image
            source={{
              uri: item.picturePath
                ? item.picturePath
                : 'https://cdn.discordapp.com/attachments/1014314736126545941/1016454312349683844/darkbckg.png',
            }}
            style={styles.image}
          />
        </View>

        {/* Name */}
        <View style={styles.itemName} onLayout={(event) => onLayout(event)}>
          <ItemName productName={item.productName} />
        </View>

        <ScrollView style={styles.itemDescriptionView}>
          {/* Margin for the item name */}
          <View
            style={{
              marginTop: Math.max(
                0,
                itemNameCardHeight - verticalScale(35)
              ),
            }}
          >
            <View style={styles.itemDescriptionFieldsContainer}>
              <View style={styles.column}>
                {/* Validation */}
                <View style={styles.itemDescriptionField}>
                  <ItemValidation
                    navigationProp={navigation}
                    safetyCategory={item && item.category}
                    reportPath={
                      item.idReport == 100
                        ? ''
                        : 'https://semgluten.cin.ufpe.br/media/reports/' +
                          item.barCode +
                          '.png'
                    }
                  />
                </View>

                <View style={styles.lineStyle} />

                {/* Ingredients */}
                <View style={styles.itemDescriptionField}>
                  <ItemIngredients ingredients={item.productIngredients} />
                </View>

                <View style={styles.lineStyle} />

                {/* Community */}
                <View style={styles.itemDescriptionField}>
                  <ItemCommunityPreview barCode={item.barCode}/>
                </View>
              </View>
            </View>
          </View>
        </ScrollView>
      </View>
    )
  }
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
    resizeMode: 'center',
  },
  itemName: {
    position: 'absolute',
    elevation: 2,
    zIndex: 2,
    top: scale(170),
    paddingHorizontal: scale(25),
  },
  itemDescriptionView: {
    backgroundColor: 'white',
    borderTopLeftRadius: scale(25),
    borderTopRightRadius: scale(25),
    flex: 1,
    paddingVertical: verticalScale(8),
    paddingHorizontal: scale(8),
  },
  itemDescriptionFieldsContainer: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'flex-start',
    marginRight: scale(10),
    marginLeft: scale(18),
  },
  column: {
    width: '100%',
  },
  itemDescriptionField: {
    marginBottom: scale(20),
  },
  activityIndicator: {
    marginTop: width / 2,
  },
  lineStyle: {
    borderWidth: 0.25,
    borderColor: 'rgba(0, 0, 0, 0.1)',
    marginBottom: verticalScale(15),
  },
})
