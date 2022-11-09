import { View, Text, StyleSheet, Image, Animated, Modal as RNModal, Pressable } from "react-native";
import { scale, verticalScale } from "../../../../../shared/styles/scaling_units";
import { stackRouteNames } from "../../../types/stackRouteNames";
import React from "react";
import { Modal } from "../../../../../shared/components/Modal/Modal";
import { Button } from "../../../../../shared/components/Button/Button";
import { SetSafetyCategory } from "../../../types/setSafetyCategory";
import { NavigationScreenProp } from "react-navigation";
import ReactNativeZoomableView from '@openspacelabs/react-native-zoomable-view/src/ReactNativeZoomableView';
import { TouchableOpacity } from "react-native-gesture-handler";
import { Ionicons } from "@expo/vector-icons";
import laudosImages from "../../../../../../laudosImages";

interface ItemValidationProps {
  navigationProp:  NavigationScreenProp<any,any>,
  safetyCategory:  string,
  reportPath: string
}
export function ItemValidation( props: ItemValidationProps ) {
  const [isReportModalVisible, setIsReportModalVisible] = React.useState(false);
  const handleReportModal = () => setIsReportModalVisible(() => !isReportModalVisible);
  
  const [isCriteriaModalVisible, setIsCriteriaModalVisible] = React.useState(false);
  const handleCriteriaModal = () => setIsCriteriaModalVisible(() => !isCriteriaModalVisible);
  const goToCriteriaPage = () => {
    setIsCriteriaModalVisible(() => !isCriteriaModalVisible);
    props.navigationProp.navigate(stackRouteNames.CriteriaPage);
  };

  const getLaudoPath = (laudoId: string) => {
    switch (laudoId) {
      case '1':
        require(laudosImages.find(item => item.name === '1').path);
        break;
      case '2':
        require(laudosImages.find(item => item.name === '2').path);
        break;
      case '3':
        require(laudosImages.find(item => item.name === '3').path);
        break;
      case '4':
        require(laudosImages.find(item => item.name === '4').path);
        break;
      case '5':
        require(laudosImages.find(item => item.name === '5').path);
        break;
      case '6':
        require(laudosImages.find(item => item.name === '6').path);
        break;
      case '7':
        require(laudosImages.find(item => item.name === '7').path);
        break;
      case '8':
        require(laudosImages.find(item => item.name === '8').path);
        break;
      case '9':
        require(laudosImages.find(item => item.name === '9').path);
        break;
      case '10':
        require(laudosImages.find(item => item.name === '10').path);
        break;
      case '11':
        require(laudosImages.find(item => item.name === '11').path);
        break;
      case '12':
        require(laudosImages.find(item => item.name === '12').path);
        break;
      case '13':
        require(laudosImages.find(item => item.name === '13').path);
        break;
      case '14':
        require(laudosImages.find(item => item.name === '14').path);
        break;
      case '15':
        require(laudosImages.find(item => item.name === '15').path);
        break;
      case '16':
        require(laudosImages.find(item => item.name === '16').path);
        break;
      case '17':
        require(laudosImages.find(item => item.name === '17').path);
        break;
      case '606529582999':
        require(laudosImages.find(item => item.name === '606529582999').path);
        break;
      case '742832823340':
        require(laudosImages.find(item => item.name === '742832823340').path);
        break;
      case '742832823357':
        require(laudosImages.find(item => item.name === '742832823357').path);
        break;
      case '742832823364':
        require(laudosImages.find(item => item.name === '742832823364').path);
        break;
      case '742832823371':
        require(laudosImages.find(item => item.name === '742832823371').path);
        break;
      case '751320841056':
        require(laudosImages.find(item => item.name === '751320841056').path);
        break;
      case '751320841070':
        require(laudosImages.find(item => item.name === '751320841070').path);
        break;
      case '7898951177277':
        require(laudosImages.find(item => item.name === '7898951177277').path);
        break;
      case '7898961803005':
        require(laudosImages.find(item => item.name === '7898961803005').path);
        break;
      case '7898961803067':
        require(laudosImages.find(item => item.name === '7898961803067').path);
        break;
      case '7898961803074':
        require(laudosImages.find(item => item.name === '7898961803074').path);
        break;
      case '7898961803159':
        require(laudosImages.find(item => item.name === '7898961803159').path);
        break;
      case '7898961803166':
        require(laudosImages.find(item => item.name === '7898961803166').path);
        break;  
      default:
        require(laudosImages.find(item => item.name === '7898961803166').path);
        break;
    }
  }

  const resolveReport = () => {
    if(!props.reportPath && props.safetyCategory.toLowerCase() != "star gold") {
      return (
        <Text style={{fontStyle: 'italic'}}>
          Não há laudo disponível para este produto
        </Text>
      )
      
    } else if(!props.reportPath && props.safetyCategory.toLowerCase() == "star gold") {
      return (<Text style={{fontStyle: 'italic'}}>
        A segurança deste produto é certificada pela ACELPAR
      </Text>)

    } else return (
      <Text
      style={styles.itemValidationReport} 
      onPress={handleReportModal}>
            LAUDO
          </Text>
     );
  }
  console.log('REPORT PATH: '+'/home/matheus/Documentos/Faculdade/5oPeriodo/Projetao/projetao-front/src/Images/Reports/img/'+props.reportPath+'.png');
  console.log('REPORT PATH: '+'/home/matheus/Documentos/Faculdade/5oPeriodo/Projetao/projetao-front/src/Images/Reports/img/606529582999.png');

  return (
      <View style={styles.itemValidationView}>

        {/* Title */}
        <Text style={styles.itemValidationTitle}>Segurança</Text>

        {/* Security */}
        <View style={styles.itemValidationItem}>
          {SetSafetyCategory(props.safetyCategory)}
        </View>

        {/* Learn more */}
        <View style={styles.itemValidationItem}>
          <Text style={styles.itemValidationLearnMore} onPress={handleCriteriaModal}>Entenda os níveis de segurança</Text>
        </View>

        {/* Report */}
        <View style={styles.itemValidationItem}>
          { resolveReport() }
        </View>

        <Modal isVisible={isCriteriaModalVisible}>
          <Modal.Container>
            <View style={styles.modalContainer}>
              <Modal.Header title="Entenda os níveis de segurança"/>
              <Modal.Body>
                <View style={styles.evaluationView}>
                  <Text style={styles.evaluationText}>
                    <Text style={{fontWeight: "bold"}}>Atenção:</Text> o nível de segurança não dispensa leitura do rótulo, que pode mudar sem aviso prévio.
                  </Text>
                </View>
              </Modal.Body>
              <Modal.Footer>
                <View style={styles.buttonView}>
                  <Button title="Critérios de avaliação" onPress={goToCriteriaPage}/>
                  <Button title="Fechar" onPress={handleCriteriaModal}/>
                </View>
              </Modal.Footer>
            </View>
          </Modal.Container>
        </Modal>

        <RNModal
          visible={isReportModalVisible}
          animationType={'slide'}
          hardwareAccelerated={true}
          transparent={true}
        >
          <View style={styles.reportView}>
            <View style={styles.reportCloseButton}>
              <Pressable onPress={handleReportModal}>
                <Ionicons name='close' color='white' size={scale(30)}/>
              </Pressable>
            </View>
            <ReactNativeZoomableView
              maxZoom={3.5}
              minZoom={1}
              zoomStep={1.75}
              initialZoom={1}
              bindToBorders={true}
            >
              <Image
                source={getLaudoPath(props.reportPath)}
                style={[styles.image]}
              />
            </ReactNativeZoomableView>
          </View>
        </RNModal>

      </View>
  );
}

