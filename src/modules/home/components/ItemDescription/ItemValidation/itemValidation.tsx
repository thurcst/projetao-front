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
import eventsInstance from "../../../../../shared/services/analytics";

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
    if ('1') {
      return (<Image source={require('../../../../../Images/Reports/img/1.png')} style={[styles.image]}/>)
    }
    if ('2') {
      return (<Image source={require('../../../../../Images/Reports/img/2.png')} style={[styles.image]}/>)
    }
    if ('3') {
      return (<Image source={require('../../../../../Images/Reports/img/3.png')} style={[styles.image]}/>)
    }
    if ('4') {
      return (<Image source={require('../../../../../Images/Reports/img/4.png')} style={[styles.image]}/>)
    }
    if ('5') {
      return (<Image source={require('../../../../../Images/Reports/img/5.png')} style={[styles.image]}/>)
    }
    if ('6') {
      return (<Image source={require('../../../../../Images/Reports/img/6.png')} style={[styles.image]}/>)
    }
    if ('7') {
      return (<Image source={require('../../../../../Images/Reports/img/7.png')} style={[styles.image]}/>)
    }
    if ('8') {
      return (<Image source={require('../../../../../Images/Reports/img/8.png')} style={[styles.image]}/>)
    }
    if ('10') {
      return (<Image source={require('../../../../../Images/Reports/img/10.png')} style={[styles.image]}/>)
    }
    if ('14') {
      return (<Image source={require('../../../../../Images/Reports/img/14.png')} style={[styles.image]}/>)
    }
    if ('15') {
      return (<Image source={require('../../../../../Images/Reports/img/15.png')} style={[styles.image]}/>)
    }
    if ('16') {
      return (<Image source={require('../../../../../Images/Reports/img/16.png')} style={[styles.image]}/>)
    }
    if ('17') {
      return (<Image source={require('../../../../../Images/Reports/img/17.png')} style={[styles.image]}/>)
    }
    if ('606529582999') {
      return (<Image source={require('../../../../../Images/Reports/img/606529582999.png')} style={[styles.image]}/>)
    }
    if ('742832823340') {
      return (<Image source={require('../../../../../Images/Reports/img/742832823340.png')} style={[styles.image]}/>)
    }
    if ('742832823357') {
      return (<Image source={require('../../../../../Images/Reports/img/742832823357.png')} style={[styles.image]}/>)
    }
    if ('742832823364') {
      return (<Image source={require('../../../../../Images/Reports/img/742832823364.png')} style={[styles.image]}/>)
    }
    if ('742832823371') {
      return (<Image source={require('../../../../../Images/Reports/img/742832823371.png')} style={[styles.image]}/>)
    }
    if ('751320841056') {
      return (<Image source={require('../../../../../Images/Reports/img/751320841056.png')} style={[styles.image]}/>)
    }
    if ('751320841070') {
      return (<Image source={require('../../../../../Images/Reports/img/751320841070.png')} style={[styles.image]}/>)
    }
    if ('7898951177277') {
      return (<Image source={require('../../../../../Images/Reports/img/7898951177277.png')} style={[styles.image]}/>)
    }
    if ('7898961803005') {
      return (<Image source={require('../../../../../Images/Reports/img/7898961803005.png')} style={[styles.image]}/>)
    }
    if ('7898961803067') {
      return (<Image source={require('../../../../../Images/Reports/img/7898961803067.png')} style={[styles.image]}/>)
    }
    if ('7898961803074') {
      return (<Image source={require('../../../../../Images/Reports/img/7898961803074.png')} style={[styles.image]}/>)
    }
    if ('7898961803159') {
      return (<Image source={require('../../../../../Images/Reports/img/7898961803159.png')} style={[styles.image]}/>)
    }
    if ('7898961803166') {
      return (<Image source={require('../../../../../Images/Reports/img/7898961803166.png')} style={[styles.image]}/>)
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
      <TouchableOpacity onPress={() => {eventsInstance.sendEvent("Tocou no botão para mostrar o laudo")}}>
        <Text
        style={styles.itemValidationReport} 
        onPress={handleReportModal}>
              LAUDO
            </Text>
      </TouchableOpacity>
     );
  }

  return (
      <View style={styles.itemValidationView}>

        {/* Title */}
        <Text style={styles.itemValidationTitle} onPress={eventsInstance.sendEvent("Tocou no título de itemValidation")}>Segurança</Text>

        {/* Security */}
        <View style={styles.itemValidationItem}>
          {SetSafetyCategory(props.safetyCategory)}
        </View>

        {/* Learn more */}
        <TouchableOpacity style={styles.itemValidationItem} onPress={() => {eventsInstance.sendEvent("Tocou no botão para entender os níveis de segurança")}}>
          <Text style={styles.itemValidationLearnMore} onPress={handleCriteriaModal}>Entenda os níveis de segurança</Text>
        </TouchableOpacity>

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
                  <Button title="Critérios de avaliação" onPress={() => {eventsInstance.sendEvent("Tocou no botão de ver os critérios de avaliação"); goToCriteriaPage}}/>
                  <Button title="Fechar" onPress={() => {eventsInstance.sendEvent("Tocou no botão de fechar o pop-up de entender os critérios de avaliação"); handleCriteriaModal}}/>
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
              {getLaudoPath(props.reportPath)}
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