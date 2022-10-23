import { Ionicons } from '@expo/vector-icons';
import { StyleSheet, Text, View, TouchableOpacity, Image, ActivityIndicator } from 'react-native';
import { ShowAlert } from '../../../../shared/pages/showAlert';
import React, { useEffect, useState } from 'react';
import { Product } from '../../types/product';
import { getProduct } from '../../services/product.service';
import { moderateScale, scale, verticalScale } from '../../../../shared/styles/scaling_units';
import { stackRouteNames } from '../../types/stackRouteNames';
import { NavigationScreenProp } from 'react-navigation';
import { ProductResponse } from '../../types/responseInterfaces';

interface ActionsItemsProps {
  itemId: number,
  navigationProp: NavigationScreenProp<any,any>
}

export function ActionsItems( props: ActionsItemsProps ){
    let   [isError, setIsError] =     useState<boolean>(false);
    let   [item, setItem] =           useState<ProductResponse>(null);
    const [isLoading, setIsLoading] = useState<boolean>(true);
    useEffect(() => {
      async function fetchData() {
        setIsLoading(true);
        try {
          const productItem = await getProduct(props.itemId);
          setItem(productItem);
          setIsLoading(false);
        } catch (error) {
          console.log(error);
          setIsError(true);
          setIsLoading(false);
        }
        setIsLoading(false);
      }

      fetchData();
    }, [setItem]);

    const getContent = () => {    
      if (isLoading) {      
        return <ActivityIndicator size="large"/>;
      }
      if (isError || !item) {
        ShowAlert("O produto não foi encontrado");
        return <View></View>
      } else {
        return (
          <TouchableOpacity
            onPress={() => 
              {
                props.navigationProp.navigate(
                  stackRouteNames.ProductPage,
                  { item }
                )
              }
            }
            style={styles.actionButton}
          >

            <View style={styles.areaButton}>
              <View style={styles.imageContainer}>
                <Image
                source= {{uri: item.picturePath}} 
                style={styles.image}
                />
              </View>
              <View style={styles.foodNameAndIcons}>
                <Text style={styles.foodNameAndIcons}>
                {item && item.productName}
                </Text>
                <View style={styles.areaButton} >
                  <Ionicons name="reader-outline" color={'#000'} size={25} />
                  <Ionicons name="chatbubbles-outline" color={'#000'} size={25} />
                </View>
              </View>
            </View>
            
          </TouchableOpacity>
        );
      }
    }

    return (
        <View style={styles.container}>
          {getContent()}
        </View>
    
    )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  actionButton: {
    flex: 1,
    backgroundColor: '#fff',
  },
  areaButton: {
      flex:1,
      flexDirection: 'row',  
  },
  image: {
    width: scale(50),
    height: scale(50),
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 15
    },
  foodNameAndIcons: {
    flexDirection: 'column',
    top: verticalScale(5),
    left: moderateScale(5),
    borderBottomWidth: 0.5,
    borderBottomColor: '#DADADA',
    textTransform: 'capitalize',
    marginBottom:4
  },
  imageContainer: {
      padding: 4
  }
});