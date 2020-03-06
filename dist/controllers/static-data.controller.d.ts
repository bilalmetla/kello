import { RatingReasonsRepository, CustomersRepository, OrdersRepository } from '../repositories';
export declare class StaticDataController {
    ratingReasonsRepository: RatingReasonsRepository;
    customersRepository: CustomersRepository;
    ordersRepository: OrdersRepository;
    constructor(ratingReasonsRepository: RatingReasonsRepository, customersRepository: CustomersRepository, ordersRepository: OrdersRepository);
    find(customerId: string): Promise<any>;
}