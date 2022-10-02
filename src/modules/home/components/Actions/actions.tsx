import { StyleSheet, ScrollView } from 'react-native';
import React from 'react';
import { ActionsItems } from '../ActionsItems/actionsItems';

const listOfBarCodes = [7891000306857, 7896047605390, 7896563400295, 7893590691023, 67420001, 7892300000933, 7893500035497, 7896035920238, 7898113940015];

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