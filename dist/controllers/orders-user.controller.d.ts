import { Orders, User } from '../models';
import { OrdersRepository } from '../repositories';
export declare class OrdersUserController {
    ordersRepository: OrdersRepository;
    constructor(ordersRepository: OrdersRepository);
    getUser(id: typeof Orders.prototype.id): Promise<User>;
}
