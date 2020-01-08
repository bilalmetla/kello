import { Accounts, Accounttypes } from '../models';
import { AccountsRepository } from '../repositories';
export declare class AccountsAccounttypesController {
    accountsRepository: AccountsRepository;
    constructor(accountsRepository: AccountsRepository);
    getAccounttypes(id: typeof Accounts.prototype.id): Promise<Accounttypes>;
}
