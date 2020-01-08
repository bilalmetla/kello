import { Count, Filter, Where } from '@loopback/repository';
import { Partners } from '../models';
import { PartnersRepository } from '../repositories';
export declare class PartnersController {
    partnersRepository: PartnersRepository;
    constructor(partnersRepository: PartnersRepository);
    create(partners: Omit<Partners, 'id'>): Promise<Partners>;
    count(where?: Where<Partners>): Promise<Count>;
    find(filter?: Filter<Partners>): Promise<Partners[]>;
    updateAll(partners: Partners, where?: Where<Partners>): Promise<Count>;
    findById(id: string, filter?: Filter<Partners>): Promise<Partners>;
    updateById(id: string, partners: Partners): Promise<void>;
    replaceById(id: string, partners: Partners): Promise<void>;
    deleteById(id: string): Promise<void>;
}
