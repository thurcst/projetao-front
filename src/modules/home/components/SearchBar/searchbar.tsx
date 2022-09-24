import React, { useState } from 'react';
import ReactSearchBar from 'react-native-platform-searchbar';
import { StyleSheet } from "react-native";
import { scale } from '../../../../shared/styles/scaling_units';


const SearchBar = () => {
    const [value, setValue] = useState('');
    return(
        <ReactSearchBar
            value={value}
            onChangeText={setValue}
            placeholder="Search"
            onClear={() => setValue('')}
            onCancel={() => setValue('')}
            iconColor="black"
            returnKeyType="search"
            onKeyPress={() => console.log('onKeyPress')}
            inputStyle={styles.inputField}
            style={styles.searchBar}
        />
    );
};

const styles = StyleSheet.create({
    searchBar: {
        backgroundColor: 'white',
        paddingVertical: scale(5)
    },
    inputField: {
        borderRadius: 15,
        backgroundColor: '#DADADA'
    }
})

export default SearchBar;

