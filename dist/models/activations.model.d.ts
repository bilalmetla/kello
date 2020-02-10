import { Entity } from '@loopback/repository';
export declare class Activations extends Entity {
    id?: string;
    phone: string;
    smsCode: number;
    expiry?: string;
    emailCode?: number;
    createdTime?: Date;
    deviceId?: string;
    deviceToken?: string;
    [prop: string]: any;
    constructor(data?: Partial<Activations>);
}
export interface ActivationsRelations {
}
export declare type ActivationsWithRelations = Activations & ActivationsRelations;
