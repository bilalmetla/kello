import { DefaultCrudRepository, BelongsToAccessor } from '@loopback/repository';
import { Feedback, FeedbackRelations, Customers, Feedbacktypes, Partners } from '../models';
import { KilloDataSource } from '../datasources';
import { Getter } from '@loopback/core';
import { CustomersRepository } from './customers.repository';
import { FeedbacktypesRepository } from './feedbacktypes.repository';
import { PartnersRepository } from './partners.repository';
export declare class FeedbackRepository extends DefaultCrudRepository<Feedback, typeof Feedback.prototype.id, FeedbackRelations> {
    protected customersRepositoryGetter: Getter<CustomersRepository>;
    protected feedbacktypesRepositoryGetter: Getter<FeedbacktypesRepository>;
    protected partnersRepositoryGetter: Getter<PartnersRepository>;
    readonly customers: BelongsToAccessor<Customers, typeof Feedback.prototype.id>;
    readonly feedbacktypes: BelongsToAccessor<Feedbacktypes, typeof Feedback.prototype.id>;
    readonly partners: BelongsToAccessor<Partners, typeof Feedback.prototype.id>;
    constructor(dataSource: KilloDataSource, customersRepositoryGetter: Getter<CustomersRepository>, feedbacktypesRepositoryGetter: Getter<FeedbacktypesRepository>, partnersRepositoryGetter: Getter<PartnersRepository>);
}
