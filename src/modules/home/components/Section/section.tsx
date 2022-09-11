import React, { useState, useMemo } from 'react';
import { SectionList, StyleSheet, View, Text, Button, FlatList } from 'react-native';

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

function renderItem() {
    return categories.map((item) => {
        return (
            <Text>{item.category}</Text>
        )
    })
}

const Item = ({ item }) => (
    <View style={styles.item}>
        <Text>alo: {item.data[0].name} ({item.category})</Text>
    </View>
);

const Section = () => {
    const [data, setData] = useState(categories);

    const [selectedCategory, setSelectedCategory] = useState('');

    const filteredList = useMemo(() => {
        if (selectedCategory) {
            return data.filter(item => item.category === selectedCategory);
        }
        return data;
    }, [selectedCategory, data]);

    const onSelectedCategory = (category: string) => {
        setSelectedCategory(category);
    };

    return (
        <View style={styles.container}>
            <Text>Selected category: {selectedCategory}</Text>
            <View style={styles.filterBar}>
                <Button title="Pães" onPress={() => onSelectedCategory('Pães')} />
                <Button title="Grãos" onPress={() => onSelectedCategory('Grãos')} />
                <Button title="Doces" onPress={() => onSelectedCategory('Doces')} />
                <Button title="Biscoitos e Salgadinhos" onPress={() => onSelectedCategory('Biscoitos e Salgadinhos')} />
                <Button title="Carnes, Aves e Peixes" onPress={() => onSelectedCategory('Carnes, Aves e Peixes')} />
                <Button title="Molhos e Condimentos" onPress={() => onSelectedCategory('Molhos e Condimentos')} />
            </View>
            <FlatList
                style={styles.list}
                renderItem={Item}
                data={filteredList}
            />
        </View>
    )

};


export default Section;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      padding: 8,
      backgroundColor: 'white',
    },
    list: {
      marginRight: 20,
      height: '100%',
      width: '100%'
    },
    filterBar: {
        flexDirection: 'row',
        // flex: 0.2,
        height: 40,
    },
    item: {
      flex: 1,
      justifyContent: 'flex-start',
      padding: 8,
      backgroundColor: 'white',
    }
  });

// creating section list that can click on each title to get redirected to product page
// export default function Section() {
//     return (
//         <View style={styles.container}>
//             <SectionList
//                 sections={categories}
//                 keyExtractor={(item) => item.id}
//                 renderItem={({ item }) => (
//                     <View style={styles.item}>
//                         <Text style={styles.title}>{item.name}</Text>
//                         <Text style={styles.price}>{item.price}</Text>
//                         <Text style={styles.rating}>{item.rating}</Text>
//                     </View>
//                 )}
//                 renderSectionHeader={({ section: { category } }) => (
//                     <Text style={styles.header}>{category}</Text>
//                 )}
//             />
//         </View>
//     );
// }

// // styling section list
// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         marginTop: 20,
//     },
//     item: {
//         backgroundColor: '#f9c2ff',
//         padding: 20,
//         marginVertical: 8,
//     },
//     header: {
//         fontSize: 32,
//         backgroundColor: '#fff',
//     },
//     title: {
//         fontSize: 24,
//     },
//     price: {
//         fontSize: 18,
//     },
//     rating: {
//         fontSize: 18,
//     },
// });

// export default function Section() {
//     return(
//         <View style={styles.container}>
//             <SectionList
//                 sections={[
//                     {category: 'Pães', data: ['Bisnaguinha', 'Pão Francês', 'Pão de Forma']},
//                     {category: 'Doces', data: ['Brigadeiro', 'Chocolate', 'Bolo']},
//                     {category: 'Carnes, Aves e Peixes', data: ['Frango', 'Peixe', 'Carne']},
//                     {category: 'Grãos', data: ['Arroz', 'Feijão', 'Macarrão']},
//                     {category: 'Biscoitos e Salgadinhos', data: ['Biscoito', 'Salgadinho', 'Doritos']},
//                     {category: 'Molhos e Condimentos', data: ['Molho de Tomate', 'Molho de Pimenta', 'Molho de Soja']},
//                 ]}
//                 renderItem={({item}) => <Text style={styles.item}>{item}</Text>}
//                 renderSectionHeader={({section}) => <Text style={styles.sectionHeader}>{section.category}</Text>}
//                 keyExtractor={(item, index) => `basicListEntry-${item.title}`}
//             />
//         </View>
//     );
// }

// const styles = StyleSheet.create({
//     container: {
//      flex: 1,
//      paddingTop: 22
//     },
//     sectionHeader: {
//       paddingTop: 2,
//       paddingLeft: 10,
//       paddingRight: 10,
//       paddingBottom: 2,
//       fontSize: 14,
//       fontWeight: 'bold',
//       backgroundColor: 'rgba(247,247,247,1.0)',
//     },
//     item: {
//       padding: 10,
//       fontSize: 18,
//       height: 44,
//     },
// })