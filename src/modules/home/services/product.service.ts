import React from "react";
import product from "../../../../mockDataBase.json";
import { Product } from "../types/product";

export function getProduct(productId: number): Product {
    const productFromDatabase = product.products.find(item => item.barCode == productId);
    const productItem = new Product(productId, productFromDatabase.productName, productFromDatabase.price, productFromDatabase.productCategory, productFromDatabase.safetyCategory);
    return productItem;
}