import { Entity } from '@loopback/repository';
export declare class Partnertypes extends Entity {
    id?: string;
    typeName: string;
    [prop: string]: any;
    constructor(data?: Partial<Partnertypes>);
}
export interface PartnertypesRelations {
}
export declare type PartnertypesWithRelations = Partnertypes & PartnertypesRelations;
