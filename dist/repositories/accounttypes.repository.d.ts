import { DefaultCrudRepository } from '@loopback/repository';
import { Accounttypes, AccounttypesRelations } from '../models';
import { KilloDataSource } from '../datasources';
export declare class AccounttypesRepository extends DefaultCrudRepository<Accounttypes, typeof Accounttypes.prototype.id, AccounttypesRelations> {
    constructor(dataSource: KilloDataSource);
}
