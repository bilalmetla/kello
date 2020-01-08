import { Count, Filter, Where } from '@loopback/repository';
import { Producttypes } from '../models';
import { ProducttypesRepository } from '../repositories';
export declare class ProducttypesController {
    producttypesRepository: ProducttypesRepository;
    constructor(producttypesRepository: ProducttypesRepository);
    create(producttypes: Omit<Producttypes, 'id'>): Promise<Producttypes>;
    count(where?: Where<Producttypes>): Promise<Count>;
    find(filter?: Filter<Producttypes>): Promise<Producttypes[]>;
    updateAll(producttypes: Producttypes, where?: Where<Producttypes>): Promise<Count>;
    findById(id: string, filter?: Filter<Producttypes>): Promise<Producttypes>;
    updateById(id: string, producttypes: Producttypes): Promise<void>;
    replaceById(id: string, producttypes: Producttypes): Promise<void>;
    deleteById(id: string): Promise<void>;
}
