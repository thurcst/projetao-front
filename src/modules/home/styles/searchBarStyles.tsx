import styled from 'styled-components/native';
import { Dimensions, TextInput } from 'react-native';

const {width} = Dimensions.get('window');

export const Container = styled.View`
    width: ${width * 0.7}px;
    height: 60px;
    background-color: #DADADA;
    border-radius: 15px;
`;

export const Input = styled(TextInput)`
    flex: 1;
    margin-right: 60px;
    margin-left: 20px;
    color: black;
`;

export const BoxButtonSearch = styled.TouchableOpacity`
    width: 60px;
    height: 60px;
    background-color: #98FB98;
    position: absolute;
    right: 0px;
    border-radius: 15px;
    justify-content: center;
    align-items: center;
`;