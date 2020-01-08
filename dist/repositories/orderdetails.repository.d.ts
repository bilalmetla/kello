import { DefaultCrudRepository, BelongsToAccessor } from '@loopback/repository';
import { Orderdetails, OrderdetailsRelations, Units } from '../models';
import { KilloDataSource } from '../datasources';
import { Getter } from '@loopback/core';
import { UnitsRepository } from './units.repository';
export declare class OrderdetailsRepository extends DefaultCrudRepository<Orderdetails, typeof Orderdetails.prototype.id, OrderdetailsRelations> {
    protected unitsRepositoryGetter: Getter<UnitsRepository>;
    readonly units: BelongsToAccessor<Units, typeof Orderdetails.prototype.id>;
    constructor(dataSource: KilloDataSource, unitsRepositoryGetter: Getter<UnitsRepository>);
}
