import React from "react";
import mockDataBase from "../../../../mockDataBase";
import { Product } from "../types/product";

// Talvez seja necessário melhorar a checagem de erros, mas não tenho certeza porque a parte de front não vai lidar com o banco de dados
export async function getProduct(productId: number) {
    console.log("https://localhost:8000/product/" + productId.toString() + "/");
    let productItemFromDatabase;
    try {
        console.log("try 1");
        const response = await fetch("https://localhost:8000/product/" + productId.toString() + "/").then(data => {
            return data.json();
        }).then(item => {
            console.log(item.barCode);
        });
        return response;
    } catch (error) {
        console.log("não achei a database " + error);
        return null;
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