import { Count, Filter, Where } from '@loopback/repository';
import { Promotion } from '../models';
import { PromotionRepository } from '../repositories';
export declare class PromotionController {
    promotionRepository: PromotionRepository;
    constructor(promotionRepository: PromotionRepository);
    create(promotion: Omit<Promotion, 'id'>): Promise<Promotion>;
    count(where?: Where<Promotion>): Promise<Count>;
    find(filter?: Filter<Promotion>): Promise<Promotion[]>;
    updateAll(promotion: Promotion, where?: Where<Promotion>): Promise<Count>;
    findById(id: string, filter?: Filter<Promotion>): Promise<Promotion>;
    updateById(id: string, promotion: Promotion): Promise<void>;
    replaceById(id: string, promotion: Promotion): Promise<void>;
    deleteById(id: string): Promise<void>;
}
