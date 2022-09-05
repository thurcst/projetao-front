import { Text, View, StyleSheet } from 'react-native';
import React from 'react';

export function Title() {
    return (
      <View>
        <Text style={styles.title}>Itens Recentes</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    title:{
        fontSize: 25,
        fontWeight: 'bold',
        marginLeft: 14,
        marginRight: 14,
        marginTop: 14,
    }
})