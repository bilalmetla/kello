import { Entity } from '@loopback/repository';
export declare class PricePlanTypes extends Entity {
    id?: string;
    title: string;
    constructor(data?: Partial<PricePlanTypes>);
}
export interface PricePlanTypesRelations {
}
export declare type PricePlanTypesWithRelations = PricePlanTypes & PricePlanTypesRelations;
