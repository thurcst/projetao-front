import { StyleSheet, ScrollView } from 'react-native';
import React from 'react';
import { ActionsItems } from '../ActionsItems/actionsItems';

export function Action( props ) {
    return ( 
      <ScrollView style={styles.scroll} horizontal={false} showsHorizontalScrollIndicator={false}>        
        <ActionsItems itemId={7891000306857} navigationProp={props.navigationProp}/>
        <ActionsItems itemId={7896047605390} navigationProp={props.navigationProp}/>
        <ActionsItems itemId={7896563400295} navigationProp={props.navigationProp}/>
        <ActionsItems itemId={7893590691023} navigationProp={props.navigationProp}/>
        <ActionsItems itemId={67420001} navigationProp={props.navigationProp}/>
        <ActionsItems itemId={7892300000933} navigationProp={props.navigationProp}/>
        <ActionsItems itemId={7893500035497} navigationProp={props.navigationProp}/>
        <ActionsItems itemId={7896035920238} navigationProp={props.navigationProp}/>
        <ActionsItems itemId={7898113940015} navigationProp={props.navigationProp}/>
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