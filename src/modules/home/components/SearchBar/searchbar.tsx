import React, { useState } from 'react';
import ReactSearchBar from 'react-native-platform-searchbar';

const SearchBar = () => {
    const [value, setValue] = useState('');
    return(
        <ReactSearchBar
            value={value}
            onChangeText={setValue}
            placeholder="Search"
            onClear={() => setValue('')}
            onCancel={() => setValue('')}
            iconColor="green"
            returnKeyType="search"
            onKeyPress={() => console.log('onKeyPress')}
        />
    );
};

export default SearchBar;

