export enum CellType {
    Chilled = "Chilled",
    Hazardous = "Hazardous",
    Others = "Others"
}

export enum ProductType {
    milk = "milk",
    yogurt = "yogurt",
    cheese = "cheese",
    bleach = "bleach",
    stain = "stain",
    removal = "removal",
    insulin = "insulin",
    bread = "bread",
    pasta = "pasta",
    salt = "salt",
    bamba = "bamba",
    apple = "apple"
}

// export enum ProductType =
//      "milk",
//     | "yogurt",
//     | "cheese",
//     | "bleach",
//     | "stain",
//     | "removal",
//     | "insulin",
//     | "bread",
//     | "pasta",
//     | "salt",
//     | "bamba",
//     | "apple"
// }

const cellTypeToProductType:{ [key: string]: ProductType[]} = {};
// cellTypeToProductType[CellType.Others] = [ProductType.bread, ProductType.pasta, ProductType.salt, ProductType.bamba, ProductType.apple];
// cellTypeToProductType[CellType.Chilled] = [ProductType.milk, ProductType.yogurt, ProductType.insulin, ProductType.cheese];
// cellTypeToProductType[CellType.Hazardous] = [ProductType.bleach, ProductType.stain, ProductType.removal, ProductType.insulin];
cellTypeToProductType["Others"] = [ProductType.bread, ProductType.pasta, ProductType.salt, ProductType.bamba, ProductType.apple];
cellTypeToProductType["Chilled"] = [ProductType.milk, ProductType.yogurt, ProductType.insulin, ProductType.cheese];
cellTypeToProductType["Hazardous"] = [ProductType.bleach, ProductType.stain, ProductType.removal, ProductType.insulin];

export class Cell {
    id: string;
    x: number;
    y: number;
    cellType: CellType[] = [];
    productType: ProductType | null = null;
    productAmount: number = 0;
    static maxAmount: number = 10;
    // static cellTypeToProductType = cellTypeToProductType;

    constructor(x: number, y: number, cellType = [CellType.Others]) {
        this.id = String(Math.random());
        this.x = x;
        this.y = y;
        this.cellType = cellType;
    }

    public addProducts(productType: ProductType, quantity: number) {
        this.isCorrectCellType(productType);
        this.isEnoughFreeSpace(quantity);
        if (this.isEmpty()) {
            this.setProductType(productType);
            this.setProductAmount(quantity);
        } else if (this.isSameProductType(productType)){
            this.setProductAmount(quantity);
        } else {
            throw 'Can\'t add to this sell'
        }

        return [this.x, this.y]

    }

    private isSameProductType(productType: ProductType) {
        return this.productType === productType;
    };

    setProductType(productType: ProductType) {
        this.productType = productType;
    }

    setProductAmount(quantity: number) {
        this.productAmount = this.productAmount  + quantity;
    }

    private isCorrectCellType(productType: ProductType): boolean {
        const condition =
            (cellTypeToProductType[CellType.Chilled].includes(productType) &&
                this.cellType.includes(CellType.Chilled))  ||
            (cellTypeToProductType[CellType.Hazardous].includes(productType) &&
                this.cellType.includes(CellType.Hazardous)) ||
            (cellTypeToProductType[CellType.Others].includes(productType) &&
                this.cellType.includes(CellType.Others) )

        if (!condition) {
            throw 'Not correct CellType'
        }

        return true;
    };

    private isEmpty(): boolean {
        return this.productAmount === 0;
    };

    private isEnoughFreeSpace(quantity: number): boolean {
        if ((this.productAmount + quantity) <  Cell.maxAmount + 1) {
            return true
        }

        throw 'no free space'
    }


}