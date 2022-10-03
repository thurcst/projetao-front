import { View, Text, StyleSheet } from "react-native";
import { Ionicons } from '@expo/vector-icons';
import { scale } from "../../../../../shared/styles/scaling_units";
import { stackRouteNames } from "../../../types/stackRouteNames";
import React from "react";
import { Modal } from "../../../../../shared/components/Modal/Modal";
import { Button } from "../../../../../shared/components/Button/Button";

export function ItemValidation( props ) {
  const [isModalVisible, setIsModalVisible] = React.useState(false);

  const handleModal = () => setIsModalVisible(() => !isModalVisible);
  return (
      <View style={styles.itemValidationView}>
        <View>
          <Text style={styles.itemValidationTitle}>Validação:</Text>
          <View style={styles.itemValidationIconText}>
            <Ionicons name="shield-checkmark-outline" color={'green'} size={20}/>
            <Text style={{marginLeft: scale(5)}}>Produto sem glúten</Text>
          </View>
          <Text style={styles.itemValidationLink} 
              onPress={handleModal}>Laudo</Text>
          <Modal isVisible={isModalVisible}>
            <Modal.Container>
              <Modal.Header title="LogRocket"/>
              <Modal.Body>
                <Text style={styles.text}>Agree</Text>
              </Modal.Body>
              <Modal.Footer>
                <Button title="I agree" onPress={handleModal}/>
              </Modal.Footer>
            </Modal.Container>
          </Modal>
          <Text>Categoria: {props.productCategory}</Text>
          {/* <Text style={styles.itemValidationLink}>Entenda nossa avaliação</Text> */}
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
})
  