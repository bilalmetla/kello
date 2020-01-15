import { Count, Filter, Where } from '@loopback/repository';
import { Partnertypes } from '../models';
import { PartnertypesRepository } from '../repositories';
export declare class PartnertypesController {
    partnertypesRepository: PartnertypesRepository;
    constructor(partnertypesRepository: PartnertypesRepository);
    create(partnertypes: Omit<Partnertypes, 'id'>): Promise<Partnertypes>;
    count(where?: Where<Partnertypes>): Promise<Count>;
    find(filter?: Filter<Partnertypes>): Promise<Partnertypes[]>;
    updateAll(partnertypes: Partnertypes, where?: Where<Partnertypes>): Promise<Count>;
    findById(id: string, filter?: Filter<Partnertypes>): Promise<Partnertypes>;
    updateById(id: string, partnertypes: Partnertypes): Promise<void>;
    replaceById(id: string, partnertypes: Partnertypes): Promise<void>;
    deleteById(id: string): Promise<void>;
}
