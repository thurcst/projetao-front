import React from 'react';
import { SectionList, StyleSheet, View, Text } from 'react-native';


export default function Section() {
    return(
        <View style={styles.container}>
            <SectionList
                sections={[
                    {category: 'Pães', data: ['Bisnaguinha', 'Pão Francês', 'Pão de Forma']},
                    {category: 'Doces', data: ['Brigadeiro', 'Chocolate', 'Bolo']},
                    {category: 'Carnes, Aves e Peixes', data: ['Frango', 'Peixe', 'Carne']},
                    {category: 'Grãos', data: ['Arroz', 'Feijão', 'Macarrão']},
                    {category: 'Biscoitos e Salgadinhos', data: ['Biscoito', 'Salgadinho', 'Doritos']},
                    {category: 'Molhos e Condimentos', data: ['Molho de Tomate', 'Molho de Pimenta', 'Molho de Soja']},
                ]}
                renderItem={({item}) => <Text style={styles.item}>{item}</Text>}
                renderSectionHeader={({section}) => <Text style={styles.sectionHeader}>{section.category}</Text>}
                keyExtractor={(item, index) => `basicListEntry-${item.title}`}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
     flex: 1,
     paddingTop: 22
    },
    sectionHeader: {
      paddingTop: 2,
      paddingLeft: 10,
      paddingRight: 10,
      paddingBottom: 2,
      fontSize: 14,
      fontWeight: 'bold',
      backgroundColor: 'rgba(247,247,247,1.0)',
    },
    item: {
      padding: 10,
      fontSize: 18,
      height: 44,
    },
})