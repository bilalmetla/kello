import { Count, Filter, Where } from '@loopback/repository';
import { Accounts } from '../models';
import { AccountsRepository } from '../repositories';
export declare class AccountsController {
    accountsRepository: AccountsRepository;
    constructor(accountsRepository: AccountsRepository);
    create(accounts: Omit<Accounts, 'id'>): Promise<Accounts>;
    count(where?: Where<Accounts>): Promise<Count>;
    find(filter?: Filter<Accounts>): Promise<Accounts[]>;
    updateAll(accounts: Accounts, where?: Where<Accounts>): Promise<Count>;
    findById(id: string, filter?: Filter<Accounts>): Promise<Accounts>;
    updateById(id: string, accounts: Accounts): Promise<void>;
    replaceById(id: string, accounts: Accounts): Promise<void>;
    deleteById(id: string): Promise<void>;
}
