import { DefaultCrudRepository, BelongsToAccessor, HasManyRepositoryFactory } from '@loopback/repository';
import { Orders, OrdersRelations, Orderstatuses, Orderdetails, Partners } from '../models';
import { KilloDataSource } from '../datasources';
import { Getter } from '@loopback/core';
import { OrderstatusesRepository } from './orderstatuses.repository';
import { OrderdetailsRepository } from './orderdetails.repository';
import { PartnersRepository } from './partners.repository';
export declare class OrdersRepository extends DefaultCrudRepository<Orders, typeof Orders.prototype.id, OrdersRelations> {
    protected orderstatusesRepositoryGetter: Getter<OrderstatusesRepository>;
    protected orderdetailsRepositoryGetter: Getter<OrderdetailsRepository>;
    protected partnersRepositoryGetter: Getter<PartnersRepository>;
    readonly orderstatuses: BelongsToAccessor<Orderstatuses, typeof Orders.prototype.id>;
    readonly orderdetails: HasManyRepositoryFactory<Orderdetails, typeof Orders.prototype.id>;
    readonly partners: BelongsToAccessor<Partners, typeof Orders.prototype.id>;
    constructor(dataSource: KilloDataSource, orderstatusesRepositoryGetter: Getter<OrderstatusesRepository>, orderdetailsRepositoryGetter: Getter<OrderdetailsRepository>, partnersRepositoryGetter: Getter<PartnersRepository>);
}
