import { Entity } from '@loopback/repository';
export declare class PricePlan extends Entity {
    id?: string;
    title: string;
    shortCode?: string;
    chargeValue: number;
    inputMin?: number;
    inputMax?: number;
    minFees?: number;
    maxFees?: number;
    effectiveFrom?: string;
    effectiveTo?: string;
    isApplied?: boolean;
    pricePlanTypesId: string;
    [prop: string]: any;
    constructor(data?: Partial<PricePlan>);
}
export interface PricePlanRelations {
}
export declare type PricePlanWithRelations = PricePlan & PricePlanRelations;
