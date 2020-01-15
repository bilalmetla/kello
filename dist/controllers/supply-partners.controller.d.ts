import { Supply, Partners } from '../models';
import { SupplyRepository } from '../repositories';
export declare class SupplyPartnersController {
    supplyRepository: SupplyRepository;
    constructor(supplyRepository: SupplyRepository);
    getPartners(id: typeof Supply.prototype.id): Promise<Partners>;
}