const styles = StyleSheet.create({
  itemValidationView: {
    backgroundColor: 'white',
  },
  itemValidationItem: {
    marginTop: verticalScale(5)
  },
  itemValidationTitle: {
    fontSize: scale(18),
    fontWeight: 'bold',
    marginBottom: scale(5)
  },
  itemValidationIconText: {
    flexDirection: 'row',
    marginBottom: scale(5)
  },
  itemValidationLearnMore: {
    color: 'green',
    textDecorationLine: 'underline',
    fontStyle: 'italic',
    fontWeight: 'bold',
    marginBottom: scale(5)
  },
  reportCloseButton: {
    position: 'absolute',
    top: 0,
    right: 0,
    zIndex: 2,
    backgroundColor: 'gray',
    // opacity: 0.75,
    elevation: 5,
    alignSelf: 'baseline',
  },
  itemValidationReport: {
    color: 'green',
    textDecorationLine: 'underline',
    fontStyle: 'italic',
    fontWeight: 'bold',
  },
  reportView: {
    justifyContent: 'center',
    flex: 1,
    height: '100%',
    width: '100%',
    backgroundColor: 'black',
  },
  image: {
    height: '100%',
    width: '100%',
    resizeMode: 'contain'
  },
  buttonView: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  evaluationView: {
    height: verticalScale(200),
    width: '100%',
    justifyContent: 'center'
  },
  evaluationText: {
    fontSize: scale(20),
    fontWeight: "400",
    textAlign: "center",
  },
  modalContainer: {
    backgroundColor: 'white',
    borderRadius: 15,
  }
})