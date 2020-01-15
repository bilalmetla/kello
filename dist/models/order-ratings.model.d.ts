import { Entity } from '@loopback/repository';
export declare class OrderRatings extends Entity {
    id?: string;
    points: number;
    reasonMessage?: string;
    ratingReasonsId: string;
    ordersId: string;
    customersId: string;
    [prop: string]: any;
    constructor(data?: Partial<OrderRatings>);
}
export interface OrderRatingsRelations {
}
export declare type OrderRatingsWithRelations = OrderRatings & OrderRatingsRelations;
