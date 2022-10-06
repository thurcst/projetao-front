import axios from "axios";

const instance = axios.create({
    baseURL: "https://semgluserver.cin.ufpe.br"
});

const url = "https://semgluserver.cin.ufpe.br";
export async function getProduct(productId: number) {
    try {
        const axiosResponse = await instance.get("/product/" + productId.toString() + "/");
        const axiosSafetyData = await instance.get("/safety/" + axiosResponse.data.idSafety.toString() + "/");
        axiosResponse.data["safetyCategory"] = axiosSafetyData.data.description;
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
            params: params
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
            params: params
        });
        // url do get = baseURL + "/products/?search=" + finalStringToSearch + "&product=productName"
        return axiosResponse.data;
    } catch (error) {
        console.log("não achei a database " + error);
        return null;
    }
}