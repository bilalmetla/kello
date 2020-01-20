import { Count, Filter, Where } from '@loopback/repository';
import { Customers, Orders } from '../models';
import { CustomersRepository, PartnersRepository, ProductsRepository, OrderdetailsRepository, OrdersRepository } from '../repositories';
export declare class CustomersOrdersController {
    protected customersRepository: CustomersRepository;
    protected partnersRepository: PartnersRepository;
    protected productsRepository: ProductsRepository;
    protected orderdetailsRepository: OrderdetailsRepository;
    protected ordersRepository: OrdersRepository;
    constructor(customersRepository: CustomersRepository, partnersRepository: PartnersRepository, productsRepository: ProductsRepository, orderdetailsRepository: OrderdetailsRepository, ordersRepository: OrdersRepository);
    find(id: string, filter?: Filter<Orders>): Promise<Orders[] | any>;
    create(id: typeof Customers.prototype.id, orders: Omit<Orders, 'id'>): Promise<any>;
    patch(id: string, orders: Partial<Orders>, where?: Where<Orders>): Promise<Count>;
    delete(id: string, where?: Where<Orders>): Promise<Count>;
}
