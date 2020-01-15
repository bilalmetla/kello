import { Count, Filter, Where } from '@loopback/repository';
import { Accounttypes } from '../models';
import { AccounttypesRepository } from '../repositories';
export declare class AccounttypesController {
    accounttypesRepository: AccounttypesRepository;
    constructor(accounttypesRepository: AccounttypesRepository);
    create(accounttypes: Omit<Accounttypes, 'id'>): Promise<Accounttypes>;
    count(where?: Where<Accounttypes>): Promise<Count>;
    find(filter?: Filter<Accounttypes>): Promise<Accounttypes[]>;
    updateAll(accounttypes: Accounttypes, where?: Where<Accounttypes>): Promise<Count>;
    findById(id: string, filter?: Filter<Accounttypes>): Promise<Accounttypes>;
    updateById(id: string, accounttypes: Accounttypes): Promise<void>;
    replaceById(id: string, accounttypes: Accounttypes): Promise<void>;
    deleteById(id: string): Promise<void>;
}
