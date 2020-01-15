import { Entity } from '@loopback/repository';
export declare class Products extends Entity {
    id?: string;
    eng_title: string;
    urdu_title: string;
    displayName: string;
    image?: string;
    quentityOnHand?: number;
    buyingPrice?: number;
    salePrice?: number;
    retailPrice?: number;
    description?: number;
    buyingPriceUnitsId: string;
    salePriceUnitsId: string;
    retailPiceUnitsId: string;
    quentityUnitsId: string;
    producttypesId: string;
    [prop: string]: any;
    constructor(data?: Partial<Products>);
}
export interface ProductsRelations {
}
export declare type ProductsWithRelations = Products & ProductsRelations;
