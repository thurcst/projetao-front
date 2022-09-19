import React from "react";
import mockDataBase from "../../../../mockDataBase";
import { Product } from "../types/product";

// Talvez seja necessário melhorar a checagem de erros, mas não tenho certeza porque a parte de front não vai lidar com o banco de dados
export function getProduct(productId: number): Product {
    let productItemFromDatabase;
    // Iterate through every item and stops if it finds the desired product
    for (let item of mockDataBase) {
        productItemFromDatabase = item.data.find(productItem => productItem.barCode == productId);
        if (productItemFromDatabase !== undefined) {
            break;
        }
    }
    if (productItemFromDatabase !== undefined) {
        const productItem = new Product(productId, productItemFromDatabase.productName, productItemFromDatabase.price, productItemFromDatabase.productCategory, productItemFromDatabase.safetyCategory);
        return productItem;
    } else {
        const productItem = new Product();
        return productItem;
    }
}