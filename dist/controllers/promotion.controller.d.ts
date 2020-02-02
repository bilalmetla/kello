import { Count, Filter, Where } from '@loopback/repository';
import { Promotion } from '../models';
import { PromotionRepository, ProductsRepository } from '../repositories';
export declare class PromotionController {
    promotionRepository: PromotionRepository;
    productsRepository: ProductsRepository;
    constructor(promotionRepository: PromotionRepository, productsRepository: ProductsRepository);
    create(promotion: Omit<Promotion, 'id'>): Promise<Promotion>;
    count(where?: Where<Promotion>): Promise<Count>;
    find(filter?: Filter<Promotion>): Promise<Promotion[]>;
    updateAll(promotion: Promotion, where?: Where<Promotion>): Promise<Count>;
    findById(id: string, filter?: Filter<Promotion>): Promise<Promotion>;
    updateById(id: string, promotion: Promotion): Promise<void>;
    replaceById(id: string, promotion: Promotion): Promise<void>;
    deleteById(id: string): Promise<void>;
    convertbase64image(imagename: string, image: string): Promise<string>;
    applyPromotions(id: string): Promise<Omit<Promotion, 'id'>>;
    stoppromotions(id: string): Promise<Omit<Promotion, 'id'>>;
}
