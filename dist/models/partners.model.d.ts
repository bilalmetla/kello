import { Entity } from '@loopback/repository';
import { Orders } from './orders.model';
export interface PartnerLocationObject {
    [key: string]: any[];
}
export declare class Partners extends Entity {
    id?: string;
    name: string;
    phone: string;
    pin?: number;
    access_token?: string;
    lastActive?: string;
    isActivated?: boolean;
    location?: any;
    creationDate?: string;
    deviceId?: string;
    partnertypesId: string;
    orders: Orders[];
    [prop: string]: any;
    constructor(data?: Partial<Partners>);
}
export interface PartnersRelations {
}
export declare type PartnersWithRelations = Partners & PartnersRelations;
