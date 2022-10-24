import axios from "axios";
import { Float } from "react-native/Libraries/Types/CodegenTypes";
import { ProductResponse, ProductResponseFromList, Review, TokensResponse } from "../types/responseInterfaces";

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

async function getMockedProduct(): Promise<ProductResponse> {
    return {
        "barCode": 49753257,
        "productName": "MOLHO TONKETSW",
        "productCategory": "MOLHOS E CONDIMENTOS",
        "picturePath": "http://semgluten.cin.ufpe.br/media/media/picture/49753257.png",
        "productIngredients": "",
        "createdAt": "2022-10-21T14:41:07Z",
        "idBrand": 70,
        "idSafety": 1,
        "idReport": 1,
        "brandName": "BULL-DOG",
        "contact": null,
        "logoPath": null,
        "category": "0",
        "description": "RÓTULO COM GLÚTEN OU PODE CONTER GLÚTEN",
    }
}

export async function getProduct(productId: number): Promise<ProductResponse> {
    // set to true if the server is offline
    const MOCKED = false;
    if(MOCKED) return getMockedProduct();

    try {
        const axiosResponse = await instance.get("/api/detail/productInfos/" + productId.toString() + "/");
        //const axiosSafetyData = await instance.get("/api/detail/safety/" + axiosResponse.data.idSafety.toString() + "/");
        //axiosResponse.data["safetyCategory"] = axiosSafetyData.data.description;
        axiosResponse.data.picturePath = "https://semgluten.cin.ufpe.br/media/picture/" + productId + ".png"
        return axiosResponse.data;
    } catch (error) {
        console.log("não achei a database " + error);
        return null;
    }
}

export async function getProductsByCategory(productCategory: string): Promise<ProductResponseFromList[]> {
    const productCategoryArray = productCategory.split(" ");
    var params = new URLSearchParams();
    params.append("search", productCategoryArray[0]);
    params.append("product", "productCategory");
    try {
        const axiosResponse = await instance.get("/api/list/product/", {
            params: {
                search: productCategoryArray[0],
                product: "productCategory"
            }
        });
        // url do get = baseURL + "/api/list/product/?search=" + productCategoryArray[0] + "&product=productCategory"
        return axiosResponse.data;
    } catch (error) {
        console.log("não achei a database " + error);
        return null;
    }
}

export async function getProductsByName(productName: string) {
    try {
        const axiosResponse = await instance.get("/api/list/product/", {
            params: {
                search: productName,
                product: "productName"
            }
        });
        // url do get = baseURL + "/api/list/product/?search=" + finalStringToSearch + "&product=productName"
        return axiosResponse.data;
    } catch (error) {
        console.log("não achei a database " + error);
        return null;
    }
}

export async function postReview(
    barcode: number,
    username: string,
    grade: Float,
    text: string): Promise<any> {
    const axiosResponse = await instance.post("/api/token/refresh/", {
        idProduct: barcode,
        user: username,
        grade: grade,
        text: text,
    });
    return axiosResponse.data;
}

export async function getReviewsWithBarCode(barCode: number): Promise<Review[]> {
    // url do get = <baseURL>/api/list/review/?search=<barCode>&review=idProduct
    try {
        const axiosResponse = await instance.get("/api/list/review/", {
            params: {
                search: barCode,
                review: "idProduct"
            }
        });
        return axiosResponse.data;
    } catch (e) {
        console.log(e);
        return [{
            idProduct: barCode,
            user: "",
            grade: 5,
            text: "Avaliação não encontrada",
        }]
    }
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