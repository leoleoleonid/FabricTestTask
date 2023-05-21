import {Cell, CellType, ProductType} from "../Cell/Cell";

export class Shelf {
    cells: Cell[][] = [];
    static maxX = 9;
    static maxY = 9;

    constructor(cells : Cell[][]) {
        this.cells = cells;
    }

    static init() {
        const cells : Cell[][] = [];
        for (let x = 0; x <= Shelf.maxX; x++) {
            for (let y = 0; y <= Shelf.maxY; y++) {
                let cellType = [];
                if (x > 8) {
                    cellType.push(CellType.Hazardous);
                }
                if (y > 6) {
                    cellType.push(CellType.Chilled);
                }

                if (!(y > 6) && !(x > 8)) {
                    cellType = [CellType.Others]
                }

                const cell = new Cell(x,y,cellType)

                if (x === 1 && y === 0 ) {
                    cell.setProductAmount(3);
                    cell.setProductType(ProductType.bread);

                } else if (x === 3 && y === 3) {
                    cell.setProductAmount(5);
                    cell.setProductType(ProductType.bamba);

                } else if (x === 9 && y === 0) {
                    cell.setProductAmount(8);
                    cell.setProductType(ProductType.bleach);
                }

                if (!Array.isArray(cells[x])) cells[x] = [];
                cells[x][y] = cell;
            }
        }
        return new Shelf(cells);
    }

    public findCell(productType: ProductType, quantity: number) : number[] | string {
        for (let x = 0; x <= Shelf.maxX; x++) {
            for (let y = 0; y <= Shelf.maxY; y++) {
                const cell = this.cells[x][y];
                try {
                    return cell.addProducts(productType, quantity)
                } catch (e) {
                    console.error(e);
                }
            }
        }

        return 'No valid cell'
    }
}


export const shelfInst : Shelf = Shelf.init();