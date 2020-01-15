import { Entity } from '@loopback/repository';
export declare class Supply extends Entity {
    id?: string;
    referenceNo: string;
    productTitle: string;
    supplierName: string;
    quentity: number;
    quentityOnHand: number;
    supplyDate?: string;
    arrivedAt?: string;
    isArrived?: boolean;
    purchasingCost: number;
    travlingCost?: number;
    labourCost?: number;
    otherCost?: number;
    supplierId: string;
    productsId: string;
    buyingPriceUnitId: string;
    quentityUnitsId: string;
    [prop: string]: any;
    constructor(data?: Partial<Supply>);
}
export interface SupplyRelations {
}
export declare type SupplyWithRelations = Supply & SupplyRelations;
