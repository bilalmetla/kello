import { Accounts, Customers } from '../models';
import { AccountsRepository } from '../repositories';
export declare class AccountsCustomersController {
    accountsRepository: AccountsRepository;
    constructor(accountsRepository: AccountsRepository);
    getCustomers(id: typeof Accounts.prototype.id): Promise<Customers>;
}
