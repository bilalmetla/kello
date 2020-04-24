import { Entity } from '@loopback/repository';
export declare class Stock extends Entity {
    id?: string;
    quantity: number;
    quantityWaste?: number;
    productTitle?: string;
    productsId: string;
    unitsId: string;
    [prop: string]: any;
    constructor(data?: Partial<Stock>);
}
export interface StockRelations {
}
export declare type StockWithRelations = Stock & StockRelations;
