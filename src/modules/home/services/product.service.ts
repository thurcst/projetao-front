import axios from "axios";

const instance = axios.create({
    baseURL: "https://semgluprov.loca.lt/"
});

let accessToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjY1ODg0NzcyLCJpYXQiOjE2NjUwMjA3NzIsImp0aSI6ImJiOTVmMjQ2NzIxNDRmMjBiMGJmMGRhOTE2ZTI1OGViIiwidXNlcl9pZCI6MX0.WUvW14BlzBlg0paq3_GPUgggKJiUEek3YPkAd7wBYVA";
let refreshToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTY2NjMxNjc3MiwiaWF0IjoxNjY1MDIwNzcyLCJqdGkiOiIyMmViMjJkZTFjOWI0OGYzOGUwYTllZjg4NGQzMWZjYSIsInVzZXJfaWQiOjF9.hwGEVFDr_DPyY0I_HWtyK43h5xCQHx9xWx67bxfcIkU";
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
        const axiosResponse = await instance.get("/productInfos/", {
            params: {
                search : productCategoryArray [0],
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
        const axiosResponse = await instance.get("/productInfos/", {
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
        console.log(axiosResponse.data);
        return axiosResponse.data;
    } catch (error) {
        console.log("Deu erro " + error);
        return null;
    }
}