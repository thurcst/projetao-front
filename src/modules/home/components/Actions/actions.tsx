import { StyleSheet, ScrollView } from 'react-native';
import React from 'react';
import { ActionsItems } from '../ActionsItems/actionsItems';

const listOfBarCodes = [7891100794905, 7892300001473, 7893500023425, 7622210496607, 7898568900565, 67420001, 7898113940015];

export function Action( props ) {
    return ( 
      <ScrollView style={styles.scroll} horizontal={false} showsHorizontalScrollIndicator={false}>  
        {listOfBarCodes.map(item => 
          <ActionsItems itemId={item} navigationProp={props.navigationProp}/>)} 
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