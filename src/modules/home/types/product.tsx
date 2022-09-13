export class Product {
    private barCode: number;
    private productName: string;
    private securityGrade: number; // Remover depois para integrar com o BD
    private containsGlutenClassification: string; // Remover depois para integrar com o BD
    private typeItem: number;

    constructor() {}

    public getBarCode(): number {
        return this.barCode;
    }

    public getTypeItem(): number {
        return this.typeItem;
    }

    public getName(): string {
        return this.productName;
    }

    public getSecurityGrade(): number {
        return this.securityGrade;
    }

    public getContainsGlutenClassification(): string {
        return this.containsGlutenClassification;
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

    public setSecurityGrade(securityGrade: number): void {
        this.securityGrade = securityGrade;
    }

    public setClassifGluten(classifGluten: string): void {
        this.containsGlutenClassification = classifGluten;
    }
    // Add a set function for each parameter
}