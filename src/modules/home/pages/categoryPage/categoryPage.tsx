import { Ionicons } from '@expo/vector-icons';
import { RouteProp, useRoute } from '@react-navigation/native';
import React, { useEffect, useState } from 'react'
import { View, Text, TouchableOpacity, StyleSheet, Image, ActivityIndicator, ScrollView, Dimensions } from 'react-native'
import { ShowAlert } from '../../../../shared/pages/showAlert';
import categoriesDB from '../../../../../categoriesDB';
import mockDataBase from '../../../../../mockDataBase';
import { moderateScale, scale, verticalScale } from '../../../../shared/styles/scaling_units';
import { getProductsByCategory } from '../../services/product.service';
import { stackRouteNames } from '../../types/stackRouteNames';

type ParamList = {
    CategoryPage: {
        productCategory: string,
    }
  };
  const { width, height } = Dimensions.get('window');
  export default function CategoryPage( props ) {
    const route = useRoute<RouteProp<ParamList, stackRouteNames.CategoryPage>>();
    let categoryImageURL = categoriesDB.find(item => item.productCategory === route.params.productCategory).urlImage;
    let [isLoading, setIsLoading] = useState(true);
    let [productsByCategory, setProductsByCategory] = useState([]);
    let [isError, setIsError] = useState(false);

    useEffect(() => {
        async function fetchData() {
          setIsLoading(true);
          try {
            const filteredItems = await getProductsByCategory(route.params.productCategory);  
            setProductsByCategory(filteredItems);
            setIsLoading(false);
          } catch (error) {
            console.log(error);
            setIsError(true);
            setIsLoading(false);
          }
          setIsLoading(false);
        }
  
        fetchData();
      }, [setProductsByCategory]);

    const getContent = () => {    
        if (isLoading) {      
          return <ActivityIndicator size="large" style={styles.activityIndicator}/>;
        }
        if (isError || !productsByCategory)  {
            ShowAlert();
        } else {
            return (
                <ScrollView style={styles.container}>
                {productsByCategory.map((item) => 
                <TouchableOpacity onPress={() => 
                    {props.navigation.navigate(stackRouteNames.ProductPage, {
                      itemId: item.barCode
                    })}} 
                    style={styles.actionButton}>
                    
                    <View style={styles.areaButton}>
                      <View style={styles.imageContainer}>
                        <Image
                        source= {{uri: categoryImageURL}} 
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
                  )}
            </ScrollView>
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
    activityIndicator: {
        marginTop: width / 2,
    },
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