import React from "react";
import mockDataBase from "../../../../mockDataBase";
import { Product } from "../types/product";

const url = "https://d849-200-124-166-196.sa.ngrok.io";
// Talvez seja necessário melhorar a checagem de erros, mas não tenho certeza porque a parte de front não vai lidar com o banco de dados
export async function getProduct(productId: number) {
    // console.log("https://b221-200-124-166-169.sa.ngrok.io/product/" + productId.toString() + "/");
    try {
        console.log("try 1");
        const response = await fetch(url + "/product/" + productId.toString() + "/");
        const data = await response.json();
        const safetyData = await fetch(url + "/safety/" + data.idSafety.toString() + "/");
        console.log("try 2");
        const safetyDataJson = await safetyData.json();
        data["safetyCategory"] = safetyDataJson.category;
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

export function getProductsByName(productName: string) {
    console.log(productName);
    let productItemFromDatabase;
    let productByName;
    for (let item of mockDataBase) {
        console.log(item.data);
        productItemFromDatabase = item.data.filter(productItem => productItem.productName == productName);
        productByName = item.data.find(productItem => productItem.productName == productName);
        if (productItemFromDatabase !== undefined) {
            break;
        }
    }
    console.log(productItemFromDatabase);
    console.log(productByName);
    if (productItemFromDatabase !== undefined) {
        const productItem = new Product(123, productItemFromDatabase.productName, productItemFromDatabase.price, productItemFromDatabase.productCategory, productItemFromDatabase.safetyCategory);
        return productItemFromDatabase;
    } else {
        const productItem = new Product();
        return productItemFromDatabase;
    }
}