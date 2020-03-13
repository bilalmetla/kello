import { RatingReasonsRepository, CustomersRepository, OrdersRepository, ConfigurationsRepository } from '../repositories';
export declare class StaticDataController {
    ratingReasonsRepository: RatingReasonsRepository;
    customersRepository: CustomersRepository;
    ordersRepository: OrdersRepository;
    configurationsRepository: ConfigurationsRepository;
    constructor(ratingReasonsRepository: RatingReasonsRepository, customersRepository: CustomersRepository, ordersRepository: OrdersRepository, configurationsRepository: ConfigurationsRepository);
    find(customerId: string): Promise<any>;
}
