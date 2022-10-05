const url = "https://semgluserver.cin.ufpe.br";
export async function getProduct(productId: number) {
    try {
        const response = await fetch(url + "/product/" + productId.toString() + "/");
        const data = await response.json();
        const safetyData = await fetch(url + "/safety/" + data.idSafety.toString() + "/");
        const safetyDataJson = await safetyData.json();
        data["safetyCategory"] = safetyDataJson.description;
        return data;
    } catch (error) {
        console.log("não achei a database " + error);
        return null;
    }
}

export async function getProductsByCategory(productCategory: string) {
    const productCategoryArray = productCategory.split(" ");
    try {
        const response = await fetch(url + "/products/?search=" + productCategoryArray[0] + "&product=productCategory");
        const data = await response.json();
        return data;
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
    try {
        const response = await fetch(url + "/products/?search=" + finalStringToSearch + "&product=productName");
        const data = await response.json();
        return data;
    } catch (error) {
        console.log("não achei a database " + error);
        return null;
    }
}