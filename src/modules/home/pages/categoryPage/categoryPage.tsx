import { Ionicons } from '@expo/vector-icons';
import { RouteProp, useRoute } from '@react-navigation/native';
import React, { useEffect, useState } from 'react'
import { View, Text, TouchableOpacity, StyleSheet, Image, ActivityIndicator, ScrollView, Dimensions,  Pressable } from 'react-native'
import { ShowAlert } from '../../../../shared/pages/showAlert';
import categoriesDB from '../../../../../categoriesDB';
import mockDataBase from '../../../../../mockDataBase';
import { moderateScale, scale, verticalScale } from '../../../../shared/styles/scaling_units';
import { getProduct, getProductsByCategory } from '../../services/product.service';
import { stackRouteNames } from '../../types/stackRouteNames';
import { EvilIcons, Entypo } from '@expo/vector-icons';
import { Modal } from "../../../../shared/components/Modal/Modal";
import { ItemName } from '../../components/ItemDescription/ItemName/itemName';
import { withRepeat } from 'react-native-reanimated';

var contadorCategory = 0;
var filtroCategory = "";
var contadorSecurity = 0;
var filtroSecurity = "";
var buttonSecurity = "Nenhum";




type ParamList = {
    CategoryPage: {
        productCategory: string,
    }
  };
  const { width, height } = Dimensions.get('window');
  export default function CategoryPage( props ) {
    const route = useRoute<RouteProp<ParamList, stackRouteNames.CategoryPage>>();
    let categoryImageURL = categoriesDB.find(item => item.productCategory === route.params.productCategory).urlImage;
    let [fullItemLoaded, setFullItemLoaded] = useState(false);
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
          } catch (error) {
            console.log(error);
            setIsError(true);
          } finally {
            setIsLoading(false);
          }
        }
  
        fetchData();
      }, [setProductsByCategory]);

    const getContent = () => {  
        if (fullItemLoaded) return <View></View>  
        if (isLoading) {      
          return <ActivityIndicator size="large" style={styles.activityIndicator}/>;
        }
        if (isError || !productsByCategory)  {
            ShowAlert("Não foi possível encontrar produtos para esta categoria");
        } else {
            return (
                <ScrollView style={styles.container}>
                {productsByCategory.map(item => 
                  <TouchableOpacity
                    onPress={async () => {
                      setIsLoading(true);
                      try {
                        const fullItem = await getProduct(item.barCode);
                        props.navigation.navigate(
                          stackRouteNames.ProductPage,
                          { item: fullItem }
                        );
                        setFullItemLoaded(true);
                        setTimeout(() => setFullItemLoaded(false), 500)
                      } catch (e) {
                        console.log(e);
                        setIsError(true);
                        setFullItemLoaded(false);
                      } finally {
                        setIsLoading(false);
                      }
                    }
                    }
                    style={styles.actionButton}>
                      
                    <View style={styles.areaButton}>
                      <View style={styles.imageContainer}>
                        <Image
                        source= {{uri: "https://semgluten.cin.ufpe.br/media/picture/" + item.barCode + ".png"}} 
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
      const handleModal = () => {
        setIsModalVisible(() => !isModalVisible);
        filtrando();
      };
      const filterCancel = () =>{
        contadorSecurity = 0;
        filtroSecurity = "";
        buttonSecurity = "Nenhum";
        filtrando();
     };
    
      
     
     
     const [isModalVisible2, setIsModalVisible2] = React.useState(false);
      const handleModal2 = () =>{
        setIsModalVisible2(() => !isModalVisible2);
       
      };
      const filterCancel2 = () =>{
        contadorSecurity = 0;
        filtroSecurity = "";
        buttonSecurity = "Nenhum";
        setIsModalVisible2(() => !isModalVisible2);
     };

      
    



      //Filtros Categorias
      const filter0 = () =>{
        if(contadorSecurity === 0){
          contadorSecurity = 1;
        }
        filtroSecurity = "1"
        buttonSecurity = "0"
        setIsModalVisible2(() => !isModalVisible2);
      };
    
         const filter1 = () =>{
          if(contadorSecurity === 0){
            contadorSecurity = 1;
        }
        filtroSecurity = "2"
        buttonSecurity = "1"
        setIsModalVisible2(() => !isModalVisible2);
      };
    
         const filter2 = () =>{
          if(contadorSecurity === 0){
            contadorSecurity = 1;
        }
        filtroSecurity = "3"
        buttonSecurity = "2"
        setIsModalVisible2(() => !isModalVisible2);
      };
    
         const filter3 = () =>{
          if(contadorSecurity === 0){
            contadorSecurity = 1;
        }
        filtroSecurity = "4"
        buttonSecurity = "3"
        setIsModalVisible2(() => !isModalVisible2);
      };
    
         const filter4 = () =>{
          if(contadorSecurity === 0){
            contadorSecurity = 1;
        }
        filtroSecurity = "5"
        buttonSecurity = "4"
        setIsModalVisible2(() => !isModalVisible2);
      };
    
         const filter5 = () =>{
          if(contadorSecurity === 0){
            contadorSecurity = 1;
          }
          filtroSecurity = "6"
          buttonSecurity = "5"
          setIsModalVisible2(() => !isModalVisible2);
      };
          const filter6 = () =>{
        if(contadorSecurity === 0){
          contadorSecurity = 1;
        }
        filtroSecurity = "7"
        buttonSecurity = "Star Gold"
        setIsModalVisible2(() => !isModalVisible2);
    };  


     const filtrando = ()=>{
    if(contadorCategory === 0 && contadorSecurity === 1){   //filtro seguranca
      {setProductsByCategory(filteredItems.filter((value) => {   //Filtra seguranca
        if (value.idSafety == filtroSecurity) {
          return value; 
        }
        //console.log(filteredData);
      }))}
    }
    if(contadorCategory === 0 && contadorSecurity === 0){
      setProductsByCategory(data);
      setFilteredItems(data);
      setIsLoading(false);
      setIsModalVisible(() => !isModalVisible);
    }
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
                <Text style ={{fontSize : 15, color: "white"}}>Segurança: {buttonSecurity}</Text>
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
              <Text style ={ {color: "white"}}>Limpar Filtros</Text>
              </Pressable>
              <Pressable style={{borderRadius: 20,padding: 10,elevation: 2,marginTop: 15,marginLeft:15, backgroundColor: "#bd3535"}} onPress={(handleModal) }>
              <Text style ={ {color: "white"}}>Voltar</Text>
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
              <Text style ={ {color: "white",textAlign: 'center'}}>0</Text>
              </Pressable>
              <Pressable style={[styles.button, styles.buttonClose]} onPress={(filter1) }>
              <Text style ={ {color: "white",textAlign: 'center'}}>1</Text>
              </Pressable>
              <Pressable style={[styles.button, styles.buttonClose]} onPress={(filter2) }>
              <Text style ={ {color: "white",textAlign: 'center'}}>2</Text>
              </Pressable>
              <Pressable style={[styles.button, styles.buttonClose]} onPress={(filter3) }>
              <Text style ={ {color: "white",textAlign: 'center'}}>3</Text>
              </Pressable>
              <Pressable style={[styles.button, styles.buttonClose]} onPress={(filter4) }>
              <Text style ={ {color: "white",textAlign: 'center'}}>4</Text>
              </Pressable>
              <Pressable style={[styles.button, styles.buttonClose]} onPress={(filter5) }>
              <Text style ={ {color: "white",textAlign: 'center'}}>5</Text>
              </Pressable>
              <Pressable style={[styles.button, styles.buttonClose]} onPress={(filter6) }>
              <Text style ={ {color: "white",textAlign: 'center'}}>Star Gold</Text>
              </Pressable>
              </View>
              </Modal.Body>  
              
              <Modal.Footer>
              <Pressable style={{borderRadius: 20,padding: 10,elevation: 2,marginTop: 15,marginLeft:15,backgroundColor: "#bd3535"}} onPress={(filterCancel2) }>
              <Text style ={ {color: "white"}}>Limpar filtro</Text>
              </Pressable>
              <Pressable style={{borderRadius: 20,padding: 10,elevation: 2,marginTop: 15,marginLeft:15,backgroundColor: "#bd3535"}} onPress={(handleModal2) }>
              <Text style ={ {color: "white"}}>Voltar</Text>
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