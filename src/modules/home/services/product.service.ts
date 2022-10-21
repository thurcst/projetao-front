import axios from "axios";

const instance = axios.create({
    baseURL: "https://semgluten.cin.ufpe.br"
});

let accessToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjY2OTk0OTkyLCJpYXQiOjE2NjYxMzA5OTIsImp0aSI6IjllNzE4Y2Y1Mjk0NzRhNjc4MjkxMmVhMmJjY2E1ZTFlIiwidXNlcl9pZCI6MX0.qgl7vTUqtjxxNq-vyH_KhF6sIA9tvQZh6ovx_3k1hFU";
let refreshToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTY2NzQyNjk5MiwiaWF0IjoxNjY2MTMwOTkyLCJqdGkiOiIxMGMxMWY0ZjExNTY0MDFiOTgxZDRkMTgyN2M5ZGU3ZCIsInVzZXJfaWQiOjF9.7MA-zRZN113HXCPPtIwDJLTGS7KaXZwrUKMlLwIMCKk";
instance.defaults.headers.common['Authorization'] = `Bearer ${accessToken}`;

const setNewAccessToken = async () => {
    accessToken = await getNewAccessToken();
}

const setNewRefreshToken = async () => {
    refreshToken = await getAuthorizationTokens();
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

export async function getProduct(productId: number) {
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

export async function getProductsByCategory(productCategory: string) {
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
    const productNameArray = productName.split(" ");
    let finalStringToSearch = "";
    productNameArray.forEach((item) => {
    if (item === productNameArray[0]) {
        finalStringToSearch = finalStringToSearch + item;
    } else {
        finalStringToSearch = finalStringToSearch + "+" + item;
    }
    });
    var params = new URLSearchParams();
    params.append("search", finalStringToSearch);
    params.append("product", "productName");
    try {
        const axiosResponse = await instance.get("/api/list/product/", {
            params: {
                search: finalStringToSearch,
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

export async function getAuthorizationTokens(): Promise<string> {
    const jsonToSend = {
                            "username": "",
                            "password": ""
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