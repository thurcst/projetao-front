import { Ionicons } from '@expo/vector-icons';
import { RouteProp, useRoute } from '@react-navigation/native';
import React, { useEffect, useState } from 'react'
import { View, Text, TouchableOpacity, StyleSheet, Image, ActivityIndicator, ScrollView, Dimensions,  Pressable } from 'react-native'
import { ShowAlert } from '../../../../shared/pages/showAlert';
import categoriesDB from '../../../../../categoriesDB';
import mockDataBase from '../../../../../mockDataBase';
import { moderateScale, scale, verticalScale } from '../../../../shared/styles/scaling_units';
import { getProductsByCategory } from '../../services/product.service';
import { stackRouteNames } from '../../types/stackRouteNames';
import { EvilIcons, Entypo } from '@expo/vector-icons';
import { Modal } from "../../../../shared/components/Modal/Modal";
import { ItemName } from '../../components/ItemDescription/ItemName/itemName';

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
    const [filteredItems, setFilteredItems] = useState([]);
    const [data, setData] = useState([]);
    useEffect(() => {
        async function fetchData() {
          setIsLoading(true);
          try {
            const response = await getProductsByCategory(route.params.productCategory);  
            setData(response)
            setProductsByCategory(response);
            setFilteredItems(response);
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
            ShowAlert("Não foi possível encontrar produtos para esta categoria");
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
                        source= {{uri: "https://semgluprov.loca.lt/media/picture/" + item.barCode + ".png"}} 
                        style={styles.image}
                        />
                      </View>
                      <View style={styles.foodNameAndIcons}>
                        <Text>
                        {item && item.productName}
                        </Text>
                        {/* <View style={styles.areaButton} >
                          <Ionicons name="reader-outline" color={'#000'} size={25} />
                          <Ionicons name="chatbubbles-outline" color={'#000'} size={25} />
                        </View> */}
                      </View>
                     
                    </View>
                    
                  </TouchableOpacity>
                  )}
            </ScrollView>
            );
        }
      }

      const [isModalVisible, setIsModalVisible] = React.useState(false);
      const handleModal = () => setIsModalVisible(() => !isModalVisible);
    
      const [isModalVisible2, setIsModalVisible2] = React.useState(false);
      const handleModal2 = () => setIsModalVisible2(() => !isModalVisible2);
    
      const [isModalVisible3, setIsModalVisible3] = React.useState(false);
      const handleModal3 = () => setIsModalVisible3(() => !isModalVisible3);
      
    
      //Filtros Categorias
      const filter0 = () =>{setProductsByCategory(filteredItems.filter((value) => {
        if (value.category == "0") {
          return value; 
        }
        console.log(filteredItems);
      }))};
      
      const filter1 = () =>{setProductsByCategory(filteredItems.filter((value) => {
        if (value.category == "1") {
          return value; 
        }
        console.log(filteredItems);
      }))};
    
      const filter2 = () =>{setProductsByCategory(filteredItems.filter((value) => {
        if (value.category == "2") {
          return value; 
        }
        console.log(filteredItems);
      }))};
      
      const filter3 = () =>{setProductsByCategory(filteredItems.filter((value) => {
        if (value.category == "3") {
          return value; 
        }
        console.log(filteredItems);
      }))};
      
      const filter4 = () =>{setProductsByCategory(filteredItems.filter((value) => {
        if (value.category == "4") {
          return value; 
        }
        console.log(filteredItems);
      }))};
      const filter5 = () =>{setProductsByCategory(filteredItems.filter((value) => {
        if (value.category == "5") {
          return value; 
        }
        console.log(filteredItems);
      }))};
      
      const filterCancel = () =>{
        setProductsByCategory(data);
        setFilteredItems(data);
        setIsLoading(false);
        setIsModalVisible(() => !isModalVisible);
        console.log(filteredItems);
     };
      const filterCancel2 = () =>{
        setProductsByCategory(data);
        setFilteredItems(data);
        setIsLoading(false);
        setIsModalVisible2(() => !isModalVisible2);
        console.log(filteredItems);
     };
         











    return (
        <View style={styles.container}>
             {/*Filtro*/} 
      
      <TouchableOpacity  onPress={handleModal}>
                <View style={{flexDirection: 'row',borderBottomWidth: 0.5,borderBottomColor: '#DADADA',  marginLeft: 10   }}>
                <Text style ={{fontSize : 20}}>Filtros Personalizados</Text>
                <EvilIcons name = "chevron-down" size={28} color="black" style={{ marginLeft: 1 }}/>
                </View>
                
      </TouchableOpacity>
            
            
      <Modal isVisible={isModalVisible}>
            <Modal.Container>
              <Modal.Header title="Filtros:"/>
              <Modal.Body>
                <View style={{flexDirection: 'column', alignItems: 'center' }}>
                <Pressable style={[styles.button, styles.buttonClose]} onPress={(handleModal2) }>
                <View style={{flexDirection: 'row',  marginLeft: 10   }}>
                <Text style ={{fontSize : 15}}>Segurança</Text>
                <EvilIcons name="chevron-down" size={28} color="black" style={{ marginLeft: 1 }}/>
                </View>
                </Pressable>
                </View>
              
                
              </Modal.Body>
              <Modal.Footer>
              <Pressable style={{borderRadius: 20,padding: 10,elevation: 2,marginTop: 15,backgroundColor: "#35bd3b"}} onPress={(handleModal) }>
              <Text style ={ {color: "white"}}>Aplicar</Text>
              </Pressable>
              <Pressable style={{borderRadius: 20,padding: 10,elevation: 2,marginTop: 15,marginLeft:15, backgroundColor: "#bd3535"}} onPress={(filterCancel) }>
              <Text style ={ {color: "white"}}>Cancelar</Text>
              </Pressable>
              </Modal.Footer>
            </Modal.Container>
      </Modal>

      <Modal isVisible={isModalVisible2}>
            <Modal.Container>
              <Modal.Header title="Segurança:"/>
              
              
              <Modal.Body>
              <View>
              <Pressable style={[styles.button, styles.buttonClose]} onPress={(filter0) }>
              <Text style ={ {color: "white"}}>0</Text>
              </Pressable>
              <Pressable style={[styles.button, styles.buttonClose]} onPress={(filter1) }>
              <Text style ={ {color: "white"}}>1</Text>
              </Pressable>
              <Pressable style={[styles.button, styles.buttonClose]} onPress={(filter2) }>
              <Text style ={ {color: "white"}}>2</Text>
              </Pressable>
              <Pressable style={[styles.button, styles.buttonClose]} onPress={(filter3) }>
              <Text style ={ {color: "white"}}>3</Text>
              </Pressable>
              <Pressable style={[styles.button, styles.buttonClose]} onPress={(filter4) }>
              <Text style ={ {color: "white"}}>4</Text>
              </Pressable>
              <Pressable style={[styles.button, styles.buttonClose]} onPress={(filter5) }>
              <Text style ={ {color: "white"}}>5</Text>
              </Pressable>
              </View>
              </Modal.Body>  
              
              <Modal.Footer>
              <Pressable style={{borderRadius: 20,padding: 10,elevation: 2,marginTop: 15,backgroundColor: "#35bd3b"}} onPress={(handleModal2) }>
              <Text style ={ {color: "white"}}>Aplicar</Text>
              </Pressable>
              <Pressable style={{borderRadius: 20,padding: 10,elevation: 2,marginTop: 15,marginLeft:15,backgroundColor: "#bd3535"}} onPress={(filterCancel2) }>
              <Text style ={ {color: "white"}}>Cancelar</Text>
              </Pressable>
              </Modal.Footer>
            </Modal.Container>
      </Modal>

      
      


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
      justifyContent: 'center',
      borderBottomWidth: 0.5,
      borderBottomColor: '#DADADA'
      },
    imageContainer: {
        padding: 4,
    },
    button: {
      borderRadius: 20,
      padding: 10,
      elevation: 2,
      marginTop: 15,

      
    },
    buttonClose: {
      backgroundColor: "#2196F3",
    },
  });