import { Ionicons } from '@expo/vector-icons';
import { StyleSheet, Text, View, TouchableOpacity, Image, ActivityIndicator } from 'react-native';
import React, { useEffect, useState } from 'react';
import { Product } from '../../types/product';
import { getProduct } from '../../services/product.service';

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
          {props.navigationProp.navigate("ProductPage", {
            itemId: item.barCode
          })}} 
          style={styles.actionButton}>
          
          <View style={styles.areaButton}>
            <Image
             source= {{uri: item.picturePath}} 
             style={styles.image}
            />
            <View style={styles.teste}>
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
    backgroundColor: '#fff',
  },
    actionButton: {
        flex: 1,
        backgroundColor: '#fff',
        paddingStart: 5, 
        marginVertical: 8,
        borderBottomWidth: 0.5,
        borderBottomColor: '#DADADA'    
    },
    areaButton: {
        flex:1,
        backgroundColor: '#fff',
        flexDirection: 'row',
        
    },
    image: {
      width: 60,
      height: 60,
      flexDirection: 'row',
      right: 6,
     },
    teste: {
      flexDirection: 'column',
      top: 5,
      left: 5,
     },

});