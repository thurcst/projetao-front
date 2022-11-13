import { Ionicons } from "@expo/vector-icons";
import React, { useEffect, useState } from "react";
import { Text, View, Button, StyleSheet, Image, TouchableOpacity, ActivityIndicator, Dimensions, Pressable } from "react-native";
import { ShowAlert } from "../../../../shared/pages/showAlert";
import { ScrollView } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";
import { moderateScale, scale, verticalScale } from "../../../../shared/styles/scaling_units";
import { MainItems } from "../../components/MainItems/mainItems";
import MainSection from "../../components/MainSection/mainSection";
import SearchBar from "../../components/SearchBar/searchbar";
import { getProductsByName } from "../../services/product.service";
import { getProductsByCategory } from "../../services/product.service";
import { stackRouteNames } from "../../types/stackRouteNames";
import { EvilIcons, Entypo } from '@expo/vector-icons';
import { Modal } from "../../../../shared/components/Modal/Modal";
import eventsInstance from "../../../../shared/services/analytics";



const { width, height } = Dimensions.get('window');

var contadorCategory = 0;
var contadorSecurity = 0;
var filtroCategory = "";
var filtroSecurity = "";
var buttonCategory = "Nenhum";
var buttonSecurity = "Nenhum";


export function SearchBarResultsPage(props) {
    const { navigation, route } = props;
  const { searchedPhrase } = route.params;
  const [data, setData] = useState([]);
  let [isLoading, setIsLoading] = useState(true);
  const [filteredData, setFilteredData] = useState([]);
  let [isError, setIsError] = useState(false);
  const [filteredData2, setFilteredData2] = useState([]);


  useEffect(() => {
    fetchData();
  }, []);
  


  const fetchData = async () => {
    setIsLoading(true);
    try {
      const response = await getProductsByName(searchedPhrase);
      setData(response);
      setFilteredData(response);
      setIsLoading(false);
      
    } catch (error) {
      console.log(error);
      setIsError(true);
      setIsLoading(false);
    }
    setIsLoading(false);
    // console.log(filteredData);
  };

  const getContent = () => {    
    
    if (isLoading) {      
      return <ActivityIndicator size="large" style={styles.activityIndicator}/>;
    }    
    if (isError || !filteredData) {
        ShowAlert("O produto não foi encontrado");
    } else {
        return (
            <ScrollView>
            {
                filteredData.map((item, index) => {
                    return (
                        
                            
                            <TouchableOpacity onPress={() => 
                                {
                                  eventsInstance.sendEvent("Tocou no produto " + item.productName + " da página de resultados de busca");
                                  props.navigation.navigate(stackRouteNames.ProductPage, {item: item.barCode})
                                }
                              } 
                                style={styles.actionButton}>
                                
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
                                </View>
                                
                                </View>
                                
                            </TouchableOpacity>
                            
                        
                    )
                })
            }
          </ScrollView>
        );
    }
  }

  

  const [isModalVisible, setIsModalVisible] = React.useState(false);
  const handleModal = () => {
    filtrando();
    setIsModalVisible(() => !isModalVisible);
    
  };
  const filterCancel = () =>{
    contadorCategory = 0;
    contadorSecurity = 0;
    filtroCategory = "";
    filtroSecurity = "";
    buttonCategory = "Nenhum";
    buttonSecurity = "Nenhum";
    filtrando(); 
 };

  const [isModalVisible2, setIsModalVisible2] = React.useState(false);
  const handleModal2 = () => {
    setIsModalVisible2(() => !isModalVisible2);
  };
  const filterCancel2 = () =>{
    contadorCategory = 0;
    filtroCategory = "";
    buttonCategory = "Nenhum";
    // console.log(filteredData)
    setIsModalVisible2(() => !isModalVisible2);
  };

  const [isModalVisible3, setIsModalVisible3] = React.useState(false);
  const handleModal3 = () => {
    setIsModalVisible3(() => !isModalVisible3); 
  };
  const filterCancel3 = () =>{
  contadorSecurity = 0;
  filtroSecurity = "";
  buttonSecurity = "Nenhum";
  setIsModalVisible3(() => !isModalVisible3);
};

  /////////////////  FILTROS  ////////////////////////////////


  const filterPaes = () =>{
    if(contadorCategory === 0 ){
      contadorCategory = 1;
    }
    filtroCategory = "paes"
    buttonCategory = "Pães e massas";
    setIsModalVisible2(() => !isModalVisible2);
    

  };
  const filterGraos = () =>{
    if(contadorCategory === 0 ){
      contadorCategory = 1;
    }
    filtroCategory = "graos"
    buttonCategory = "Grãos";
    setIsModalVisible2(() => !isModalVisible2);
    

  };
  const filterDoces = () =>{
    if(contadorCategory === 0 ){
      contadorCategory = 1;
    }
    filtroCategory = "doces"
    buttonCategory = "Doces";
    setIsModalVisible2(() => !isModalVisible2);
    

  };
  const filterBiscoito = () =>{
    if(contadorCategory === 0 ){
      contadorCategory = 1;
    }
    filtroCategory = "biscoitos e salgadinhos"
    buttonCategory = "Biscoitos e Salgadinhos";
    setIsModalVisible2(() => !isModalVisible2);
    

  };
  const filterCarnes = () =>{
    if(contadorCategory === 0 ){
      contadorCategory = 1;
    }
    filtroCategory = "carnes, aves e peixes"
    buttonCategory = "Carnes, aves e peixes";
    setIsModalVisible2(() => !isModalVisible2);
    

  };
  const filterMolhos = () =>{
    if(contadorCategory === 0 ){
      contadorCategory = 1;
    }
    filtroCategory = "molhos e condimentos"
    buttonCategory = "Molhos e condimentos";
    setIsModalVisible2(() => !isModalVisible2);
    
  };
    

     
    
    
    const filter0 = () =>{
    if(contadorSecurity === 0){
      contadorSecurity = 1;
    }
    filtroSecurity = "1"
    buttonSecurity = "0";
    setIsModalVisible3(() => !isModalVisible3);
  };

     const filter1 = () =>{
      if(contadorSecurity === 0){
        contadorSecurity = 1;
    }
    filtroSecurity = "2"
    buttonSecurity = "1";
    setIsModalVisible3(() => !isModalVisible3);
  };

     const filter2 = () =>{
      if(contadorSecurity === 0){
        contadorSecurity = 1;
    }
    filtroSecurity = "3"
    buttonSecurity = "2";
    setIsModalVisible3(() => !isModalVisible3);
  };

     const filter3 = () =>{
      if(contadorSecurity === 0){
        contadorSecurity = 1;
    }
    filtroSecurity = "4"
    buttonSecurity = "3";
    setIsModalVisible3(() => !isModalVisible3);
  };

     const filter4 = () =>{
      if(contadorSecurity === 0){
        contadorSecurity = 1;
    }
    filtroSecurity = "5"
    buttonSecurity = "4";
    setIsModalVisible3(() => !isModalVisible3);
  };

     const filter5 = () =>{
      if(contadorSecurity === 0){
        contadorSecurity = 1;
      }
      filtroSecurity = "6"
      buttonSecurity = "5";
      setIsModalVisible3(() => !isModalVisible3);
  };
  const filter6 = () =>{
    if(contadorSecurity === 0){
      contadorSecurity = 1;
    }
    filtroSecurity = "7"
    buttonSecurity = "Star Gold";
    setIsModalVisible3(() => !isModalVisible3);
};

  


// Remover acentos
function removerAcentos(s) {
  var map = { "â": "a", "Â": "A", "à": "a", "À": "A", "á": "a", "Á": "A", "ã": "a", "Ã": "A", "ê": "e", "Ê": "E", "è": "e", "È": "E", "é": "e", "É": "E", "î": "i", "Î": "I", "ì": "i", "Ì": "I", "í": "i", "Í": "I", "õ": "o", "Õ": "O", "ô": "o", "Ô": "O", "ò": "o", "Ò": "O", "ó": "o", "Ó": "O", "ü": "u", "Ü": "U", "û": "u", "Û": "U", "ú": "u", "Ú": "U", "ù": "u", "Ù": "U", "ç": "c", "Ç": "C" };

  return s.replace(/[\W\[\] ]/g, function (a) { return map[a] || a }).toLowerCase()
};


// Funcao que filtra
const filtrando = ()=>{
  
  if(contadorCategory === 1 && contadorSecurity === 1){   //filtro categoria + seguranca
    {setFilteredData(data.filter((value) => {  
    if ((removerAcentos(value.productCategory) == filtroCategory) && (value.idSafety == filtroSecurity)) {
      return value; 
    }
  }))}
}
if(contadorCategory === 1 && contadorSecurity === 0){    //filtro categoria
  {setFilteredData(data.filter((value) => {   //filtra categoria
    if (removerAcentos(value.productCategory) == filtroCategory) {
      return value; 
    }
    //console.log(filteredData);
  }))}
}
if(contadorCategory === 0 && contadorSecurity === 1){   //filtro seguranca
  {setFilteredData(data.filter((value) => {   //Filtra seguranca
    if (value.idSafety == filtroSecurity) {
      return value; 
    }
    //console.log(filteredData);
  }))}
}
if(contadorCategory === 0 && contadorSecurity === 0){
  setData(data);
  setFilteredData(data);
  setIsLoading(false);
}
};

///////////////////////////////////////////////////////////////////////////////
  
    return (
    <View style={styles.container}>
             {/*Filtro*/} 
      <TouchableOpacity  onPress={() => {
        eventsInstance.sendEvent("Tocou no botão de 'Filtros Personalizados' da página de resultados de busca");
        handleModal();}}>
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
                      <Pressable style={[styles.button, styles.buttonClose]} onPress={() => {eventsInstance.sendEvent("Tocou no filtro de categorias da página de resultados da busca"); handleModal2();}}>
                        <View style={{flexDirection: 'row',  marginLeft: 10   }}>
                          <Text style ={{fontSize : 15, color: "black"}}>Categorias: {buttonCategory}</Text>
                          <EvilIcons name="chevron-down" size={28} color="black" style={{ marginLeft: 1 }}/>
                        </View>
                      </Pressable>
                    </View>
                    <View style={{flexDirection: 'column', alignItems: 'center' }}>
                      <Pressable style={[styles.button, styles.buttonClose]} onPress={() => {eventsInstance.sendEvent("Tocou no filtro de segurança da página de resultados da busca"); handleModal3();}}>
                        <View style={{flexDirection: 'row',  marginLeft: 10   }}>
                          <Text style ={{fontSize : 15, color: "black"}}>Segurança: {buttonSecurity}</Text>
                          <EvilIcons name="chevron-down" size={28} color="black" style={{ marginLeft: 1 }}/>
                        </View>
                      </Pressable>
                    </View>
                  </Modal.Body>
                <Modal.Footer>
                    <Pressable style={{borderRadius: 10,padding: 10,elevation: 2,marginTop: 15,backgroundColor: "#66cc66"}} onPress={() => {eventsInstance.sendEvent("Tocou no botão aplicar filtro da página de resultados da busca"); handleModal();}}>
                      <Text style ={ {color: "black"}}>Aplicar</Text>
                    </Pressable>
                    <Pressable style={{borderRadius: 10,padding: 10,elevation: 2,marginTop: 15,marginLeft:15, backgroundColor: "#ff3333"}} onPress={() => {eventsInstance.sendEvent("Tocou no botão limpar filtro do pop-up 1 da página de resultados da busca"); filterCancel();}}>
                      <Text style ={ {color: "white"}}>Limpar Filtros</Text>
                    </Pressable>
                    <Pressable style={{borderRadius: 10,padding: 10,elevation: 2,marginTop: 15,marginLeft:15, backgroundColor: "#dcdcdc"}} onPress={() => {eventsInstance.sendEvent("Tocou no botão voltar do filtro do pop-up 1 da página de resultados da busca"); handleModal();}}>
                      <Text style ={ {color: "black"}}>Voltar</Text>
                    </Pressable>
                </Modal.Footer>
              </View>
            </Modal.Container>
      </Modal>

      <Modal isVisible={isModalVisible2}>
            <Modal.Container>
              <View style={{backgroundColor: '#f0f0f0', borderRadius: 15}}>
                <Text style={{fontSize: 20, left: moderateScale(10), marginTop: verticalScale(10)}}>Categorias</Text>
                <View style={{borderBottomWidth: 2, borderBottomColor: 'grey',}}></View>
                
                  <Modal.Body>
                    <View>
                      <Pressable style={[styles.button, styles.buttonClose, styles.buttonCategories]} onPress={() => {eventsInstance.sendEvent("Tocou para filtrar pela categoria 'pães e massas' na página de resultados da busca"); filterPaes();}}>
                        <Text style ={ {color: "black",textAlign: 'center'}}>Pães e massas</Text>
                      </Pressable>
                      <Pressable style={[styles.button, styles.buttonClose, styles.buttonCategories]} onPress={() => {eventsInstance.sendEvent("Tocou para filtrar pela categoria 'grãos' na página de resultados da busca"); filterGraos();}}>
                        <Text style ={ {color: "black",textAlign: 'center'}}>Grãos</Text>
                      </Pressable>
                      <Pressable style={[styles.button, styles.buttonClose, styles.buttonCategories]} onPress={() => {eventsInstance.sendEvent("Tocou para filtrar pela categoria 'doces' na página de resultados da busca"); filterDoces();}}>
                        <Text style ={ {color: "black",textAlign: 'center'}}>Doces</Text>
                      </Pressable>
                      <Pressable style={[styles.button, styles.buttonClose, styles.buttonCategories]} onPress={() => {eventsInstance.sendEvent("Tocou para filtrar pela categoria 'biscoitos e salgadinhos' na página de resultados da busca"); filterBiscoito();}}>
                        <Text style ={ {color: "black",textAlign: 'center'}}>Biscoitos e salgadinhos</Text>
                      </Pressable>
                      {/*<Pressable style={[styles.button, styles.buttonClose]} onPress={(filterCarnes) }>
                      <Text style ={ {color: "black",textAlign: 'center'}}>Carnes, aves e peixes</Text>
                      </Pressable> */}
                      <Pressable style={[styles.button, styles.buttonClose, styles.buttonCategories]} onPress={() => {eventsInstance.sendEvent("Tocou para filtrar pela categoria 'molhos e condimentos' na página de resultados da busca"); filterMolhos();}}>
                        <Text style ={ {color: "black",textAlign: 'center'}}>Molhos e condimentos</Text>
                      </Pressable>
                    </View>
                  </Modal.Body>  
                </View>
                <Modal.Footer>
                  <Pressable style={{borderRadius: 20,padding: 10,elevation: 2,marginTop: 15,marginLeft:15,backgroundColor: "#ff3333"}} onPress={() => {eventsInstance.sendEvent("Tocou para limpar filtro no pop-up de categoria na página de resultados da busca"); filterCancel2()}}>
                    <Text style ={ {color: "white"}}>Limpar filtro</Text>
                  </Pressable>
                  <Pressable style={{borderRadius: 20,padding: 10,elevation: 2,marginTop: 15,marginLeft:15,backgroundColor: "#dcdcdc"}} onPress={() => {eventsInstance.sendEvent("Tocou para voltar no pop-up de categoria na página de resultados da busca"); handleModal2();}}>
                    <Text style ={ {color: "black"}}>Voltar</Text>
                  </Pressable>
                </Modal.Footer>
            </Modal.Container>
            </Modal>
              <Modal isVisible={isModalVisible3}>
                <Modal.Container>
                   
                <View style={{backgroundColor: '#f0f0f0', borderRadius: 15}}>
                <Text style={{fontSize: 20, left: moderateScale(10), marginTop: verticalScale(10)}}>Segurança</Text>
                  <View style={{borderBottomWidth: 2, borderBottomColor: 'grey',}}></View>
              
                  <Modal.Body>
                    <View>
                      <Pressable style={[styles.button, styles.buttonClose, styles.buttonSecurity]} onPress={() => {eventsInstance.sendEvent("Tocou para filtrar pelo nível de segurança 0 na página de categorias"); filter0()}}>
                        <Ionicons style={styles.icons} name="shield-sharp" color={'red'} size={20}/>
                        <Text style ={ {marginLeft: moderateScale(10), color: "black", textAlign: 'center'}}>Nível: 0</Text>
                      </Pressable>
                      <Pressable style={[styles.button, styles.buttonClose, styles.buttonSecurity]} onPress={() => {eventsInstance.sendEvent("Tocou para filtrar pelo nível de segurança 1 na página de categorias"); filter1()}}>
                        <Ionicons style={styles.icons} name="shield-sharp" color={'#FF4500'} size={20}/>
                        <Text style ={ {marginLeft: moderateScale(10), color: "black",textAlign: 'center'}}>Nível: 1</Text>
                      </Pressable>
                      <Pressable style={[styles.button, styles.buttonClose, styles.buttonSecurity]} onPress={() => {eventsInstance.sendEvent("Tocou para filtrar pelo nível de segurança 2 na página de categorias"); filter2()}}>
                        <Ionicons style={styles.icons} name="shield-sharp" color={'#FFA500'} size={20}/>
                        <Text style ={ {marginLeft: moderateScale(10), color: "black",textAlign: 'center'}}>Nível: 2</Text>
                      </Pressable>
                      <Pressable style={[styles.button, styles.buttonClose, styles.buttonSecurity]} onPress={() => {eventsInstance.sendEvent("Tocou para filtrar pelo nível de segurança 3 na página de categorias"); filter3()}}>
                        <Ionicons style={styles.icons} name="shield-sharp" color={'yellow'} size={20}/>
                        <Text style ={ {marginLeft: moderateScale(10), color: "black",textAlign: 'center'}}>Nível: 3</Text>
                      </Pressable>
                      <Pressable style={[styles.button, styles.buttonClose, styles.buttonSecurity]} onPress={() => {eventsInstance.sendEvent("Tocou para filtrar pelo nível de segurança 4 na página de categorias"); filter4()}}>
                        <Ionicons style={styles.icons} name="shield-sharp" color={'#9ACD32'} size={20}/>
                        <Text style ={ {marginLeft: moderateScale(10), color: "black",textAlign: 'center'}}>Nível: 4</Text>
                      </Pressable>
                      <Pressable style={[styles.button, styles.buttonClose, styles.buttonSecurity]} onPress={() => {eventsInstance.sendEvent("Tocou para filtrar pelo nível de segurança 5 na página de categorias"); filter5()}}>
                        <Ionicons style={styles.icons} name="shield-sharp" color={'#9ACD32'} size={20}/>
                        <Text style ={ {marginLeft: moderateScale(10), color: "black",textAlign: 'center'}}>Nível: 5</Text>
                      </Pressable>
                      <Pressable style={[styles.button, styles.buttonClose, styles.buttonSecurity]} onPress={() => {eventsInstance.sendEvent("Tocou para filtrar pelo nível de segurança Star Gold na página de categorias"); filter6()}}>
                        <Ionicons style={styles.icons} name="shield-checkmark-sharp" color={'#008000'} size={20}/>
                        <Text style ={ {marginLeft: moderateScale(10), color: "black",textAlign: 'center'}}>Nível: Star Gold</Text>
                      </Pressable>
                    </View>
                  </Modal.Body>  
                  
                  <Modal.Footer>
                    <Pressable style={{borderRadius: 20,padding: 10,elevation: 2,marginTop: 15,marginLeft:15,backgroundColor: "#ff3333"}} onPress={() => {eventsInstance.sendEvent("Tocou no botão de Limpar filtro do pop-up 2 da página de categorias"); filterCancel2()}}>
                      <Text style ={ {color: "white"}}>Limpar filtro</Text>
                    </Pressable>
                    <Pressable style={{borderRadius: 20,padding: 10,elevation: 2,marginTop: 15,marginLeft:15,backgroundColor: "#dcdcdc"}} onPress={() => {eventsInstance.sendEvent("Tocou no botão de voltar do filtro do pop-up 2 da página de categorias"); handleModal2()}}>
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
    buttonCategories: {
      marginHorizontal: moderateScale(50),
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