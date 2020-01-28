import { Count, Filter, Where } from '@loopback/repository';
import { PricePlanTypes } from '../models';
import { PricePlanTypesRepository } from '../repositories';
export declare class PricePlanTypesController {
    pricePlanTypesRepository: PricePlanTypesRepository;
    constructor(pricePlanTypesRepository: PricePlanTypesRepository);
    create(pricePlanTypes: Omit<PricePlanTypes, 'id'>): Promise<PricePlanTypes>;
    count(where?: Where<PricePlanTypes>): Promise<Count>;
    find(filter?: Filter<PricePlanTypes>): Promise<PricePlanTypes[]>;
    updateAll(pricePlanTypes: PricePlanTypes, where?: Where<PricePlanTypes>): Promise<Count>;
    findById(id: string, filter?: Filter<PricePlanTypes>): Promise<PricePlanTypes>;
    updateById(id: string, pricePlanTypes: PricePlanTypes): Promise<void>;
    replaceById(id: string, pricePlanTypes: PricePlanTypes): Promise<void>;
    deleteById(id: string): Promise<void>;
}
