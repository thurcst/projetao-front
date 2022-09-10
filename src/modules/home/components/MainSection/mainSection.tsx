import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Section from '../Section/section';

export default function MainSection() {
    return(
        <View style={styles.container}>
            <Section />
        </View>
    );    
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        paddingStart: 20,
        paddingTop : 1,
    }
});