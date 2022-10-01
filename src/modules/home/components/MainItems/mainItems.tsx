import { StyleSheet, View, Image, Text } from 'react-native';
import React, { Component } from 'react';
import { Title } from '../Title/title';
import { Action } from '../Actions/actions';
import { scale, verticalScale } from '../../../../shared/styles/scaling_units';

export function MainItems( props ) {
    return (
        <View style={styles.container}>
            <Title/>
            <Action navigationProp={props.navigationProp}/>
        </View>
    );
} 
      
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        paddingHorizontal: scale(5),
        paddingTop: verticalScale(5),
    }
});