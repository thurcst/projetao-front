import { Ionicons } from '@expo/vector-icons';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import React from 'react';
import { GetActionItemInfo } from '../GetActionItemInfo/getActionItemInfo';

export function ActionsItems( props ){
    return (
        <TouchableOpacity onPress={() => 
          {props.navigationProp.navigate("ProductPage", {
            productName: GetActionItemInfo(props.item).toString()
          })}} 
          style={styles.actionButton}>
          
          <View style={styles.areaButton}>
            <Image
             source= {{uri:'https://cdn.discordapp.com/attachments/1014314736126545941/1014321893584683089/logo.png'}} 
             style={styles.image}
            />
            <View style={styles.teste}>
              <Text>
              {GetActionItemInfo(props.item)}
              </Text>
              <View style={styles.areaButton} >
                <Ionicons name="reader-outline" color={'#000'} size={25} />
                <Ionicons name="chatbubbles-outline" color={'#000'} size={25} />
              </View>
            </View>
           
          </View>
          
        </TouchableOpacity>
    
    )
}

const styles = StyleSheet.create({
    actionButton: {
        flex: 1,
        backgroundColor: '#fff',
        paddingStart: 5, 
        marginVertical: 8,
        borderBottomWidth: 0.5,
        borderBottomColor: '#DADADA'    
    },
    areaButton: {
        flex:1,
        backgroundColor: '#fff',
        flexDirection: 'row',
        
    },
    image: {
      width: 60,
      height: 60,
      flexDirection: 'row',
      right: 6,
     },
    teste: {
      flexDirection: 'column',
      top: 5,
      left: 5,
     },

});