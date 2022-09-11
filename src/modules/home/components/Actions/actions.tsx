import { Ionicons } from '@expo/vector-icons';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity, Image } from 'react-native';
import React from 'react';

const Item1 = ['Macarrão de Arroz Penne sem Glúten Urbano 500g']
const Item2 = ['Massa para Pizza Sem Glúten Casa Rigani 175g']
const Item3 = ['Pão Tradicional sem Glúten e sem Lactose Wickbold 300g']
const Item4 = ['Bisc. De Amendoim Com sAçúcar Mascavo - Sem Lactose/Gluten']
const Item5 = ['Muffin Laranja com Gotas de Chocolate Zero Açúcar sem Glúten sem Lactose Belive 40g']
const Item6 = ['Massa Pronta para Tapioca Sem Glúten Natural Life 400g']  
const Item7 = ['Arroz Branco Tipo 1 Longo Fino Sem Glúten Vegano Camil 1Kg']

export function Action( props ) {
    return (
       
      <ScrollView style={styles.scroll} horizontal={false} showsHorizontalScrollIndicator={false}>
         
        <TouchableOpacity onPress={() => 
          {props.navigationProp.navigate("ProductPage", {
            productName: Item1.toString()
          })}} 
          style={styles.actionButton}>
          
          <View style={styles.areaButton}>
            <Image
             source= {{uri:'https://cdn.discordapp.com/attachments/1014314736126545941/1014321893584683089/logo.png'}} 
             style={styles.image}
            />
            <View style={styles.teste}>
              <Text>
              {Item1}
              </Text>
              <View style={styles.icons} >
                <Ionicons name="reader-outline" color={'#000'} size={20} />
                <Ionicons name="chatbubbles-outline" color={'#000'} size={20} />
              </View>
            </View>
           
          </View>
          
        </TouchableOpacity>
        
        <TouchableOpacity onPress={() => 
          {props.navigationProp.navigate("ProductPage", {
            productName: Item2.toString()
          })}}
          style={styles.actionButton}>
          
          <View style={styles.areaButton}>
            <Image
              source= {{uri:'https://cdn.discordapp.com/attachments/1014314736126545941/1014321893584683089/logo.png'}}
             style={styles.image}
            />
            <View style={styles.teste}>
              <Text>
              {Item2}
              </Text>
              <View style={styles.icons} >
                <Ionicons name="reader-outline" color={'#000'} size={20} />
                <Ionicons name="chatbubbles-outline" color={'#000'} size={20} />
              </View>
            </View>
           
          </View>
          
        </TouchableOpacity>
        <TouchableOpacity onPress={() => 
          {props.navigationProp.navigate("ProductPage", {
            productName: Item3.toString()
          })}}
          style={styles.actionButton}>
          
          <View style={styles.areaButton}>
            <Image
              source= {{uri:'https://cdn.discordapp.com/attachments/1014314736126545941/1014321893584683089/logo.png'}}
             style={styles.image}
            />
            <View style={styles.teste}>
              <Text>
              {Item3}
              </Text>
              <View style={styles.icons} >
                <Ionicons name="reader-outline" color={'#000'} size={20} />
                <Ionicons name="chatbubbles-outline" color={'#000'} size={20} />
              </View>
            </View>
           
          </View>
          
        </TouchableOpacity>
        <TouchableOpacity onPress={() => 
          {props.navigationProp.navigate("ProductPage", {
            productName: Item4.toString()
          })}}
          style={styles.actionButton}>
          
          <View style={styles.areaButton}>
            <Image
              source= {{uri:'https://cdn.discordapp.com/attachments/1014314736126545941/1014321893584683089/logo.png'}}
             style={styles.image}
            />
            <View style={styles.teste}>
              <Text>
              {Item4}
              </Text>
              <View style={styles.icons} >
                <Ionicons name="reader-outline" color={'#000'} size={20} />
                <Ionicons name="chatbubbles-outline" color={'#000'} size={20} />
              </View>
            </View>
           
          </View>
          
        </TouchableOpacity>
        <TouchableOpacity onPress={() => 
          {props.navigationProp.navigate("ProductPage", {
            productName: Item5.toString()
          })}}
          style={styles.actionButton}>
          
          <View style={styles.areaButton}>
            <Image
              source= {{uri:'https://cdn.discordapp.com/attachments/1014314736126545941/1014321893584683089/logo.png'}}
             style={styles.image}
            />
            <View style={styles.teste}>
              <Text>
              {Item5}
              </Text>
              <View style={styles.icons} >
                <Ionicons name="reader-outline" color={'#000'} size={20} />
                <Ionicons name="chatbubbles-outline" color={'#000'} size={20} />
              </View>
            </View>
           
          </View>
          
        </TouchableOpacity>
        
        
        <TouchableOpacity onPress={() => 
          {props.navigationProp.navigate("ProductPage", {
            productName: Item6.toString()
          })}}
          style={styles.actionButton}>
          
          <View style={styles.areaButton}>
            <Image
             source= {{uri:'https://cdn.discordapp.com/attachments/1014314736126545941/1014321893584683089/logo.png'}}
             style={styles.image}
            />
            <View style={styles.teste}>
              <Text>
              {Item6}
              </Text>
              <View style={styles.icons} >
                <Ionicons name="reader-outline" color={'#000'} size={20} />
                <Ionicons name="chatbubbles-outline" color={'#000'} size={20} />
              </View>
            </View>
           
          </View>
          
        </TouchableOpacity>
        
        
        <TouchableOpacity onPress={() => 
          {props.navigationProp.navigate("ProductPage", {
            productName: Item7.toString()
          })}}
          style={styles.actionButton}>
          
          <View style={styles.areaButton}>
            <Image
              source= {{uri:'https://cdn.discordapp.com/attachments/1014314736126545941/1014321893584683089/logo.png'}}
             style={styles.image}
            />
            <View style={styles.teste}>
              <Text>
              {Item7}
              </Text>
              <View style={styles.icons} >
                <Ionicons name="reader-outline" color={'#000'} size={20} />
                <Ionicons name="chatbubbles-outline" color={'#000'} size={20} />
              </View>
            </View>
           
          </View>
          
        </TouchableOpacity>
    
      </ScrollView>
       
    );
}

const styles = StyleSheet.create({
    actionButton: {
        flex: 1,
        backgroundColor: '#fff',
        paddingStart: 5, 
        marginVertical: 8,
            
    },
    areaButton: {
        flex:1,
        backgroundColor: '#fff',
        flexDirection: 'row',
        
    },
    icons: {
      flex:1,
      justifyContent: 'flex-start',
      backgroundColor: '#fff',
      flexDirection: 'row-reverse',
      borderBottomWidth: 0.9,
      borderBottomColor: '#DADADA'
      
  },
    scroll: {
        flex: 1,
        width: '100%',
        backgroundColor: '#fff',
        maxHeight: 250,
        marginBottom: 14,
        marginTop: 18,
        paddingRight: 0,
        paddingStart: 0,
    },
    image: {
      width: 60,
      height: 60,
      flexDirection: 'row',
      right: 6,
      
     },
    teste: {
      flex: 1,
      top: 5,
      left: 5,
     },

});