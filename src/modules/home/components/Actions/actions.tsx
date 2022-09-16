import { StyleSheet, ScrollView } from 'react-native';
import React from 'react';
import { ActionsItems } from '../ActionsItems/actionsItems';

export function Action( props ) {
    return ( 
      <ScrollView style={styles.scroll} horizontal={false} showsHorizontalScrollIndicator={false}>        
        <ActionsItems item={"Item1"} navigationProp={props.navigationProp}/>
        <ActionsItems item={"Item2"} navigationProp={props.navigationProp}/>
        <ActionsItems item={"Item3"} navigationProp={props.navigationProp}/>
        <ActionsItems item={"Item4"} navigationProp={props.navigationProp}/>
        <ActionsItems item={"Item5"} navigationProp={props.navigationProp}/>
        <ActionsItems item={"Item6"} navigationProp={props.navigationProp}/>
        <ActionsItems item={"Item7"} navigationProp={props.navigationProp}/>    
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