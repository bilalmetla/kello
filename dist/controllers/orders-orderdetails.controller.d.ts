import { Count, Filter, Where } from '@loopback/repository';
import { Orders, Orderdetails } from '../models';
import { OrdersRepository } from '../repositories';
export declare class OrdersOrderdetailsController {
    protected ordersRepository: OrdersRepository;
    constructor(ordersRepository: OrdersRepository);
    find(id: string, filter?: Filter<Orderdetails>): Promise<Orderdetails[]>;
    create(id: typeof Orders.prototype.id, orderdetails: Omit<Orderdetails, 'id'>): Promise<Orderdetails>;
    patch(id: string, orderdetails: Partial<Orderdetails>, where?: Where<Orderdetails>): Promise<Count>;
    delete(id: string, where?: Where<Orderdetails>): Promise<Count>;
}
