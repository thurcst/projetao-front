import axios from "axios";
import { Float } from "react-native/Libraries/Types/CodegenTypes";
import { ProductResponse, ProductResponseFromList, Review, TokensResponse } from "../types/responseInterfaces";
import database from "../../../../database";
import reviewsDB from "../../../../reviews";

const instance = axios.create({
    baseURL: "https://semgluten.cin.ufpe.br"
});

let accessToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjY3MzM1MDQwLCJpYXQiOjE2NjY0NzEwNDAsImp0aSI6IjY5MjE0M2VlMTQ1YjRhMWVhMDg1OTQ5NzRlOTU5YWZmIiwidXNlcl9pZCI6MX0.cr890IY_J31Aqq2fBIHgfZB9mr-4krwIYAVoNFbjCgs";
let refreshToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTY2Nzc2NzA0MCwiaWF0IjoxNjY2NDcxMDQwLCJqdGkiOiIxNzBjNDViMmUwYzg0YjRiOTY0MDViMjFhNjA5OGI2NCIsInVzZXJfaWQiOjF9.4admLeoC0dhxdoImmqMUoe8YySZ1-oCwhzVVSGuotZM";
instance.defaults.headers.common['Authorization'] = `Bearer ${accessToken}`;

const setNewAccessToken = async () => {
    accessToken = await getNewAccessToken();
}

const setNewRefreshToken = async () => {
    refreshToken = (await getAuthorizationTokens()).refresh;
}

const getNewAccessToken = async (): Promise<string> => {
    const axiosResponse = await instance.post("/api/token/refresh/", {
        refresh: refreshToken
    });
    return axiosResponse.data;
}


instance.interceptors.response.use(
    response => {
        return response;
    },
    error => {
        if (error.response.status == 403) {
            setNewAccessToken();
            // if (error.response.messages[0].token_class === "AccessToken") {
            // } else if (error.response.messages[0].token_class === "RefreshToken") {
            //     setNewRefreshToken();
            // }
        }
    }
);

// async function getMockedProduct(): Promise<ProductResponse> {
//     return {
//         "barCode": 49753257,
//         "productName": "MOLHO TONKETSW",
//         "productCategory": "MOLHOS E CONDIMENTOS",
//         "picturePath": "http://semgluten.cin.ufpe.br/media/media/picture/49753257.png",
//         "productIngredients": "",
//         // "createdAt": "2022-10-21T14:41:07Z",
//         "idBrand": '70',
//         "idSafety": 1,
//         // "idReport": 1,
//         // "brandName": "BULL-DOG",
//         // "contact": null,
//         // "logoPath": null,
//         // "category": "0",
//         // "description": "RÓTULO COM GLÚTEN OU PODE CONTER GLÚTEN",
//     }
// }

export async function getProduct(productId: number): Promise<ProductResponse> {
    // set to true if the server is offline
    // const MOCKED = false;
    // if(MOCKED) return getMockedProduct();
    
    try {
        let response = database.find(item => item.barcode == productId);
        console.log(response);
        let responseJson = {
            "barCode": response.barcode,
            "productName": response.productname,
            "productCategory": response.productcategory,
            "picturePath": response.picturepath,
            "productIngredients": response.productingredients,
            "idBrand": response.idbrandid,
            "idSafety": response.idsafetyid,
            "idReport": response.idreportid
        };
        console.log(responseJson);
        return responseJson;
    } catch (error) {
        console.log(error);
        return null;
    }

    // try {
    //     const axiosResponse = await instance.get("/api/detail/productInfos/" + productId.toString() + "/");
    //     //const axiosSafetyData = await instance.get("/api/detail/safety/" + axiosResponse.data.idSafety.toString() + "/");
    //     //axiosResponse.data["safetyCategory"] = axiosSafetyData.data.description;
    //     axiosResponse.data.picturePath = "https://semgluten.cin.ufpe.br/media/picture/" + productId + ".png"
    //     return axiosResponse.data;
    // } catch (error) {
    //     console.log("não achei a database " + error);
    //     return null;
    // }
}

