import axios from "axios";

const instance = axios.create({
    baseURL: "https://semgluten.cin.ufpe.br"
});

let accessToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjY2MTA1MTQ1LCJpYXQiOjE2NjUyNDExNDUsImp0aSI6IjM3ZTgyMjJkNzc2MjQwYmE5YjRkM2FlZjA4NzZkNDMxIiwidXNlcl9pZCI6MX0.Ly-bmp_j5uESFMiLZn_yIL_RnHcADKPNCbEY2nOxrsI";
let refreshToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTY2NjUzNjg2NSwiaWF0IjoxNjY1MjQwODY1LCJqdGkiOiJjYjY0OGU1NjcxYjA0ZWUxOTYwZmMxYzQ1NDZkZDViNCIsInVzZXJfaWQiOjF9.EbfPYrCftJ_N8I3oZ4-OdUasyTKF7CtufLc3ZYNRtWs";
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
        const axiosResponse = await instance.get("/productInfos/" + productId.toString() + "/");
        //const axiosSafetyData = await instance.get("/safety/" + axiosResponse.data.idSafety.toString() + "/");
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
        const axiosResponse = await instance.get("/products/", {
            params: {
                search: productCategoryArray[0],
                product: "productCategory"
            }
        });
        // url do get = baseURL + "/products/?search=" + productCategoryArray[0] + "&product=productCategory"
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
        const axiosResponse = await instance.get("/products/", {
            params: {
                search: finalStringToSearch,
                product: "productName"
            }
        });
        // url do get = baseURL + "/products/?search=" + finalStringToSearch + "&product=productName"
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