import { Orders, Orderstatuses } from '../models';
import { OrdersRepository } from '../repositories';
export declare class OrdersOrderstatusesController {
    ordersRepository: OrdersRepository;
    constructor(ordersRepository: OrdersRepository);
    getOrderstatuses(id: typeof Orders.prototype.id): Promise<Orderstatuses>;
}
