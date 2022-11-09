import { StringifyOptions } from "querystring"
import { Float } from "react-native/Libraries/Types/CodegenTypes"

// returned by getProduct
export interface ProductResponse {
  barCode: number,
  productName: string,
  productCategory: string,
  picturePath: string,
  productIngredients: string | null,
  // createdAt: string | null,
  idBrand: string,
  idSafety: number,
  idReport: string,
  // brandName: string | null,
  // contact: string | null,
  // logoPath: string | null,
  // category: string | null,
  // description: string | null,
}

export interface ProductResponseFromList {
  barCode: number,
  // brandName: string,
  // safetyCategory: string,
  productName: string,
  productCategory: string,
  picturePath: string,
  productIngredients: string,
  // createdAt: string,
  idBrand: string,
  idSafety: number,
  idReport: string
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
