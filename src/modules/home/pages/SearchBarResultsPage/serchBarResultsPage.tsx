import { Ionicons } from "@expo/vector-icons";
import React, { useEffect, useState } from "react";
import { Text, View, Button, StyleSheet, Image, TouchableOpacity, ActivityIndicator, Dimensions } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";
import { moderateScale, scale, verticalScale } from "../../../../shared/styles/scaling_units";
import { MainItems } from "../../components/MainItems/mainItems";
import MainSection from "../../components/MainSection/mainSection";
import SearchBar from "../../components/SearchBar/searchbar";
import { getProductsByName } from "../../services/product.service";
import { stackRouteNames } from "../../types/stackRouteNames";

const { width, height } = Dimensions.get('window');

export function SearchBarResultsPage(props) {
    const { navigation, route } = props;
  const { searchedPhrase } = route.params;
  const [data, setData] = useState([]);
  let [isLoading, setIsLoading] = useState(true);
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    setIsLoading(true);
    try {
      const response = await getProductsByName(searchedPhrase);
      setData(response);
      setFilteredData(response);
    } catch (error) {
      console.log(error);
    }
    setIsLoading(false);
  };

  const getContent = () => {    
    if (isLoading) {      
      return <ActivityIndicator size="large" style={styles.activityIndicator}/>;
    }    
    return (
        <ScrollView>
        {
            filteredData.map((item, index) => {
                return (
                    <ScrollView style={styles.container}>
                        {filteredData.map((item) => 
                        <TouchableOpacity onPress={() => 
                            {props.navigation.navigate(stackRouteNames.ProductPage, {
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
                        )}
                    </ScrollView>
                )
            })
        }
      </ScrollView>
    );
  }

  return (
    <View style={styles.container}>
      {/* <SearchBar navigation={props.navigation} /> */}
      {getContent()}
    </View>
  );
};

const styles = StyleSheet.create({
    activityIndicator: {
        marginTop: width / 2,
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
  container: {
    backgroundColor: 'white',
    flex: 1,
  },
  textFriends: {
    fontSize: 20,
    textAlign: 'left',
    marginLeft: 10,
    fontWeight: 'bold',
    marginTop: 10,
  },
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
    marginLeft: 10
  },
  textName: {
    fontSize: 17,
    marginLeft: 10,
    fontWeight: "600",
  },
  textEmail: {
    fontSize: 14,
    marginLeft: 10,
    color: 'gray'
  },
    imageContainer: {
        padding: 4,
    }
});

