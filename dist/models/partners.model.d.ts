import { Entity } from '@loopback/repository';
export interface PartnerLocationObject {
    [key: string]: [];
}
export declare class Partners extends Entity {
    id?: string;
    name: string;
    phone: string;
    pin?: number;
    accessToken: string;
    lastActive?: string;
    isActivated: boolean;
    location?: PartnerLocationObject;
    partnertypesId: string;
    [prop: string]: any;
    constructor(data?: Partial<Partners>);
}
export interface PartnersRelations {
}
export declare type PartnersWithRelations = Partners & PartnersRelations;
