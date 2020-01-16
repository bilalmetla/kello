import { Entity } from '@loopback/repository';
export declare class Promotion extends Entity {
    id?: string;
    title: string;
    description: string;
    imageUrl?: string;
    effectiveDate?: string;
    endDate: string;
    isActive?: boolean;
    promotiontypeId: string;
    [prop: string]: any;
    constructor(data?: Partial<Promotion>);
}
export interface PromotionRelations {
}
export declare type PromotionWithRelations = Promotion & PromotionRelations;
