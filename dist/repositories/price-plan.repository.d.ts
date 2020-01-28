import { DefaultCrudRepository, BelongsToAccessor } from '@loopback/repository';
import { PricePlan, PricePlanRelations, PricePlanTypes } from '../models';
import { KilloDataSource } from '../datasources';
import { Getter } from '@loopback/core';
import { PricePlanTypesRepository } from './price-plan-types.repository';
export declare class PricePlanRepository extends DefaultCrudRepository<PricePlan, typeof PricePlan.prototype.id, PricePlanRelations> {
    protected pricePlanTypesRepositoryGetter: Getter<PricePlanTypesRepository>;
    readonly pricePlanTypes: BelongsToAccessor<PricePlanTypes, typeof PricePlan.prototype.id>;
    constructor(dataSource: KilloDataSource, pricePlanTypesRepositoryGetter: Getter<PricePlanTypesRepository>);
}
