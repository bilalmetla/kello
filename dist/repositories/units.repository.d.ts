import { DefaultCrudRepository } from '@loopback/repository';
import { Units, UnitsRelations } from '../models';
import { KilloDataSource } from '../datasources';
export declare class UnitsRepository extends DefaultCrudRepository<Units, typeof Units.prototype.id, UnitsRelations> {
    constructor(dataSource: KilloDataSource);
}
