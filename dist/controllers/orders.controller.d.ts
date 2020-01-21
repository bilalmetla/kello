import { Count, Filter, Where } from '@loopback/repository';
import { Orders } from '../models';
import { OrdersRepository } from '../repositories';
export declare class OrdersController {
    ordersRepository: OrdersRepository;
    constructor(ordersRepository: OrdersRepository);
    create(orders: Omit<Orders, 'id'>): Promise<Orders>;
    count(where?: Where<Orders>): Promise<Count>;
    find(filter?: Filter<Orders>): Promise<Orders[]>;
    updateAll(orders: Orders, where?: Where<Orders>): Promise<Count>;
    findById(id: string, filter?: Filter<Orders>): Promise<Orders>;
    updateById(id: string, orders: Orders): Promise<void>;
    replaceById(id: string, orders: Orders): Promise<void>;
    deleteById(id: string): Promise<void>;
    orderDelevered(id: string, where?: Where<Orders>): Promise<object>;
    orderCancellation(customersId: string, id: string): Promise<object>;
    orderStartProgress(id: string): Promise<object>;
    orderHistory(customersId: string): Promise<Orders[]>;
}
