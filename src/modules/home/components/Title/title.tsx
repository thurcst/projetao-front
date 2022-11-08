import { Text, View, StyleSheet } from 'react-native';
import React from 'react';
import { moderateScale } from '../../../../shared/styles/scaling_units';

export function Title() {
    return (
      <View>
        <Text style={styles.title}>Itens Recentes</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    title:{
        fontSize: moderateScale(20),
        fontWeight: 'bold',
        marginHorizontal: moderateScale(14),       
    }
})