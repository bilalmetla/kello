import { Entity } from '@loopback/repository';
import { Orderdetails } from './orderdetails.model';
export interface OrderLocationObject {
    [key: string]: [];
}
export declare class Orders extends Entity {
    id?: string;
    orderTime?: Date;
    completionTime?: Date;
    startProgressTime?: Date;
    orderStatus?: string;
    totalBillAmount: number;
    isDelivered?: boolean;
    isCancelled?: boolean;
    orderCategory?: string;
    specialNotes?: string;
    items: object[];
    location?: any;
    orderstatusesId: string;
    orderdetails: Orderdetails[];
    partnersId?: string;
    deliveredById: string;
    customersId?: string;
    constructor(data?: Partial<Orders>);
}
export interface OrdersRelations {
}
export declare type OrdersWithRelations = Orders & OrdersRelations;
