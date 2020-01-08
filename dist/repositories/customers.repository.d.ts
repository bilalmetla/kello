import { DefaultCrudRepository, HasManyRepositoryFactory } from '@loopback/repository';
import { Customers, CustomersRelations, Orders } from '../models';
import { KilloDataSource } from '../datasources';
import { Getter } from '@loopback/core';
import { OrdersRepository } from './orders.repository';
export declare class CustomersRepository extends DefaultCrudRepository<Customers, typeof Customers.prototype.id, CustomersRelations> {
    protected ordersRepositoryGetter: Getter<OrdersRepository>;
    readonly orders: HasManyRepositoryFactory<Orders, typeof Customers.prototype.id>;
    constructor(dataSource: KilloDataSource, ordersRepositoryGetter: Getter<OrdersRepository>);
}
