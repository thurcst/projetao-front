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
    console.log(filteredData)
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
                <Text style ={{fontSize : 15, color: "white"}}>Categorias: {buttonCategory}</Text>
                <EvilIcons name="chevron-down" size={28} color="black" style={{ marginLeft: 1 }}/>
                </View>
                </Pressable>
                <Pressable style={[styles.button, styles.buttonClose]} onPress={(handleModal3) }>
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
              <Text style ={ {color: "white"}}>Limpar filtros</Text>
              </Pressable>
              <Pressable style={{borderRadius: 20,padding: 10,elevation: 2,marginTop: 15,marginLeft:15, backgroundColor: "#bd3535"}} onPress={(handleModal) }>
              <Text style ={ {color: "white"}}>Voltar</Text>
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
              <Text style ={ {color: "white",textAlign: 'center'}}>Pães e massas</Text>
              </Pressable>
              <Pressable style={[styles.button, styles.buttonClose]} onPress={(filterGraos) }>
              <Text style ={ {color: "white",textAlign: 'center'}}>Grãos</Text>
              </Pressable>
              <Pressable style={[styles.button, styles.buttonClose]} onPress={(filterDoces) }>
              <Text style ={ {color: "white",textAlign: 'center'}}>Doces</Text>
              </Pressable>
              <Pressable style={[styles.button, styles.buttonClose]} onPress={(filterBiscoito) }>
              <Text style ={ {color: "white",textAlign: 'center'}}>Biscoitos e salgadinhos</Text>
              </Pressable>
              <Pressable style={[styles.button, styles.buttonClose]} onPress={(filterCarnes) }>
              <Text style ={ {color: "white",textAlign: 'center'}}>Carnes, aves e peixes</Text>
              </Pressable>
              <Pressable style={[styles.button, styles.buttonClose]} onPress={(filterMolhos) }>
              <Text style ={ {color: "white",textAlign: 'center'}}>Molhos e condimentos</Text>
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

      <Modal isVisible={isModalVisible3}>
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
              <Pressable style={{borderRadius: 20,padding: 10,elevation: 2,marginTop: 15,marginLeft:15,backgroundColor: "#bd3535"}} onPress={(filterCancel3) }>
              <Text style ={ {color: "white"}}>Limpar filtro</Text>
              </Pressable>
              <Pressable style={{borderRadius: 20,padding: 10,elevation: 2,marginTop: 15,marginLeft:15,backgroundColor: "#bd3535"}} onPress={(handleModal3) }>
              <Text style ={ {color: "white"}}>Voltar</Text>
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