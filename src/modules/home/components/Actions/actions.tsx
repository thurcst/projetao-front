import { StyleSheet, ScrollView } from 'react-native';
import React from 'react';
import { ActionsItems } from '../ActionsItems/actionsItems';

export function Action( props ) {
    return ( 
      <ScrollView style={styles.scroll} horizontal={false} showsHorizontalScrollIndicator={false}>        
        <ActionsItems itemId={13} navigationProp={props.navigationProp}/>
      </ScrollView>
       
    );
}

const styles = StyleSheet.create({
    scroll: {
        flex: 1,
        width: '100%',
        backgroundColor: '#fff',
    }
});