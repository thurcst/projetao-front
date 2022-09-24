import { StyleSheet, ScrollView } from 'react-native';
import React from 'react';
import { ActionsItems } from '../ActionsItems/actionsItems';
import { moderateScale } from '../../../../shared/styles/scaling_units';

export function Action( props ) {
    return ( 
      <ScrollView style={styles.scroll} horizontal={false} showsHorizontalScrollIndicator={false}>        
        <ActionsItems itemId={13} navigationProp={props.navigationProp}/>
        {/* <ActionsItems itemId={2} navigationProp={props.navigationProp}/>
        <ActionsItems itemId={3} navigationProp={props.navigationProp}/>
        <ActionsItems itemId={4} navigationProp={props.navigationProp}/>
        <ActionsItems itemId={5} navigationProp={props.navigationProp}/>
        <ActionsItems itemId={6} navigationProp={props.navigationProp}/>
        <ActionsItems itemId={7} navigationProp={props.navigationProp}/>     */}
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