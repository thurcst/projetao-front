import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { NavigationScreenProp } from 'react-navigation';

export interface SectionProps {
    productCategory: string;
    urlImage: string;
    navigation: NavigationScreenProp<any,any>
}

const Section = ({ productCategory, urlImage, navigation }: SectionProps) => {
    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.button} activeOpacity={0.8}
                              onPress={() => navigation.navigate("CategoryPage", { productCategory })}
            >
                <Image
                    style={styles.image}
                    source={{
                        uri: urlImage,
                    }}
                />
            </TouchableOpacity>
            <Text style={styles.text}>{productCategory}</Text>
        </View>
    )

};


export default Section;

const styles = StyleSheet.create({
    container: {
        marginRight: 10,
        width: 180,
        height: 120,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'column',
    },
    text: {
        color: 'black',
        fontSize: 16,
        marginTop: 10,
    },
    button: {
        flex: 1,
        width: '100%',
        height: '100%',
    },
    image: {
        resizeMode: 'cover',
        flex: 1,
        width: '100%',
        height: '100%',
        borderRadius: 20,

    },
  });

