import { Count, Filter, Where } from '@loopback/repository';
import { Orders } from '../models';
import { OrdersRepository } from '../repositories';
export declare class OrdersController {
    ordersRepository: OrdersRepository;
    constructor(ordersRepository: OrdersRepository);
    create(orders: Omit<Orders, 'id'>): Promise<Orders>;
    count(where?: Where<Orders>): Promise<Count>;
    find(filter: Filter<Orders>): Promise<Orders[]>;
    updateAll(orders: Orders, where?: Where<Orders>): Promise<Count>;
    findById(id: string, filter?: Filter<Orders>): Promise<Orders>;
    updateById(id: string, orders: Orders): Promise<void>;
    replaceById(id: string, orders: Orders): Promise<void>;
    deleteById(id: string): Promise<void>;
    orderHistory(customersId: string): Promise<Orders[]>;
    partnerOrderPending(id: string, filter: Filter<Orders>): Promise<Orders[]>;
    partnerOrderHistory(id: string, filter: Filter<Orders>): Promise<Orders[]>;
    updateQuantity(id: string, productId: string, quantity: number, orders: Orders): Promise<any>;
}
