import React from 'react';
import { FlatList, StyleSheet, View, Text } from 'react-native';
import { NavigationScreenProp } from 'react-navigation';
import mockDataBase from '../../../../../mockDataBase';
import Section, { SectionProps } from '../Section/section';

interface HandleSectionProps {
    item: SectionProps;
    index: number;
}

export interface MainSectionProps {
    navigation: NavigationScreenProp<any,any>
}

export default function MainSection({ navigation }: MainSectionProps) {
    const renderItem = ({ item, index }: HandleSectionProps) => <Section key={index} navigation={navigation} {...item}/>;
    const keyExtractor = (item) => item.barCode;
    return(
        <View style={styles.container}>
            <FlatList
                style={styles.list}
                horizontal={false}
                numColumns={2}
                showsHorizontalScrollIndicator = {false}
                data={mockDataBase}
                renderItem={renderItem}
                keyExtractor={keyExtractor}
            />
        </View>   
    );    
}

const styles = StyleSheet.create({
    container: {
        
        backgroundColor: "white",
        paddingBottom: 5
    },
    text: {
        fontSize: 24,
        fontWeight: 'bold',
    },
    list: {
        marginTop: 10,
        marginLeft: 10,
    }
});