import { RouteProp, useRoute } from '@react-navigation/native';
import React from 'react'
import { View, Text } from 'react-native'
import mockDataBase from '../../../../../mockDataBase';

type ParamList = {
    CategoryPage: {
        productCategory: string,
    }
  };

  export default function CategoryPage() {
      
    const route = useRoute<RouteProp<ParamList, 'CategoryPage'>>();
    
    const filteredItems = mockDataBase.find((item) => item.productCategory === route.params.productCategory).data;

    return (
        <View>
            {filteredItems.map((item) => <Text key={item.barCode}>{item.productName}</Text>)}
        </View>
    )
}