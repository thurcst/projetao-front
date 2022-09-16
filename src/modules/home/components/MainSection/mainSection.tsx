import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { FlatGrid } from 'react-native-super-grid';
import Section from '../Section/section';

export default function MainSection() {
    return(
        <FlatGrid style={styles.container} 
                  itemDimension={200} 
                  data={[1,2,3,4,5,6]} 
                  renderItem={({ item }) => (<Section />)} />
    );    
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
    }
});