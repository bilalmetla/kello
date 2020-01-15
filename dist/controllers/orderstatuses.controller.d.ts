import { Count, Filter, Where } from '@loopback/repository';
import { Orderstatuses } from '../models';
import { OrderstatusesRepository } from '../repositories';
export declare class OrderstatusesController {
    orderstatusesRepository: OrderstatusesRepository;
    constructor(orderstatusesRepository: OrderstatusesRepository);
    create(orderstatuses: Omit<Orderstatuses, 'id'>): Promise<Orderstatuses>;
    count(where?: Where<Orderstatuses>): Promise<Count>;
    find(filter?: Filter<Orderstatuses>): Promise<Orderstatuses[]>;
    updateAll(orderstatuses: Orderstatuses, where?: Where<Orderstatuses>): Promise<Count>;
    findById(id: string, filter?: Filter<Orderstatuses>): Promise<Orderstatuses>;
    updateById(id: string, orderstatuses: Orderstatuses): Promise<void>;
    replaceById(id: string, orderstatuses: Orderstatuses): Promise<void>;
    deleteById(id: string): Promise<void>;
}
