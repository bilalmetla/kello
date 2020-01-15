import { Entity } from '@loopback/repository';
export declare class Producttypes extends Entity {
    id?: string;
    typeName: string;
    [prop: string]: any;
    constructor(data?: Partial<Producttypes>);
}
export interface ProducttypesRelations {
}
export declare type ProducttypesWithRelations = Producttypes & ProducttypesRelations;
