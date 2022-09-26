import React from "react";
import mockDataBase from "../../../../mockDataBase";
import { Product } from "../types/product";

const url = "https://semglu.loca.lt";
// Talvez seja necessário melhorar a checagem de erros, mas não tenho certeza porque a parte de front não vai lidar com o banco de dados
export async function getProduct(productId: number) {
    try {
        console.log("try 1");
        const response = await fetch(url + "/product/" + productId.toString() + "/");
        const data = await response.json();
        const safetyData = await fetch(url + "/safety/" + data.idSafety.toString() + "/");
        console.log("try 2");
        const safetyDataJson = await safetyData.json();
        data["safetyCategory"] = safetyDataJson.description;
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
    console.log(productCategory);
    const productCategoryArray = productCategory.split(" ");
    // let finalStringToSearch = "";
    // productCategoryArray.forEach((item) => {
    // if (item === productCategoryArray[0]) {
    //     finalStringToSearch = finalStringToSearch + item;
    // } else {
    //     finalStringToSearch = finalStringToSearch + "+" + item;
    // }
    // });
    try {
        console.log("try 1");
        const response = await fetch(url + "/products/?search=" + productCategoryArray[0] + "&product=productCategory");
        const data = await response.json();
        // const safetyData = await fetch(url + "/safety/" + data.idSafety.toString() + "/");
        console.log("try 2");
        console.log(data);
        // const safetyDataJson = await safetyData.json();
        // data["safetyCategory"] = safetyDataJson.description;
        return data;
    } catch (error) {
        console.log("não achei a database " + error);
        return null; // colocar para ir para a tela de erro
    }
    // const filteredItems = mockDataBase.find((item) => item.productCategory === productCategory).data;
    // return filteredItems;
}

export async function getProductsByName(productName: string) {
    console.log(productName);
    const productNameArray = productName.split(" ");
    let finalStringToSearch = "";
    productNameArray.forEach((item) => {
    if (item === productNameArray[0]) {
        finalStringToSearch = finalStringToSearch + item;
    } else {
        finalStringToSearch = finalStringToSearch + "+" + item;
    }
    });
    try {
        console.log("try 1");
        const response = await fetch(url + "/products/?search=" + finalStringToSearch + "&product=productName");
        const data = await response.json();
        console.log(data);
        console.log("try 2");
        return data;
    } catch (error) {
        console.log("não achei a database " + error);
        return null; // colocar para ir para a tela de erro
    }
    // let productItemFromDatabase;
    // let productByName;
    // for (let item of mockDataBase) {
    //     console.log(item.data);
    //     productItemFromDatabase = item.data.filter(productItem => productItem.productName == productName);
    //     productByName = item.data.find(productItem => productItem.productName == productName);
    //     if (productItemFromDatabase !== undefined) {
    //         break;
    //     }
    // }
    // console.log(productItemFromDatabase);
    // console.log(productByName);
    // if (productItemFromDatabase !== undefined) {
    //     const productItem = new Product(123, productItemFromDatabase.productName, productItemFromDatabase.price, productItemFromDatabase.productCategory, productItemFromDatabase.safetyCategory);
    //     return productItemFromDatabase;
    // } else {
    //     const productItem = new Product();
    //     return productItemFromDatabase;
    // }
}