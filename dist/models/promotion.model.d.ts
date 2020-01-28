import { Entity } from '@loopback/repository';
export declare class Promotion extends Entity {
    id?: string;
    title: string;
    description: string;
    promotionValue: number;
    isPromotionValueFixed: boolean;
    image?: string;
    imageUrl?: string;
    createdDate?: Date;
    effectiveDate?: Date;
    endDate: Date;
    isActive?: boolean;
    promotiontypeId: string;
    [prop: string]: any;
    constructor(data?: Partial<Promotion>);
}
export interface PromotionRelations {
}
export declare type PromotionWithRelations = Promotion & PromotionRelations;
