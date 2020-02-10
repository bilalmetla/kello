import { Entity } from '@loopback/repository';
import { Orders } from './orders.model';
export declare class Customers extends Entity {
    id?: string;
    name: string;
    phone: string;
    access_token?: string;
    isActivated?: boolean;
    createdDate?: Date;
    updatedDate?: Date;
    deviceId?: string;
    deviceToken?: string;
    orders: Orders[];
    constructor(data?: Partial<Customers>);
}
export interface CustomersRelations {
}
export declare type CustomersWithRelations = Customers & CustomersRelations;
