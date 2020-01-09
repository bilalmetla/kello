import { OrderRatings, Customers } from '../models';
import { OrderRatingsRepository } from '../repositories';
export declare class OrderRatingsCustomersController {
    orderRatingsRepository: OrderRatingsRepository;
    constructor(orderRatingsRepository: OrderRatingsRepository);
    getCustomers(id: typeof OrderRatings.prototype.id): Promise<Customers>;
}
