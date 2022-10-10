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



const { width, height } = Dimensions.get('window');

export function SearchBarResultsPage(props) {
    const { navigation, route } = props;
  const { searchedPhrase } = route.params;
  const [data, setData] = useState([]);
  let [isLoading, setIsLoading] = useState(true);
  const [filteredData, setFilteredData] = useState([]);
  let [isError, setIsError] = useState(false);

  var contadorCategory = 0;
  var contadorSecurity = 0;
  var filtroCategory = "";
  var filtroSecurity = "";


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
    console.log(filteredData);
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
                    )
                })
            }
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
  const filterPaes = () =>{setFilteredData(data.filter((value) => {
    if (removerAcentos(value.productCategory) == "paes") {
      return value; 
    }
    console.log(filteredData);
  }))};
  
  const filterGraos = () =>{setFilteredData(data.filter((value) => {
    if (removerAcentos(value.productCategory) == "graos") {
      return value; 
    }
    console.log(filteredData);
  }))};

  const filterDoces = () =>{setFilteredData(data.filter((value) => {
    if (removerAcentos(value.productCategory) == "doces") {
      return value; 
    }
    console.log(filteredData);
  }))};
  
  const filterBiscoito = () =>{setFilteredData(data.filter((value) => {
    if (removerAcentos(value.productCategory) == "biscoitos e salgadinhos") {
      return value; 
    }
    console.log(filteredData);
  }))};
  
  const filterCarnes = () =>{setFilteredData(data.filter((value) => {
    if (removerAcentos(value.productCategory) == "carnes, aves e peixes") {
      return value; 
    }
    console.log(filteredData);
  }))};
  const filterMolhos = () =>{setFilteredData(data.filter((value) => {
    if (removerAcentos(value.productCategory) == "molhos e condimentos") {
      return value; 
    }
    console.log(filteredData);
  }))};
  



  /////////////////////////////////////////////////
  /*function filtrando(filter1,filter2){

  };


  const filterPaes = () =>{
    if(contadorCategory == 0){
      contadorCategory++;
    }
    filtroCategory = "paes"
    function filtrando(filtroCategory,"")
  };
  const filterGraos = () =>{
    if(contadorCategory == 0){
      contadorCategory++;
    }
    filtroCategory = "graos"

  };
  const filterDoces = () =>{
    if(contadorCategory == 0){
      contadorCategory++;
    }
    filtroCategory = "doces"

  };
  const filterBiscoito = () =>{
    if(contadorCategory == 0){
      contadorCategory++;
    }
    filtroCategory = "biscoitos e salgadinhos"

  };
  const filterCarnes = () =>{
    if(contadorCategory == 0){
      contadorCategory++;
    }
    filtroCategory = "carnes, aves e peixes"

  };
  const filterMolhos = () =>{
    if(contadorCategory == 0){
      contadorCategory++;
    }
    filtroCategory = "molhos e condimentos"

  };*/


  const filterCancel = () =>{
      setData(data);
      setFilteredData(data);
      setIsLoading(false);
      setIsModalVisible(() => !isModalVisible);
      console.log(filteredData);
   };
  const filterCancel2 = () =>{
    setData(data);
    setFilteredData(data);
    setIsLoading(false);
    setIsModalVisible2(() => !isModalVisible2);
    console.log(filteredData);
 };
 const filterCancel3 = () =>{
  setData(data);
  setFilteredData(data);
  setIsLoading(false);
  setIsModalVisible3(() => !isModalVisible3);
  console.log(filteredData);
};
  
function removerAcentos(s) {
  var map = { "â": "a", "Â": "A", "à": "a", "À": "A", "á": "a", "Á": "A", "ã": "a", "Ã": "A", "ê": "e", "Ê": "E", "è": "e", "È": "E", "é": "e", "É": "E", "î": "i", "Î": "I", "ì": "i", "Ì": "I", "í": "i", "Í": "I", "õ": "o", "Õ": "O", "ô": "o", "Ô": "O", "ò": "o", "Ò": "O", "ó": "o", "Ó": "O", "ü": "u", "Ü": "U", "û": "u", "Û": "U", "ú": "u", "Ú": "U", "ù": "u", "Ù": "U", "ç": "c", "Ç": "C" };

  return s.replace(/[\W\[\] ]/g, function (a) { return map[a] || a }).toLowerCase()
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
                <Text style ={{fontSize : 15}}>Categorias</Text>
                <EvilIcons name="chevron-down" size={28} color="black" style={{ marginLeft: 1 }}/>
                </View>
                </Pressable>
                {/* <Pressable style={[styles.button, styles.buttonClose]} onPress={(handleModal3) }>
                <View style={{flexDirection: 'row',  marginLeft: 10   }}>
                <Text style ={{fontSize : 15}}>Segurança</Text>
                <EvilIcons name="chevron-down" size={28} color="black" style={{ marginLeft: 1 }}/>
                </View>
                </Pressable> */}
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
              <Modal.Header title="Categorias:"/>
              
              
              <Modal.Body>
              <View>
              <Pressable style={[styles.button, styles.buttonClose]} onPress={(filterPaes) }>
              <Text style ={ {color: "white"}}>Pães e massas</Text>
              </Pressable>
              <Pressable style={[styles.button, styles.buttonClose]} onPress={(filterGraos) }>
              <Text style ={ {color: "white"}}>Grãos</Text>
              </Pressable>
              <Pressable style={[styles.button, styles.buttonClose]} onPress={(filterDoces) }>
              <Text style ={ {color: "white"}}>Doces</Text>
              </Pressable>
              <Pressable style={[styles.button, styles.buttonClose]} onPress={(filterBiscoito) }>
              <Text style ={ {color: "white"}}>Biscoitos e salgadinhos</Text>
              </Pressable>
              <Pressable style={[styles.button, styles.buttonClose]} onPress={(filterCarnes) }>
              <Text style ={ {color: "white"}}>Carnes, aves e peixes</Text>
              </Pressable>
              <Pressable style={[styles.button, styles.buttonClose]} onPress={(filterMolhos) }>
              <Text style ={ {color: "white"}}>Molhos e condimentos</Text>
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

      <Modal isVisible={isModalVisible3}>
            <Modal.Container>
              <Modal.Header title="Segurança:"/>
              
              <Modal.Body>
              
              </Modal.Body>  
              
              <Modal.Footer>
              <Pressable style={{borderRadius: 20,padding: 10,elevation: 2,marginTop: 15,backgroundColor: "#bd3535"}} onPress={(filterCancel3) }>
              <Text style ={ {color: "white"}}>Cancelar</Text>
              </Pressable>
              </Modal.Footer>
            </Modal.Container>
      </Modal>
      

      
      
      
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
        justifyContent: 'center',
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

