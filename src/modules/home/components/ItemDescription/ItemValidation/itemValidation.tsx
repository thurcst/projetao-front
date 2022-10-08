import { View, Text, StyleSheet, Image } from "react-native";
import { Ionicons } from '@expo/vector-icons';
import { scale, verticalScale } from "../../../../../shared/styles/scaling_units";
import { stackRouteNames } from "../../../types/stackRouteNames";
import React from "react";
import { Modal } from "../../../../../shared/components/Modal/Modal";
import { Button } from "../../../../../shared/components/Button/Button";
import { SetSafetyCategory } from "../../../types/setSafetyCategory";

export function ItemValidation( props ) {
  const [isModalVisible, setIsModalVisible] = React.useState(false);

  const handleModal = () => setIsModalVisible(() => !isModalVisible);
  return (
      <View style={styles.itemValidationView}>
        <View>
          <Text style={styles.itemValidationTitle}>Validação:</Text>
          {SetSafetyCategory(props.safetyCategory)}
          {/* <View style={styles.itemValidationIconText}>
            <Ionicons name="shield-checkmark-outline" color={'green'} size={20}/>
            <Text style={{marginLeft: scale(5)}}>Produto sem glúten</Text>
          </View> */}
          <Text style={styles.itemValidationLink}>Entenda nossa avaliação</Text>
          <Text style={styles.itemValidationLink} 
              onPress={handleModal}>Laudo</Text>
          <Modal isVisible={isModalVisible}>
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
                <Button title="Fechar" onPress={handleModal}/>
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
  