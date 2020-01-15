import { Entity } from '@loopback/repository';
export declare class Accounts extends Entity {
    id?: string;
    title: string;
    accountNo: string;
    credit?: string;
    debit?: number;
    accounttypesId: string;
    customersId: string;
    [prop: string]: any;
    constructor(data?: Partial<Accounts>);
}
export interface AccountsRelations {
}
export declare type AccountsWithRelations = Accounts & AccountsRelations;
