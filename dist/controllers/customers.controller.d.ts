import { Count, Filter, Where } from '@loopback/repository';
import { Customers, Activations } from '../models';
import { CustomersRepository, ActivationsRepository } from '../repositories';
export declare class CustomersController {
    customersRepository: CustomersRepository;
    activationsRepository: ActivationsRepository;
    constructor(customersRepository: CustomersRepository, activationsRepository: ActivationsRepository);
    create(customers: Omit<Customers, 'id'>): Promise<Customers>;
    count(where?: Where<Customers>): Promise<Count>;
    find(filter?: Filter<Customers>): Promise<Customers[]>;
    updateAll(customers: Customers, where?: Where<Customers>): Promise<Count>;
    findById(id: string, filter?: Filter<Customers>): Promise<Customers>;
    updateById(id: string, customers: Customers): Promise<void>;
    replaceById(id: string, customers: Customers): Promise<void>;
    deleteById(id: string): Promise<void>;
    authenticate(customers: Omit<Customers, 'id'>): Promise<Customers>;
    activation(activations: Activations): Promise<Customers | any>;
}
