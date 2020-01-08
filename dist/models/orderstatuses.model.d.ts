import { Entity } from '@loopback/repository';
export declare class Orderstatuses extends Entity {
    id?: string;
    title: string;
    [prop: string]: any;
    constructor(data?: Partial<Orderstatuses>);
}
export interface OrderstatusesRelations {
}
export declare type OrderstatusesWithRelations = Orderstatuses & OrderstatusesRelations;
