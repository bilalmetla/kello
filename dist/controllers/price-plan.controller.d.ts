import { Count, Filter, Where } from '@loopback/repository';
import { PricePlan } from '../models';
import { PricePlanRepository } from '../repositories';
export declare class PricePlanController {
    pricePlanRepository: PricePlanRepository;
    constructor(pricePlanRepository: PricePlanRepository);
    create(pricePlan: Omit<PricePlan, 'id'>): Promise<PricePlan>;
    count(where?: Where<PricePlan>): Promise<Count>;
    find(filter?: Filter<PricePlan>): Promise<PricePlan[]>;
    updateAll(pricePlan: PricePlan, where?: Where<PricePlan>): Promise<Count>;
    findById(id: string, filter?: Filter<PricePlan>): Promise<PricePlan>;
    updateById(id: string, pricePlan: PricePlan): Promise<void>;
    replaceById(id: string, pricePlan: PricePlan): Promise<void>;
    deleteById(id: string): Promise<void>;
}
