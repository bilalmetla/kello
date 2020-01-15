import { Entity } from '@loopback/repository';
export declare class Accounttypes extends Entity {
    id?: string;
    name: string;
    [prop: string]: any;
    constructor(data?: Partial<Accounttypes>);
}
export interface AccounttypesRelations {
}
export declare type AccounttypesWithRelations = Accounttypes & AccounttypesRelations;
