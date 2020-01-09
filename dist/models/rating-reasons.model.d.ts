import { Entity } from '@loopback/repository';
export declare class RatingReasons extends Entity {
    id?: string;
    reason: string;
    [prop: string]: any;
    constructor(data?: Partial<RatingReasons>);
}
export interface RatingReasonsRelations {
}
export declare type RatingReasonsWithRelations = RatingReasons & RatingReasonsRelations;
