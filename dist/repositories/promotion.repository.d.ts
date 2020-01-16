import { DefaultCrudRepository, BelongsToAccessor } from '@loopback/repository';
import { Promotion, PromotionRelations, Promotiontype } from '../models';
import { KilloDataSource } from '../datasources';
import { Getter } from '@loopback/core';
import { PromotiontypeRepository } from './promotiontype.repository';
export declare class PromotionRepository extends DefaultCrudRepository<Promotion, typeof Promotion.prototype.id, PromotionRelations> {
    protected promotiontypeRepositoryGetter: Getter<PromotiontypeRepository>;
    readonly promotiontype: BelongsToAccessor<Promotiontype, typeof Promotion.prototype.id>;
    constructor(dataSource: KilloDataSource, promotiontypeRepositoryGetter: Getter<PromotiontypeRepository>);
}
