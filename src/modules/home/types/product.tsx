export class Product {
    private barCode: number;
    private productName: string;
    private securityGrade: number; // Remover depois para integrar com o BD
    private containsGlutenClassification: string; // Remover depois para integrar com o BD

    constructor(barCode: number, securityGrade: number, classifGluten: string) {
        this.barCode = barCode;
        this.securityGrade = securityGrade;
        this.containsGlutenClassification = classifGluten;
    }

    public getBarCode(): number {
        return this.barCode;
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

    public setName(name: string): void {
        this.productName = name;
    }
}