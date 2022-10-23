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
import { SetSafetyCategory } from '../../types/setSafetyCategory';

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
                    key={item.barCode}
                    onPress={() => {
                      props.navigation.navigate(
                        stackRouteNames.ProductPage,
                        { item: item.barCode }
                      );
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
                        <Text style={styles.foodNameAndIcons}>
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
                <View style={styles.customFilter}>
                <Text style ={{fontSize : 20}}>Filtros Personalizados</Text>
                <EvilIcons name = "chevron-down" size={28} color="black" style={{ marginLeft: 1 }}/>
                </View>
                
      </TouchableOpacity>
            
            
      <Modal isVisible={isModalVisible}>
            <Modal.Container>
              <View style={{backgroundColor: '#f0f0f0', borderRadius: 15}}>
                <Text style={{fontSize: 20, left: moderateScale(10), marginTop: verticalScale(10)}}>Filtros</Text>
                <View style={{borderBottomWidth: 2, borderBottomColor: 'grey',}}></View>
                <Modal.Body>
                  <View style={{flexDirection: 'column', alignItems: 'center' }}>
                  <Pressable style={[styles.button, styles.buttonClose]} onPress={(handleModal2) }>
                  <View style={{flexDirection: 'row',  marginLeft: 10   }}>
                  <Text style ={{fontSize : 15, color: "black"}}>Segurança: {buttonSecurity}</Text>
                  <EvilIcons name="chevron-down" size={28} color="black" style={{ marginLeft: 1 }}/>
                  </View>
                  </Pressable>
                  </View>
                
              </Modal.Body>
              <Modal.Footer>
              <Pressable style={{borderRadius: 10,padding: 10,elevation: 2,marginTop: 15,backgroundColor: "#66cc66"}} onPress={(handleModal) }>
              <Text style ={ {color: "black"}}>Aplicar</Text>
              </Pressable>
              <Pressable style={{borderRadius: 10,padding: 10,elevation: 2,marginTop: 15,marginLeft:15, backgroundColor: "#ff3333"}} onPress={(filterCancel) }>
              <Text style ={ {color: "white"}}>Limpar Filtros</Text>
              </Pressable>
              <Pressable style={{borderRadius: 10,padding: 10,elevation: 2,marginTop: 15,marginLeft:15, backgroundColor: "#dcdcdc"}} onPress={(handleModal) }>
              <Text style ={ {color: "black"}}>Voltar</Text>
              </Pressable>
              </Modal.Footer>
              </View>
            </Modal.Container>
      </Modal>

      <Modal isVisible={isModalVisible2}>
            <Modal.Container>
              <View style={{backgroundColor: '#f0f0f0', borderRadius: 15}}>
              <Text style={{fontSize: 20, left: moderateScale(10), marginTop: verticalScale(10)}}>Segurança</Text>
                <View style={{borderBottomWidth: 2, borderBottomColor: 'grey',}}></View>
              
              <Modal.Body>
              <View>
              <Pressable style={[styles.button, styles.buttonClose, styles.buttonSecurity]} onPress={(filter0) }>
              <Ionicons style={styles.icons} name="shield-sharp" color={'red'} size={20}/>
              <Text style ={ {marginLeft: moderateScale(10), color: "black", textAlign: 'center'}}>Nível: 0</Text>
              </Pressable>
              <Pressable style={[styles.button, styles.buttonClose, styles.buttonSecurity]} onPress={(filter1) }>
              <Ionicons style={styles.icons} name="shield-sharp" color={'#FF4500'} size={20}/>
              <Text style ={ {marginLeft: moderateScale(10), color: "black",textAlign: 'center'}}>Nível: 1</Text>
              </Pressable>
              <Pressable style={[styles.button, styles.buttonClose, styles.buttonSecurity]} onPress={(filter2) }>
              <Ionicons style={styles.icons} name="shield-sharp" color={'#FFA500'} size={20}/>
              <Text style ={ {marginLeft: moderateScale(10), color: "black",textAlign: 'center'}}>Nível: 2</Text>
              </Pressable>
              <Pressable style={[styles.button, styles.buttonClose, styles.buttonSecurity]} onPress={(filter3) }>
              <Ionicons style={styles.icons} name="shield-sharp" color={'yellow'} size={20}/>
              <Text style ={ {marginLeft: moderateScale(10), color: "black",textAlign: 'center'}}>Nível: 3</Text>
              </Pressable>
              <Pressable style={[styles.button, styles.buttonClose, styles.buttonSecurity]} onPress={(filter4) }>
              <Ionicons style={styles.icons} name="shield-sharp" color={'#9ACD32'} size={20}/>
              <Text style ={ {marginLeft: moderateScale(10), color: "black",textAlign: 'center'}}>Nível: 4</Text>
              </Pressable>
              <Pressable style={[styles.button, styles.buttonClose, styles.buttonSecurity]} onPress={(filter5) }>
              <Ionicons style={styles.icons} name="shield-sharp" color={'#9ACD32'} size={20}/>
              <Text style ={ {marginLeft: moderateScale(10), color: "black",textAlign: 'center'}}>Nível: 5</Text>
              </Pressable>
              <Pressable style={[styles.button, styles.buttonClose, styles.buttonSecurity]} onPress={(filter6) }>
              <Ionicons style={styles.icons} name="shield-checkmark-sharp" color={'#008000'} size={20}/>
              <Text style ={ {marginLeft: moderateScale(10), color: "black",textAlign: 'center'}}>Nível: Star Gold</Text>
              </Pressable>
              </View>
              </Modal.Body>  
              
              <Modal.Footer>
              <Pressable style={{borderRadius: 20,padding: 10,elevation: 2,marginTop: 15,marginLeft:15,backgroundColor: "#ff3333"}} onPress={(filterCancel2) }>
              <Text style ={ {color: "white"}}>Limpar filtro</Text>
              </Pressable>
              <Pressable style={{borderRadius: 20,padding: 10,elevation: 2,marginTop: 15,marginLeft:15,backgroundColor: "#dcdcdc"}} onPress={(handleModal2) }>
              <Text style ={ {color: "black"}}>Voltar</Text>
              </Pressable>
              </Modal.Footer>
              </View>
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
      backgroundColor: '#f0f0f0',
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
      textTransform: 'capitalize'
      },
    imageContainer: {
        padding: 4,
    },
    button: {
      borderRadius: 10,
      padding: 10,
      elevation: 2,
      marginTop: 15,
    },
    buttonClose: {
      backgroundColor: "#bababa",
    },
    buttonSecurity: {
      marginHorizontal: moderateScale(75),
      flexDirection: 'row'
    },
    icons: {
      marginLeft: moderateScale(5)
    },
    customFilter: {
      marginVertical: 10,
      left: moderateScale(10),
      flexDirection: 'row',
      borderRadius: 5,
      paddingHorizontal: scale(7),
      paddingVertical: scale(3),
      marginLef: moderateScale(10),
      marginRight: moderateScale(145),
      backgroundColor: 'white',
    },
  });