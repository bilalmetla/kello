import { Supply, Products } from '../models';
import { SupplyRepository } from '../repositories';
export declare class SupplyProductsController {
    supplyRepository: SupplyRepository;
    constructor(supplyRepository: SupplyRepository);
    getProducts(id: typeof Supply.prototype.id): Promise<Products>;
}
