import { Count, Filter, Where } from '@loopback/repository';
import { PricePlan } from '../models';
import { PricePlanRepository, ProductsRepository } from '../repositories';
export declare class PricePlanController {
    pricePlanRepository: PricePlanRepository;
    productsRepository: ProductsRepository;
    constructor(pricePlanRepository: PricePlanRepository, productsRepository: ProductsRepository);
    create(pricePlan: Omit<PricePlan, 'id'>): Promise<PricePlan>;
    count(where?: Where<PricePlan>): Promise<Count>;
    find(filter?: Filter<PricePlan>): Promise<PricePlan[]>;
    updateAll(pricePlan: PricePlan, where?: Where<PricePlan>): Promise<Count>;
    findById(id: string, filter?: Filter<PricePlan>): Promise<PricePlan>;
    updateById(id: string, pricePlan: PricePlan): Promise<void>;
    replaceById(id: string, pricePlan: PricePlan): Promise<void>;
    deleteById(id: string): Promise<void>;
    applyPricePlan(id: string): Promise<Omit<PricePlan, 'id'>>;
    stopPricePlan(id: string): Promise<Omit<PricePlan, 'id'>>;
}
