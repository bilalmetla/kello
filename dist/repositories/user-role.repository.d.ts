import { DefaultCrudRepository } from '@loopback/repository';
import { UserRole, UserRoleRelations } from '../models';
import { KilloDataSource } from '../datasources';
export declare class UserRoleRepository extends DefaultCrudRepository<UserRole, typeof UserRole.prototype.id, UserRoleRelations> {
    constructor(dataSource: KilloDataSource);
}
