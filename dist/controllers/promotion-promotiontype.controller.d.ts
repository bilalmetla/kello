import { Promotion, Promotiontype } from '../models';
import { PromotionRepository } from '../repositories';
export declare class PromotionPromotiontypeController {
    promotionRepository: PromotionRepository;
    constructor(promotionRepository: PromotionRepository);
    getPromotiontype(id: typeof Promotion.prototype.id): Promise<Promotiontype>;
}
