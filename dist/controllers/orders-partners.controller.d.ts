import { Orders, Partners } from '../models';
import { OrdersRepository } from '../repositories';
export declare class OrdersPartnersController {
    ordersRepository: OrdersRepository;
    constructor(ordersRepository: OrdersRepository);
    getPartners(id: typeof Orders.prototype.id): Promise<Partners>;
}
