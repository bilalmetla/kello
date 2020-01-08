import { DefaultCrudRepository } from '@loopback/repository';
import { Orderstatuses, OrderstatusesRelations } from '../models';
import { KilloDataSource } from '../datasources';
export declare class OrderstatusesRepository extends DefaultCrudRepository<Orderstatuses, typeof Orderstatuses.prototype.id, OrderstatusesRelations> {
    constructor(dataSource: KilloDataSource);
}
