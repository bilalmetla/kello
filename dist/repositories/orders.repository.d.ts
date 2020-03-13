import { DefaultCrudRepository, BelongsToAccessor, HasManyRepositoryFactory } from '@loopback/repository';
import { Orders, OrdersRelations, Orderstatuses, Orderdetails, Partners, User, Customers } from '../models';
import { KilloDataSource } from '../datasources';
import { Getter } from '@loopback/core';
import { OrderstatusesRepository } from './orderstatuses.repository';
import { OrderdetailsRepository } from './orderdetails.repository';
import { PartnersRepository } from './partners.repository';
import { UserRepository } from './user.repository';
import { CustomersRepository } from './customers.repository';
export declare class OrdersRepository extends DefaultCrudRepository<Orders, typeof Orders.prototype.id, OrdersRelations> {
    protected orderstatusesRepositoryGetter: Getter<OrderstatusesRepository>;
    protected orderdetailsRepositoryGetter: Getter<OrderdetailsRepository>;
    protected partnersRepositoryGetter: Getter<PartnersRepository>;
    protected userRepositoryGetter: Getter<UserRepository>;
    protected customersRepositoryGetter: Getter<CustomersRepository>;
    readonly orderstatuses: BelongsToAccessor<Orderstatuses, typeof Orders.prototype.id>;
    readonly orderdetails: HasManyRepositoryFactory<Orderdetails, typeof Orders.prototype.id>;
    readonly partners: BelongsToAccessor<Partners, typeof Orders.prototype.id>;
    readonly user: BelongsToAccessor<User, typeof Orders.prototype.id>;
    readonly customers: BelongsToAccessor<Customers, typeof Orders.prototype.id>;
    constructor(dataSource: KilloDataSource, orderstatusesRepositoryGetter: Getter<OrderstatusesRepository>, orderdetailsRepositoryGetter: Getter<OrderdetailsRepository>, partnersRepositoryGetter: Getter<PartnersRepository>, userRepositoryGetter: Getter<UserRepository>, customersRepositoryGetter: Getter<CustomersRepository>);
}
