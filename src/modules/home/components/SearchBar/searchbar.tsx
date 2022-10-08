import React, { useState } from 'react';
import ReactSearchBar from 'react-native-platform-searchbar';
import { EvilIcons, Entypo } from '@expo/vector-icons';
import { StyleSheet, TextInput, View, Keyboard } from "react-native";
import { scale } from '../../../../shared/styles/scaling_units';
import { Input, Container } from '../../styles/searchBarStyles';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { stackRouteNames } from '../../types/stackRouteNames';
import { Alert, Text, Pressable} from "react-native";
import { KeyboardEvent } from "react";



const SearchBar = ({ navigation }) => {
    const [clicked, setClicked] = useState(false);
    const [searchPhrase, setSearchPhrase] = useState("");
    function onSearch() {
        setSearchPhrase("");
        Keyboard.dismiss();
        setClicked(false);
        navigation.navigate(stackRouteNames.SearchBarResultsPage, {searchedPhrase: searchPhrase});
    }
    const [value, setValue] = useState('');
   
    


    
    return(
    <View style={styles.container}>
      <View
        style={
          clicked
            ? styles.searchBar__clicked
            : styles.searchBar__unclicked
        }
      >
        {/* search Icon */}
        {
            !clicked &&
            (<TouchableOpacity>
                <EvilIcons name="search" size={28} color="black" style={{ marginLeft: 1 }}/>
            </TouchableOpacity>)
        }
        {
            clicked &&
            (<TouchableOpacity onPress={onSearch}>
                <EvilIcons name="search" size={28} color="black" style={{ marginLeft: 1 }}/>
            </TouchableOpacity>)
        }
        


        {/* Input field */}
        <TextInput
          style={styles.input}
          placeholder="Search"
          value={searchPhrase}
          onChangeText={setSearchPhrase}
          onFocus={() => {
            setClicked(true);
          }}
        />
        {/* cross Icon, depending on whether the search bar is clicked or not */}
        {clicked && (
          <Entypo name="cross" size={20} color="black" style={{ padding: 1 }} onPress={() => {
            setSearchPhrase("");
            Keyboard.dismiss();
            setClicked(false);
          }}/>
        )}
      </View>
    </View>
    );
};

const styles = StyleSheet.create({
    container: {
        margin: 15,
        justifyContent: "flex-start",
        alignItems: "center",
        flexDirection: "row",
        width: "95%",
    
    },
    searchBar__unclicked: {
        padding: 10,
        flexDirection: "row",
        width: "95%",
        backgroundColor: "#d9dbda",
        borderRadius: 15,
        alignItems: "center",
    },
    searchBar__clicked: {
        padding: 10,
        flexDirection: "row",
        width: "95%",
        backgroundColor: "#d9dbda",
        borderRadius: 15,
        alignItems: "center",
        justifyContent: "space-evenly",
    },
    input: {
        fontSize: 20,
        marginLeft: 10,
        width: "90%",
    },
    searchBar: {
        backgroundColor: 'white',
        paddingVertical: scale(5)
    },
    inputField: {
        borderRadius: 15,
        backgroundColor: '#DADADA'
    },
    filter: {
      color: 'green',
      textDecorationLine: 'underline'
    }


    
})

export default SearchBar;

