export class Product {
    private barCode: number;
    private productName: string;
    private price: number;
    private productCategory: string; // Remover depois para integrar com o BD
    private safetyCategory: string; // Remover depois para integrar com o BD
    private typeItem: number;

    constructor(barCode: number = null, productName: string = null, price: number = null, productCategory: string = null, safetyCategory: string = null, typeItem: number = null) {
        this.barCode = barCode;
        this.productName = productName;
        this.price = price;
        this.productCategory = productCategory;
        this.safetyCategory = safetyCategory;
        this.typeItem = typeItem;
    }

    public getBarCode(): number {
        return this.barCode;
    }

    public getTypeItem(): number {
        return this.typeItem;
    }

    public getPrice(): number {
        return this.price;
    }

    public getName(): string {
        return this.productName;
    }

    public getProductCategory(): string {
        return this.productCategory;
    }

    public getSafetyCategory(): string {
        return this.safetyCategory;
    }

    public setBarCode(barCode: number): void {
        this.barCode = barCode;
    }

    public setTypeItem(typeItem: number): void {
        this.typeItem = typeItem;
    }

    public setName(name: string): void {
        this.productName = name;
    }

    public setProductCategory(productCategory: string): void {
        this.productCategory = productCategory;
    }

    public setSafetyCategory(safetyCategory: string): void {
        this.safetyCategory = safetyCategory;
    }

    public setPrice(price: number): void {
        this.price = price;
    }
}