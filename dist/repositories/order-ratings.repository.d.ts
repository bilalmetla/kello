import { DefaultCrudRepository, BelongsToAccessor } from '@loopback/repository';
import { OrderRatings, OrderRatingsRelations, RatingReasons, Orders, Customers } from '../models';
import { KilloDataSource } from '../datasources';
import { Getter } from '@loopback/core';
import { RatingReasonsRepository } from './rating-reasons.repository';
import { OrdersRepository } from './orders.repository';
import { CustomersRepository } from './customers.repository';
export declare class OrderRatingsRepository extends DefaultCrudRepository<OrderRatings, typeof OrderRatings.prototype.id, OrderRatingsRelations> {
    protected ratingReasonsRepositoryGetter: Getter<RatingReasonsRepository>;
    protected ordersRepositoryGetter: Getter<OrdersRepository>;
    protected customersRepositoryGetter: Getter<CustomersRepository>;
    readonly ratingReasons: BelongsToAccessor<RatingReasons, typeof OrderRatings.prototype.id>;
    readonly orders: BelongsToAccessor<Orders, typeof OrderRatings.prototype.id>;
    readonly customers: BelongsToAccessor<Customers, typeof OrderRatings.prototype.id>;
    constructor(dataSource: KilloDataSource, ratingReasonsRepositoryGetter: Getter<RatingReasonsRepository>, ordersRepositoryGetter: Getter<OrdersRepository>, customersRepositoryGetter: Getter<CustomersRepository>);
}
