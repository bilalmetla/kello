import { Entity } from '@loopback/repository';
export declare class Orderdetails extends Entity {
    id?: string;
    quantity: number;
    retailPrice: number | undefined;
    salePrice: number | undefined;
    purchasePrice: number | undefined;
    ordersId?: string | undefined;
    retailPriceUnitsId: string;
    purchasePriceUnitsId: string;
    salePriceUnitsId: string;
    [prop: string]: any;
    constructor(data?: Partial<Orderdetails>);
}
export interface OrderdetailsRelations {
}
export declare type OrderdetailsWithRelations = Orderdetails & OrderdetailsRelations;