export async function getProductsByCategory(productCategory: string): Promise<ProductResponseFromList[]> {
    const productCategoryArray = productCategory.split(" ");
    var params = new URLSearchParams();
    params.append("search", productCategoryArray[0]);
    params.append("product", "productCategory");

    try {
        let response = database.filter(item => item.productcategory.split(" ")[0].toLowerCase() == productCategoryArray[0].toLowerCase());
        let listResponses = new Array();
        response.forEach(product => listResponses.push(
            {
                "barCode": product.barcode,
                "productName": product.productname,
                "productCategory": product.productcategory,
                "picturePath": product.picturepath,
                "productIngredients": product.productingredients,
                "idBrand": product.idbrandid,
                "idSafety": product.idsafetyid,
                "idReport": product.idreportid
            }

        ));
        console.log(listResponses);
        return listResponses;
    } catch (error) {
        console.log("não achei a database " + error);
        return null;
    }

    // try {
    //     const axiosResponse = await instance.get("/api/list/product/", {
    //         params: {
    //             search: productCategoryArray[0],
    //             product: "productCategory"
    //         }
    //     });
    //     // url do get = baseURL + "/api/list/product/?search=" + productCategoryArray[0] + "&product=productCategory"
    //     return axiosResponse.data;
    // } catch (error) {
    //     console.log("não achei a database " + error);
    //     return null;
    // }
}

export async function getProductsByName(productName: string) {
    const productNameArray = productName.split(" ");
    try {
        let response = database.filter(item => item.productname.split(" ")[0].toLowerCase() == productNameArray[0].toLowerCase());
        let listResponses = new Array();
        response.forEach(product => listResponses.push(
            {
                "barCode": product.barcode,
                "productName": product.productname,
                "productCategory": product.productcategory,
                "picturePath": product.picturepath,
                "productIngredients": product.productingredients,
                "idBrand": product.idbrandid,
                "idSafety": product.idsafetyid,
                "idReport": product.idreportid
            }

        ));
        console.log(listResponses);
        return listResponses;
    } catch (error) {
        console.log("não achei a database " + error);
        return null;
    }


    // try {
    //     const axiosResponse = await instance.get("/api/list/product/", {
    //         params: {
    //             search: productName,
    //             product: "productName"
    //         }
    //     });
    //     // url do get = baseURL + "/api/list/product/?search=" + finalStringToSearch + "&product=productName"
    //     return axiosResponse.data;
    // } catch (error) {
    //     console.log("não achei a database " + error);
    //     return null;
    // }
}

export async function postReview(
    barcode: number,
    username: string,
    grade: Float,
    text: string): Promise<any> {
    const axiosResponse = await instance.post("/api/list/review/", {
        idProduct: barcode,
        user: username,
        grade: grade,
        text: text,
    });
    return axiosResponse.data;
}

export async function getReviewsWithBarCode(barCode: number): Promise<Review[]> {
    try {
        let response = reviewsDB.filter(item => item.idproductid == barCode);
        let listResponses = new Array();
        response.forEach(product => listResponses.push(
            {
                "idProduct": product.idproductid,
                "user": product.user,
                "text": product.text,
                "grade": parseFloat(product.grade)
            }
        ));
        return listResponses;
    } catch (error) {
        console.log(error);
        return null;
    }

    // url do get = <baseURL>/api/list/review/?search=<barCode>&review=idProduct
    // try {
    //     const axiosResponse = await instance.get("/api/list/review/", {
    //         params: {
    //             search: barCode,
    //             review: "idProduct__barCode"
    //         }
    //     });
    //     console.log(axiosResponse.data);
    //     return axiosResponse.data;
    // } catch (e) {
    //     console.log(e);
    //     throw e;
    // }
}

export async function getAuthorizationTokens(): Promise<TokensResponse> {
    const jsonToSend = {
        username: "adminsemglu",
        password: "j=c@w4G%$ASnkc&8*d287asd"
    };
    const options = {
        headers: {'content-type': 'application/json'}
    };
    const data = JSON.stringify(jsonToSend);
    try {
        const axiosResponse = await instance.post("/api/token/", data, options);
        return axiosResponse.data;
    } catch (error) {
        console.log("Deu erro " + error);
        return null;
    }
}