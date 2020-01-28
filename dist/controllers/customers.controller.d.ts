import { Count, Filter, Where } from '@loopback/repository';
import { Customers, Activations, User } from '../models';
import { CustomersRepository, ActivationsRepository, UserRepository } from '../repositories';
export declare class CustomersController {
    customersRepository: CustomersRepository;
    activationsRepository: ActivationsRepository;
    userRepository: UserRepository;
    constructor(customersRepository: CustomersRepository, activationsRepository: ActivationsRepository, userRepository: UserRepository);
    create(customers: Omit<Customers, 'id'>): Promise<Customers>;
    count(where?: Where<Customers>): Promise<Count>;
    find(filter?: Filter<Customers>): Promise<Customers[]>;
    updateAll(customers: Customers, where?: Where<Customers>): Promise<Count>;
    findById(id: string, filter?: Filter<Customers>): Promise<Customers>;
    updateById(id: string, customers: Customers): Promise<void>;
    replaceById(id: string, customers: Customers): Promise<void>;
    deleteById(id: string): Promise<void>;
    authenticate(customers: Omit<Customers, 'id'>): Promise<User | Customers>;
    activation(activations: Activations): Promise<Customers | any>;
    sendSMS(): Promise<any>;
}
