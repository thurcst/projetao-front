import React from "react";
import { Text, View, Image } from "react-native";
import SearchBar from "../../components/SearchBar/searchbar";

export function ProductPage( {route} ) {
  const {productName,typeItem, dataItem} = route.params;
  return (
    <View>
      <SearchBar />
      <Image
              source= {{uri:'https://cdn.discordapp.com/attachments/1014314736126545941/1016454312349683844/darkbckg.png'}}
              style={{width: '100%',height: 200, flexDirection: 'row',}}
       />
      <Text >Página do produto</Text>
      
      <Text>Nome do produto: {productName}</Text>
      <Text>Codigo de barras: Tipo = {typeItem}, Data = {dataItem}</Text>
    </View>
  );
}
