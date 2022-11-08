import { StringifyOptions } from "querystring"
import { Float } from "react-native/Libraries/Types/CodegenTypes"

// returned by getProduct
export interface ProductResponse {
  barCode: number,
  productName: string,
  productCategory: string,
  picturePath: string,
  productIngredients: string,
  createdAt: string,
  idBrand: number,
  idSafety: number,
  idReport: number,
  brandName: string,
  contact: string,
  logoPath: string,
  category: string,
  description: string,
}

export interface ProductResponseFromList {
  barCode: number,
  brandName: string,
  safetyCategory: string,
  productName: string,
  productCategory: string,
  picturePath: string,
  productIngredients: string,
  createdAt: string,
  idBrand: number,
  idSafety: number,
  idReport: number
}

export interface TokensResponse {
  access: string,
  refresh: string
}

export interface Review {
  idReview?: number,
  idProduct: number,
  user: string,
  text: string,
  grade: Float,
}
