import { useFocusEffect } from "@react-navigation/native";
import React, { useState } from "react";
import { Text, View, Image, StyleSheet, ActivityIndicator, ScrollView, Dimensions, Alert } from "react-native";
import { scale } from "../../../../shared/styles/scaling_units";
import { ItemName } from "../../components/ItemDescription/ItemName/itemName";
import { ItemValidation } from "../../components/ItemDescription/ItemValidation/itemValidation";
import { getProduct } from "../../services/product.service";

const { width, height } = Dimensions.get('window');
export function ProductPage( props ) {

  
  const { navigation, route } = props;
  const { typeItem, itemId} = route.params;
  let [item, setItem] = useState(null);
  let [isLoading, setIsLoading] = useState(true);
  let [isError, setIsError] = useState(false);
  const showAlert = () => {
    Alert.alert(
      "",
      "O produto não foi encontrado",
      [
        {
          text: "Voltar para a página anterior",
          onPress: () => navigation.goBack(),
          style: "cancel",
        },
      ],
      {
        cancelable: false,
        // onDismiss: () =>
        //   Alert.alert(
        //     "This alert was dismissed by tapping outside of the alert dialog."
        //   ),
      }
    );
  }

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
    }  else {
      if (isError || !item) {
        showAlert();
      } else {
        return (
          <View style={styles.container}>
            <View style={styles.imageView}>
              <Image
                      source= {{uri: 'https://cdn.discordapp.com/attachments/1014314736126545941/1016454312349683844/darkbckg.png'}}
                      style={styles.image}
                />
            </View>
            <ScrollView style={styles.itemDescriptionView}>
            <ItemName productName={item.productName}/>
            <View style={styles.itemDescriptionFields}>
              <ItemValidation navigationProp={navigation} safetyCategory={item && item.safetyCategory} productCategory={item && item.productCategory}/>
            </View>
            </ScrollView>
          </View>
        );
      }
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