import React from "react";
import mockDataBase from "../../../../mockDataBase";
import { Product } from "../types/product";

// Talvez seja necessário melhorar a checagem de erros, mas não tenho certeza porque a parte de front não vai lidar com o banco de dados
export async function getProduct(productId: number) {
    const url = "https://d849-200-124-166-196.sa.ngrok.io";
    // console.log("https://b221-200-124-166-169.sa.ngrok.io/product/" + productId.toString() + "/");
    try {
        console.log("try 1");
        const response = await fetch(url + "/product/" + productId.toString() + "/");
        const data = await response.json();
        const safetyData = await fetch(url + "/safety/" + data.idSafety.toString() + "/");
        console.log("try 2");
        console.log("response " + response);
        const safetyDataJson = await safetyData.json();
        data["safetyCategory"] = safetyDataJson.category;
        console.log(data);
        return data;
    } catch (error) {
        console.log("não achei a database " + error);
        return null; // colocar para ir para a tela de erro
    }
    // Iterate through every item and stops if it finds the desired product
    // for (let item of mockDataBase) {
    //     productItemFromDatabase = item.data.find(productItem => productItem.barCode == productId);
    //     if (productItemFromDatabase !== undefined) {
    //         break;
    //     }
    // }
    // if (productItemFromDatabase !== undefined) {
    //     const productItem = new Product(productId, productItemFromDatabase.productName, productItemFromDatabase.price, productItemFromDatabase.productCategory, productItemFromDatabase.safetyCategory);
    //     return productItem;
    // } else {
    //     const productItem = new Product();
    //     return productItem;
    // }
}

export async function getProductsByCategory(productCategory: string) {
    const filteredItems = mockDataBase.find((item) => item.productCategory === productCategory).data;
    return filteredItems;
}