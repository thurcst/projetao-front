import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { NavigationScreenProp } from 'react-navigation';
import { moderateScale, scale, verticalScale } from '../../../../shared/styles/scaling_units';
import { stackRouteNames } from '../../types/stackRouteNames';

export interface SectionProps {
    productCategory: string;
    urlImage: string;
    navigation: NavigationScreenProp<any,any>
}

const Section = ({ productCategory, urlImage, navigation }: SectionProps) => {
    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.button} activeOpacity={0.8}
                              onPress={() => navigation.navigate(stackRouteNames.CategoryPage, { productCategory, urlImage })}
            >
                <Image
                    style={styles.image}
                    source={{
                        uri: urlImage,
                    }}
                />
            </TouchableOpacity>
        </View>
    )

};


export default Section;

const styles = StyleSheet.create({
    container: {
        paddingVertical: scale(5),
        marginHorizontal: scale(8),
        width: moderateScale(150),
        height: verticalScale(100),
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'column',
    },
    text: {
        color: 'black',
        fontSize: moderateScale(16),
        marginTop: scale(10),
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

