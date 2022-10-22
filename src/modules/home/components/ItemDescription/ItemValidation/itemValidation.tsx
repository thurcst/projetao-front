import { View, Text, StyleSheet, Image, Animated } from "react-native";
import { scale, verticalScale } from "../../../../../shared/styles/scaling_units";
import { stackRouteNames } from "../../../types/stackRouteNames";
import React from "react";
import { Modal } from "../../../../../shared/components/Modal/Modal";
import { Button } from "../../../../../shared/components/Button/Button";
import { SetSafetyCategory } from "../../../types/setSafetyCategory";
import { NavigationScreenProp } from "react-navigation";
import ReactNativeZoomableView from '@openspacelabs/react-native-zoomable-view/src/ReactNativeZoomableView';

interface ItemValidationProps {
  navigationProp:  NavigationScreenProp<any,any>,
  safetyCategory:  string
}
export function ItemValidation( props: ItemValidationProps ) {
  const [isReportModalVisible, setIsReportModalVisible] = React.useState(false);
  const [isCriteriaModalVisible, setIsCriteriaModalVisible] = React.useState(false);

  const handleReportModal = () => setIsReportModalVisible(() => !isReportModalVisible);
  const handleCriteriaModal = () => setIsCriteriaModalVisible(() => !isCriteriaModalVisible);
  const goToCriteriaPage = () => {
    setIsCriteriaModalVisible(() => !isCriteriaModalVisible);
    props.navigationProp.navigate(stackRouteNames.CriteriaPage);
  };
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
          <Text style={styles.itemValidationLearnMore} onPress={handleCriteriaModal}>Entenda nossa avaliação</Text>
        </View>

        {/* Report */}
        <View style={styles.itemValidationItem}>
          <Text
            style={styles.itemValidationReport} 
            onPress={handleReportModal}>LAUDO
          </Text>
        </View>

        <Modal isVisible={isCriteriaModalVisible}>
          <Modal.Container>
            <View style={styles.modalContainer}>
              <Modal.Header title="Entenda Nossa Avaliação"/>
              <Modal.Body>
                <View style={styles.evaluationView}>
                  <Text style={styles.evaluationText}>Atenção: esta nota não dispensa leitura do rótulo, que pode mudar sem aviso prévio.</Text>
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

        <Modal isVisible={isReportModalVisible}>
          <Modal.Container>
            <Modal.Header title="Laudo"/>
            <Modal.Body>
              <View style={styles.imageView}>
                <ReactNativeZoomableView
                  maxZoom={3.5}
                  minZoom={1}
                  zoomStep={1.75}
                  initialZoom={1}
                  bindToBorders={true}
                  >
                  <Image
                    source= {require('../../../../../../assets/PITASEMGLUTEN-LAUDODEGLUTEN.png')}
                    style={[styles.image]}
                  />
                </ReactNativeZoomableView>
              </View>
            </Modal.Body>
            <Modal.Footer>
              <Button title="Fechar" onPress={handleReportModal}/>
            </Modal.Footer>
          </Modal.Container>
        </Modal>

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
  itemValidationReport: {
    color: 'green',
    textDecorationLine: 'underline',
    fontStyle: 'italic',
    fontWeight: 'bold',
    marginBottom: scale(5)
  },
  imageView: {
    paddingTop: scale(10),
    width: '100%',
    height: verticalScale(350),
    justifyContent: 'center',
  },
  image: {
    flex: 1,
    width: '100%',
    height: verticalScale(600),
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