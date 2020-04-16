import { Count, Filter, Where } from '@loopback/repository';
import { Partners, Activations, User } from '../models';
import { PartnersRepository, ActivationsRepository, UserRepository } from '../repositories';
export declare class PartnersController {
    partnersRepository: PartnersRepository;
    activationsRepository: ActivationsRepository;
    userRepository: UserRepository;
    constructor(partnersRepository: PartnersRepository, activationsRepository: ActivationsRepository, userRepository: UserRepository);
    create(partners: Omit<Partners, 'id'>): Promise<Partners>;
    count(where?: Where<Partners>): Promise<Count>;
    find(filter?: Filter<Partners>): Promise<Partners[]>;
    updateAll(partners: Partners, where?: Where<Partners>): Promise<Count>;
    findById(id: string, filter?: Filter<Partners>): Promise<Partners>;
    updateById(id: string, partners: Partners): Promise<void>;
    replaceById(id: string, partners: Partners): Promise<void>;
    deleteById(id: string): Promise<void>;
    authenticate(partners: Omit<Partners, 'id'>): Promise<User | Partners | any>;
    activation(activations: Activations): Promise<Partners | any>;
    updatePartnerLocation(id: string, long: string, lat: string): Promise<object>;
    validatePhone(phone: string): string;
}
