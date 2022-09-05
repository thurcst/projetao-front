import { Ionicons } from '@expo/vector-icons';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity } from 'react-native';
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
          
          <Text style={styles.areaButton}>{Item1}</Text>
          <View style={styles.areaButton}>
          <Ionicons name="reader-outline" color={'#000'} size={25} />
          <Ionicons name="chatbubbles-outline" color={'#000'} size={25} />
          </View>
          
        </TouchableOpacity>
        
        <TouchableOpacity onPress={() => 
          {props.navigationProp.navigate("ProductPage", {
            productName: Item2.toString()
          })}}
          style={styles.actionButton}>
          
          <Text style={styles.areaButton}>{Item2}</Text>
          <View style={styles.areaButton}>
          <Ionicons name="reader-outline" color={'#000'} size={25} />
          <Ionicons name="chatbubbles-outline" color={'#000'} size={25} />
          </View>
          
        </TouchableOpacity>
        <TouchableOpacity onPress={() => 
          {props.navigationProp.navigate("ProductPage", {
            productName: Item3.toString()
          })}}
          style={styles.actionButton}>
          
          <Text style={styles.areaButton}>{Item3}</Text>
          <View style={styles.areaButton}>
          <Ionicons name="reader-outline" color={'#000'} size={25} />
          <Ionicons name="chatbubbles-outline" color={'#000'} size={25} />
          </View>
          
        </TouchableOpacity>
        <TouchableOpacity onPress={() => 
          {props.navigationProp.navigate("ProductPage", {
            productName: Item4.toString()
          })}}
          style={styles.actionButton}>
          
          <Text style={styles.areaButton}>{Item4}</Text>
          <View style={styles.areaButton}>
          <Ionicons name="reader-outline" color={'#000'} size={25} />
          <Ionicons name="chatbubbles-outline" color={'#000'} size={25} />
          </View>
          
        </TouchableOpacity>
        <TouchableOpacity onPress={() => 
          {props.navigationProp.navigate("ProductPage", {
            productName: Item5.toString()
          })}}
          style={styles.actionButton}>
          
          <Text style={styles.areaButton}>{Item5}</Text>
          <View style={styles.areaButton}>
          <Ionicons name="reader-outline" color={'#000'} size={25} />
          <Ionicons name="chatbubbles-outline" color={'#000'} size={25} />
          </View>
          
        </TouchableOpacity>
        
        
        <TouchableOpacity onPress={() => 
          {props.navigationProp.navigate("ProductPage", {
            productName: Item6.toString()
          })}}
          style={styles.actionButton}>
          
          <Text style={styles.areaButton}>{Item6}</Text>
          <View style={styles.areaButton}>
          <Ionicons name="reader-outline" color={'#000'} size={25} />
          <Ionicons name="chatbubbles-outline" color={'#000'} size={25} />
          </View>
          
        </TouchableOpacity>
        
        
        <TouchableOpacity onPress={() => 
          {props.navigationProp.navigate("ProductPage", {
            productName: Item7.toString()
          })}}
          style={styles.actionButton}>
          
          <Text style={styles.areaButton}>{Item7}</Text>
          <View style={styles.areaButton}>
          <Ionicons name="reader-outline" color={'#000'} size={25} />
          <Ionicons name="chatbubbles-outline" color={'#000'} size={25} />
          </View>
          
        </TouchableOpacity>
    
      </ScrollView>
       
    );
}

const styles = StyleSheet.create({
    actionButton: {
        flex: 1,
        backgroundColor: '#fff',
        paddingStart: 40,
        marginVertical: 8,
        borderBottomWidth: 0.5,
        borderBottomColor: '#DADADA'    
    },
    areaButton: {
        flex:1,
        backgroundColor: '#fff',
        paddingStart: 40,
        flexDirection: 'row',
        
    },
    scroll: {
        flex: 1,
        backgroundColor: '#fff',
        maxHeight: 200,
        marginBottom: 14,
        marginTop: 18,
        paddingEnd: 14,
        paddingStart: 14,
    }
});