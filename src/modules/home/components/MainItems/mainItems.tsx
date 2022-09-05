import { StyleSheet, View, Image, Text } from 'react-native';
import React, { Component } from 'react';
import { Title } from '../Title/title';
import { Action } from '../Actions/actions';

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
        paddingStart: 20,
        paddingTop : 100,
    }
});