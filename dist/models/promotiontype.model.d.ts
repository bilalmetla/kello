import { Entity } from '@loopback/repository';
export declare class Promotiontype extends Entity {
    id?: string;
    title: string;
    description: string;
    [prop: string]: any;
    constructor(data?: Partial<Promotiontype>);
}
export interface PromotiontypeRelations {
}
export declare type PromotiontypeWithRelations = Promotiontype & PromotiontypeRelations;
