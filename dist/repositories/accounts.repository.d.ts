import { DefaultCrudRepository, BelongsToAccessor } from '@loopback/repository';
import { Accounts, AccountsRelations, Accounttypes, Customers } from '../models';
import { KilloDataSource } from '../datasources';
import { Getter } from '@loopback/core';
import { AccounttypesRepository } from './accounttypes.repository';
import { CustomersRepository } from './customers.repository';
export declare class AccountsRepository extends DefaultCrudRepository<Accounts, typeof Accounts.prototype.id, AccountsRelations> {
    protected accounttypesRepositoryGetter: Getter<AccounttypesRepository>;
    protected customersRepositoryGetter: Getter<CustomersRepository>;
    readonly accounttypes: BelongsToAccessor<Accounttypes, typeof Accounts.prototype.id>;
    readonly customers: BelongsToAccessor<Customers, typeof Accounts.prototype.id>;
    constructor(dataSource: KilloDataSource, accounttypesRepositoryGetter: Getter<AccounttypesRepository>, customersRepositoryGetter: Getter<CustomersRepository>);
}
