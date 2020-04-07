import { Filter } from '@loopback/repository';
import { Products } from '../models';
import { ProductsRepository, OrdersRepository, CustomersRepository, ProducttypesRepository, OrderdetailsRepository, PartnersRepository } from '../repositories';
export declare class ShoppingController {
    productsRepository: ProductsRepository;
    ordersRepository: OrdersRepository;
    customersRepository: CustomersRepository;
    producttypesRepository: ProducttypesRepository;
    partnersRepository: PartnersRepository;
    orderdetailsRepository: OrderdetailsRepository;
    constructor(productsRepository: ProductsRepository, ordersRepository: OrdersRepository, customersRepository: CustomersRepository, producttypesRepository: ProducttypesRepository, partnersRepository: PartnersRepository, orderdetailsRepository: OrderdetailsRepository);
    find(filter?: Filter<Products>): Promise<Products[]>;
    findByProductTypeId(producttypesId: string): Promise<Products[]>;
    create(reqData: any): Promise<any>;
    validatePhone(phone: string): string;
}
