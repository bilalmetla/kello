import { DefaultCrudRepository } from '@loopback/repository';
import { PricePlanTypes, PricePlanTypesRelations } from '../models';
import { KilloDataSource } from '../datasources';
export declare class PricePlanTypesRepository extends DefaultCrudRepository<PricePlanTypes, typeof PricePlanTypes.prototype.id, PricePlanTypesRelations> {
    constructor(dataSource: KilloDataSource);
}
