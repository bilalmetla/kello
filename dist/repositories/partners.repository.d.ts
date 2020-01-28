import { DefaultCrudRepository, BelongsToAccessor, HasManyRepositoryFactory } from '@loopback/repository';
import { Partners, PartnersRelations, Partnertypes, Orders } from '../models';
import { KilloDataSource } from '../datasources';
import { Getter } from '@loopback/core';
import { PartnertypesRepository } from './partnertypes.repository';
import { OrdersRepository } from './orders.repository';
export declare class PartnersRepository extends DefaultCrudRepository<Partners, typeof Partners.prototype.id, PartnersRelations> {
    protected partnertypesRepositoryGetter: Getter<PartnertypesRepository>;
    protected ordersRepositoryGetter: Getter<OrdersRepository>;
    readonly partnertypes: BelongsToAccessor<Partnertypes, typeof Partners.prototype.id>;
    readonly orders: HasManyRepositoryFactory<Orders, typeof Partners.prototype.id>;
    constructor(dataSource: KilloDataSource, partnertypesRepositoryGetter: Getter<PartnertypesRepository>, ordersRepositoryGetter: Getter<OrdersRepository>);
}
