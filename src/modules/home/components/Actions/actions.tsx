import { StyleSheet, ScrollView } from 'react-native';
import React from 'react';
import { ActionsItems } from '../ActionsItems/actionsItems';

export function Action( props ) {
    return (
       
      <ScrollView style={styles.scroll} horizontal={false} showsHorizontalScrollIndicator={false}>
         
        <ActionsItems item={"Item1"}/>
        <ActionsItems item={"Item2"}/>
        <ActionsItems item={"Item3"}/>
        <ActionsItems item={"Item4"}/>
        <ActionsItems item={"Item5"}/>
        <ActionsItems item={"Item6"}/>
        <ActionsItems item={"Item7"}/>

      </ScrollView>
       
    );
}

const styles = StyleSheet.create({
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

});