import { View, Text, StyleSheet, Image } from "react-native";
import { Ionicons } from '@expo/vector-icons';
import { scale, verticalScale } from "../../../../../shared/styles/scaling_units";
import { stackRouteNames } from "../../../types/stackRouteNames";
import React from "react";
import { Modal } from "../../../../../shared/components/Modal/Modal";
import { Button } from "../../../../../shared/components/Button/Button";
import { SetSafetyCategory } from "../../../types/setSafetyCategory";
import { NavigationScreenProp } from "react-navigation";

interface ItemValidationProps {
  navigationProp:  NavigationScreenProp<any,any>,
  safetyCategory:  string,
  productCategory: string
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
        <View>
          <Text style={styles.itemValidationTitle}>Validação:</Text>
          {SetSafetyCategory("6")}
          <Text style={styles.itemValidationReport} onPress={handleCriteriaModal}>Entenda nossa avaliação</Text>
          <Modal isVisible={isCriteriaModalVisible}>
            <Modal.Container>
              <Modal.Header title="Entenda Nossa Avaliação"/>
              <Modal.Body>
                <View style={styles.evaluationView}>
                  <Text style={styles.evaluationText}>Esta nota não dispensa leitura do rótulo, que pode mudar sem aviso prévio</Text>
                </View>
              </Modal.Body>
              <Modal.Footer>
                <View style={styles.buttonView}>
                  <Button title="Critérios de avaliação" onPress={goToCriteriaPage}/>
                  <Button title="Fechar" onPress={handleCriteriaModal}/>
                </View>
              </Modal.Footer>
            </Modal.Container>
          </Modal>
        </View>

        <Text
          style={styles.itemValidationReport} 
          onPress={handleReportModal}>LAUDO</Text>

        <Text>
          <Text>Segurança: </Text>
          <Text style={ {fontStyle: 'italic'} }>{props.safetyCategory}</Text>
        </Text>

        <Modal isVisible={isReportModalVisible}>
          <Modal.Container>
            <Modal.Header title="Laudo"/>
            <Modal.Body>
              <View style={styles.imageView}>
                <Image
                  source= {require('../../../../../../assets/PITASEMGLUTEN-LAUDODEGLUTEN.png')}
                  style={styles.image}
                />
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
  itemValidationTitle: {
    fontSize: scale(18),
    fontWeight: 'bold',
    marginBottom: scale(5)
  },
  itemValidationIconText: {
    flexDirection: 'row',
    marginBottom: scale(5)
  },
  itemValidationAbout: {
    color: 'blue',
    textDecorationLine: 'underline',
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
    justifyContent: 'center'
  },
  image: {
    width: '100%',
    height: verticalScale(300),
    resizeMode: 'center'
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
  }
})