import {IsString, Min, Max, IsNumber, IsEnum} from 'class-validator';
import {ProductType} from "../Cell/Cell";

export class AllocateCellDTO {
    @Min(1)
    @Max(10)
    @IsNumber()
    quantity: number

    @IsString()
    @IsEnum(ProductType)
    productType: ProductType
}
