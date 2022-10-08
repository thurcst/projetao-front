import { View, Text, StyleSheet, Image } from "react-native";
import { Ionicons } from '@expo/vector-icons';
import { scale, verticalScale } from "../../../../../shared/styles/scaling_units";
import { stackRouteNames } from "../../../types/stackRouteNames";
import React from "react";
import { Modal } from "../../../../../shared/components/Modal/Modal";
import { Button } from "../../../../../shared/components/Button/Button";
import { SetSafetyCategory } from "../../../types/setSafetyCategory";

export function ItemValidation( props ) {
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
          {SetSafetyCategory(props.safetyCategory)}
          <Text style={styles.itemValidationLink} onPress={handleCriteriaModal}>Entenda nossa avaliação</Text>
          <Modal isVisible={isCriteriaModalVisible}>
            <Modal.Container>
              <Modal.Header title="Entenda Nossa Avaliação"/>
              <Modal.Body>
                <View style={styles.imageView}>
                  <Text>Esta nota não dispensa leitura do rótulo, que pode mudar sem aviso prévio</Text>
                </View>
              </Modal.Body>
              <Modal.Footer>
                <Button title="Fechar" onPress={handleCriteriaModal}/>
                <Button title="Critérios de avaliação" onPress={goToCriteriaPage}/>
              </Modal.Footer>
            </Modal.Container>
          </Modal>

          <Text style={styles.itemValidationLink} 
              onPress={handleReportModal}>Laudo</Text>
          <Modal isVisible={isReportModalVisible}>
            <Modal.Container>
              <Modal.Header title="Laudo"/>
              <Modal.Body>
                <View style={styles.imageView}>
                  <Image
                          source= {{uri: 'https://cdn.discordapp.com/attachments/1014314736126545941/1016454312349683844/darkbckg.png'}}
                          style={styles.image}
                    />
                </View>
              </Modal.Body>
              <Modal.Footer>
                <Button title="Fechar" onPress={handleReportModal}/>
              </Modal.Footer>
            </Modal.Container>
          </Modal>
          <Text>Categoria: {props.productCategory}</Text>
        </View>
      </View>
  );
}

const styles = StyleSheet.create({
  itemValidationTitle: {
    fontSize: scale(16),
    fontWeight: 'bold',
  },
  itemValidationLink: {
    color: 'green',
    textDecorationLine: 'underline'
  },
  itemValidationIconText: {
    flexDirection: 'row',
  },
  itemValidationView: {
    backgroundColor: 'white',
  },
  text: {
    fontSize: 16,
    fontWeight: "400",
    textAlign: "center",
  },
  imageView: {
    width: '100%',
    height: verticalScale(350),
    justifyContent: 'center'
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'center'
  },
})