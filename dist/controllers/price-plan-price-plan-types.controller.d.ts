import { PricePlan, PricePlanTypes } from '../models';
import { PricePlanRepository } from '../repositories';
export declare class PricePlanPricePlanTypesController {
    pricePlanRepository: PricePlanRepository;
    constructor(pricePlanRepository: PricePlanRepository);
    getPricePlanTypes(id: typeof PricePlan.prototype.id): Promise<PricePlanTypes>;
}
