import { OrderRatings, Orders } from '../models';
import { OrderRatingsRepository } from '../repositories';
export declare class OrderRatingsOrdersController {
    orderRatingsRepository: OrderRatingsRepository;
    constructor(orderRatingsRepository: OrderRatingsRepository);
    getOrders(id: typeof OrderRatings.prototype.id): Promise<Orders>;
}
