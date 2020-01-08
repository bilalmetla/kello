import { Entity } from '@loopback/repository';
import { Orders } from './orders.model';
export declare class Customers extends Entity {
    id?: string;
    name: string;
    phone: string;
    accessToken?: string;
    isActivated?: boolean;
    createdDate?: string;
    updatedDate?: string;
    orders: Orders[];
    [prop: string]: any;
    constructor(data?: Partial<Customers>);
}
export interface CustomersRelations {
}
export declare type CustomersWithRelations = Customers & CustomersRelations;
