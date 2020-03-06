import { Count, Filter, Where } from '@loopback/repository';
import { OrderRatings } from '../models';
import { OrderRatingsRepository, OrdersRepository } from '../repositories';
export declare class OrderRatingsController {
    orderRatingsRepository: OrderRatingsRepository;
    ordersRepository: OrdersRepository;
    constructor(orderRatingsRepository: OrderRatingsRepository, ordersRepository: OrdersRepository);
    create(orderRatings: OrderRatings[]): Promise<any>;
    count(where?: Where<OrderRatings>): Promise<Count>;
    find(filter?: Filter<OrderRatings>): Promise<OrderRatings[]>;
    updateAll(orderRatings: OrderRatings, where?: Where<OrderRatings>): Promise<Count>;
    findById(id: string, filter?: Filter<OrderRatings>): Promise<OrderRatings>;
    updateById(id: string, orderRatings: OrderRatings): Promise<void>;
    replaceById(id: string, orderRatings: OrderRatings): Promise<void>;
    deleteById(id: string): Promise<void>;
}
