import { Count, Filter, Where } from '@loopback/repository';
import { Partners, Activations } from '../models';
import { PartnersRepository, ActivationsRepository } from '../repositories';
export declare class PartnersController {
    partnersRepository: PartnersRepository;
    activationsRepository: ActivationsRepository;
    constructor(partnersRepository: PartnersRepository, activationsRepository: ActivationsRepository);
    create(partners: Omit<Partners, 'id'>): Promise<Partners>;
    count(where?: Where<Partners>): Promise<Count>;
    find(filter?: Filter<Partners>): Promise<Partners[]>;
    updateAll(partners: Partners, where?: Where<Partners>): Promise<Count>;
    findById(id: string, filter?: Filter<Partners>): Promise<Partners>;
    updateById(id: string, partners: Partners): Promise<void>;
    replaceById(id: string, partners: Partners): Promise<void>;
    deleteById(id: string): Promise<void>;
    authenticate(partners: Omit<Partners, 'id'>): Promise<Partners>;
    activation(activations: Activations): Promise<Partners | any>;
    updatePartnerLocation(id: string, long: string, lat: string): Promise<object>;
}
