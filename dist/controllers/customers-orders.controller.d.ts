import { Count, Filter, Where } from '@loopback/repository';
import { Customers, Orders } from '../models';
import { CustomersRepository, PartnersRepository, ProductsRepository, OrderdetailsRepository } from '../repositories';
export declare class CustomersOrdersController {
    protected customersRepository: CustomersRepository;
    protected partnersRepository: PartnersRepository;
    protected productsRepository: ProductsRepository;
    protected orderdetailsRepository: OrderdetailsRepository;
    constructor(customersRepository: CustomersRepository, partnersRepository: PartnersRepository, productsRepository: ProductsRepository, orderdetailsRepository: OrderdetailsRepository);
    find(id: string, filter?: Filter<Orders>): Promise<Orders[]>;
    create(id: typeof Customers.prototype.id, orders: Omit<Orders, 'id'>): Promise<any>;
    patch(id: string, orders: Partial<Orders>, where?: Where<Orders>): Promise<Count>;
    delete(id: string, where?: Where<Orders>): Promise<Count>;
}
