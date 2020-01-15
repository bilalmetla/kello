import { DefaultCrudRepository } from '@loopback/repository';
import { Feedbacktypes, FeedbacktypesRelations } from '../models';
import { KilloDataSource } from '../datasources';
export declare class FeedbacktypesRepository extends DefaultCrudRepository<Feedbacktypes, typeof Feedbacktypes.prototype.id, FeedbacktypesRelations> {
    constructor(dataSource: KilloDataSource);
}
