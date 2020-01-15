import { Entity } from '@loopback/repository';
export declare class Units extends Entity {
    id?: string;
    unitName: string;
    unitDisplayName: string;
    unitShortName: string;
    [prop: string]: any;
    constructor(data?: Partial<Units>);
}
export interface UnitsRelations {
}
export declare type UnitsWithRelations = Units & UnitsRelations;
