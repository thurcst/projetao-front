import React, { useState, useMemo } from 'react';
import { SectionList, StyleSheet, View, Text, Button, FlatList, TouchableOpacity } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { FlipInEasyX } from 'react-native-reanimated';


const categories = [
    {
        category: 'Pães',
        data: [
            {
                id: '1',
                name: 'Pão Francês',
                price: '10.00',
                rating: 4,
            },
            {
                id: '2',
                name: 'Pão de Forma',
                price: '15.00',
                rating: 5,
            },
        ]
    },
    {
        category: 'Grãos',
        data: [
            {
                id: '3',
                name: 'Feijão',
                price: '20.00',
                rating: 3,
            },
            {
                id: '4',
                name: 'Soja',
                price: '25.00',
                rating: 3,
            },
        ]
    },
    {
        category: 'Doces',
        data: [
            {
                id: '5',
                name: 'Fini',
                price: '5.00',
                rating: 5,
            },
            {
                id: '6',
                name: 'Mentos',
                price: '5.00',
                rating: 5,
            },
        ]
    },
    {
        category: 'Biscoitos e Salgadinhos',
        data: [
            {
                id: '7',
                name: 'Maizena',
                price: '8.00',
                rating: 4,
            },
            {
                id: '8',
                name: 'Biscoito de Polvilho',
                price: '8.00',
                rating: 4,
            },
        ]
    },
    {
        category: 'Carnes, Aves e Peixes',
        data: [
            {
                id: '9',
                name: 'Carne',
                price: '30.00',
                rating: 3,
            },
            {
                id: '10',
                name: 'Peixe',
                price: '30.00',
                rating: 3,
            },
        ]
    },
    {
        category: 'Molhos e Condimentos',
        data: [
            {
                id: '11',
                name: 'Molho de Tomate',
                price: '10.00',
                rating: 4,
            },
            {
                id: '12',
                name: 'Molho de Pimenta',
                price: '10.00',
                rating: 4,
            },
        ]
    }
];

const Section = () => {
    
    return (
        <TouchableOpacity style={styles.container}
            activeOpacity={0.8}
        >
            <Text style={styles.text}>Bilola</Text>
            <MaterialCommunityIcons name="bread-slice-outline" size={40} color="black" />
        </TouchableOpacity>
    )

};


export default Section;

const styles = StyleSheet.create({
    container: {
      display: 'flex',
      flexDirection: 'row',
      flex: 1,
      borderRadius: 10,
      padding: 10,
      justifyContent: 'space-between',
      backgroundColor: 'orange',
      alignItems: 'flex-end',
    },
    text: {
        color: 'white',
        fontSize: 32,
    }
  });

