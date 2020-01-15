import { DefaultCrudRepository } from '@loopback/repository';
import { RatingReasons, RatingReasonsRelations } from '../models';
import { KilloDataSource } from '../datasources';
export declare class RatingReasonsRepository extends DefaultCrudRepository<RatingReasons, typeof RatingReasons.prototype.id, RatingReasonsRelations> {
    constructor(dataSource: KilloDataSource);
}
