import { Supply, Units } from '../models';
import { SupplyRepository } from '../repositories';
export declare class SupplyUnitsController {
    supplyRepository: SupplyRepository;
    constructor(supplyRepository: SupplyRepository);
    getUnits(id: typeof Supply.prototype.id): Promise<Units>;
}
