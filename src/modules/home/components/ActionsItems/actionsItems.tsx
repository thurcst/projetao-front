import { Ionicons } from '@expo/vector-icons';
import { StyleSheet, Text, View, TouchableOpacity, Image, ActivityIndicator } from 'react-native';
import React, { useEffect, useState } from 'react';
import { Product } from '../../types/product';
import { getProduct } from '../../services/product.service';
import { moderateScale, scale, verticalScale } from '../../../../shared/styles/scaling_units';
import { stackRouteNames } from '../../types/stackRouteNames';

export function ActionsItems( props ){
    let [item, setItem] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
      async function fetchData() {
        setIsLoading(true);
        const productItem = await getProduct(props.itemId);
        setItem(productItem);
        setIsLoading(false);
      }

      fetchData();
    }, [setItem]);
    

    const getContent = () => {    
      if (isLoading) {      
        return <ActivityIndicator size="large"/>;
      }    
      return (
        <TouchableOpacity onPress={() => 
          {props.navigationProp.navigate(stackRouteNames.ProductPage, {
            itemId: item.barCode
          })}} 
          style={styles.actionButton}>
          
          <View style={styles.areaButton}>
            <View style={styles.imageContainer}>
              <Image
              source= {{uri: 'https://cdn.discordapp.com/attachments/1014314736126545941/1016454312349683844/darkbckg.png'}} 
              style={styles.image}
              />
            </View>
            <View style={styles.foodNameAndIcons}>
              <Text>
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
    borderBottomColor: '#DADADA'
    },
  imageContainer: {
      padding: 4,
  }
});